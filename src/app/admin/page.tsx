
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';
import { firebaseConfig } from '@/lib/firebase';
import { isAdmin, type UserRole } from '@/services/auth.service';
import { getGalleryPortraits, type Portrait } from '@/services/gallery.service';
import { handleDeletePortrait } from '@/app/actions';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Trash2 } from 'lucide-react';

// Initialize Firebase
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function AdminPage() {
  const router = useRouter();
  const { toast } = useToast();
  
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [portraits, setPortraits] = useState<Portrait[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // State for the delete confirmation dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [portraitToDelete, setPortraitToDelete] = useState<Portrait | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const role = await isAdmin(currentUser.uid) ? 'admin' : 'user';
        setUserRole(role);
        if (role !== 'admin') {
          toast({ title: 'Access Denied', description: 'You must be an admin to view this page.', variant: 'destructive' });
          router.push('/');
        }
      } else {
        toast({ title: 'Access Denied', description: 'Please log in to view this page.', variant: 'destructive' });
        router.push('/');
      }
    });

    return () => unsubscribe();
  }, [router, toast]);

  useEffect(() => {
    if (userRole === 'admin') {
      const fetchPortraits = async () => {
        try {
          const fetchedPortraits = await getGalleryPortraits();
          setPortraits(fetchedPortraits);
        } catch (err) {
          setError('Failed to fetch portraits.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchPortraits();
    }
  }, [userRole]);

  const openDeleteDialog = (portrait: Portrait) => {
    setPortraitToDelete(portrait);
    setIsDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!portraitToDelete) return;

    setIsDeleting(true);
    const result = await handleDeletePortrait({ portraitId: portraitToDelete.id, imageUrl: portraitToDelete.imageUrl });

    if (result.success) {
      toast({ title: 'Success', description: result.message });
      // Refresh the list of portraits
      setPortraits(portraits.filter(p => p.id !== portraitToDelete.id));
    } else {
      toast({ title: 'Error', description: result.message, variant: 'destructive' });
    }

    setIsDeleting(false);
    setIsDialogOpen(false);
    setPortraitToDelete(null);
  };

  if (loading || userRole !== 'admin') {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          <Skeleton className="h-12 w-1/4" />
          <Skeleton className="h-8 w-1/2" />
          <div className="border rounded-lg p-2">
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage user-submitted portraits.</p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!error && (
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Image</TableHead>
                  <TableHead>Pet Name</TableHead>
                  <TableHead>Hat Style</TableHead>
                  <TableHead>Votes</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {portraits.length > 0 ? (
                  portraits.map((portrait) => (
                    <TableRow key={portrait.id}>
                      <TableCell>
                        <Image
                          src={portrait.imageUrl}
                          alt={portrait.petName}
                          width={64}
                          height={64}
                          className="rounded-md object-cover"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{portrait.petName}</TableCell>
                      <TableCell>{portrait.hatStyle}</TableCell>
                      <TableCell>{portrait.votes}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="destructive" size="icon" onClick={() => openDeleteDialog(portrait)}>
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center h-24">
                      No portraits in the gallery.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the portrait
              for "{portraitToDelete?.petName}" from the gallery and storage.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} disabled={isDeleting}>
              {isDeleting ? 'Deleting...' : 'Continue'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
