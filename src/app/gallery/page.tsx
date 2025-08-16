'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Loader2 } from 'lucide-react';
import { getGalleryPortraits, type Portrait } from '@/services/gallery.service';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';

export default function GalleryPage() {
    const [portraits, setPortraits] = useState<Portrait[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [votes, setVotes] = useState<Record<string, number>>({});
    const [voted, setVoted] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const fetchPortraits = async () => {
            try {
                const fetchedPortraits = await getGalleryPortraits();
                setPortraits(fetchedPortraits);
                const initialVotes = fetchedPortraits.reduce((acc, p) => ({ ...acc, [p.id]: p.votes }), {} as Record<string, number>);
                setVotes(initialVotes);
            } catch (err) {
                setError('Failed to fetch portraits. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchPortraits();
    }, []);

    const handleVote = (id: string) => {
        if (voted[id]) return;
        setVotes(prev => ({ ...prev, [id]: prev[id] + 1 }));
        setVoted(prev => ({ ...prev, [id]: true }));
    }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
            The Licks & Lids Hall of Fame
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to our public gallery! Admire the dapper dogs and vote for your favorite portraits.
          </p>
        </div>
        
        {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                        <CardContent className="p-0">
                            <Skeleton className="aspect-square w-full" />
                        </CardContent>
                        <CardHeader className="p-4">
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </CardHeader>
                        <CardFooter className="p-4 pt-0">
                            <Skeleton className="h-10 w-full" />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        )}

        {error && (
          <Alert variant="destructive" className="max-w-2xl mx-auto">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {portraits.map((portrait) => (
              <Card key={portrait.id} className="overflow-hidden group">
                  <CardContent className="p-0">
                  <div className="aspect-square relative">
                      <Image
                      src={portrait.portraitDataUri}
                      alt={`${portrait.dogName} wearing a ${portrait.hatStyle}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                  </div>
                  </CardContent>
                  <CardHeader className="p-4">
                  <CardTitle as="h3">{portrait.dogName}</CardTitle>
                  <CardDescription>Sporting a stylish {portrait.hatStyle}</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                  <Button onClick={() => handleVote(portrait.id)} variant={voted[portrait.id] ? "secondary" : "default"} className="w-full" disabled={voted[portrait.id]}>
                      <Heart className={cn("mr-2 h-4 w-4", voted[portrait.id] ? "fill-red-500 text-red-500" : "")} />
                      {voted[portrait.id] ? 'Voted!' : 'Vote'} ({votes[portrait.id] || 0})
                  </Button>
                  </CardFooter>
              </Card>
              ))}
          </div>
        )}
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Public Gallery | Licks & Lids',
  description: 'Browse the public gallery of AI-generated dog portraits. See what others have created!',
};