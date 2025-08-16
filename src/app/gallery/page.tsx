
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, ShoppingCart } from 'lucide-react';
import { getGalleryPortraits, updateVoteCount, type Portrait } from '@/services/gallery.service';

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
                 // Check localStorage for previously voted items *after* client-side mount.
                const localVoted = JSON.parse(localStorage.getItem('voted_portraits') || '{}');
                setVoted(localVoted);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch portraits. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchPortraits();
    }, []);

    const handleVote = async (id: string) => {
        if (voted[id]) return;

        const newVoted = { ...voted, [id]: true };
        setVoted(newVoted);
        localStorage.setItem('voted_portraits', JSON.stringify(newVoted));

        // Optimistically update UI
        setVotes(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

        try {
            await updateVoteCount(id);
        } catch (err) {
            setError('Failed to save vote. Please try again.');
            // Revert optimistic UI update on error
            setVotes(prev => ({ ...prev, [id]: prev[id] - 1 }));
            const revertedVoted = { ...voted, [id]: false };
            setVoted(revertedVoted);
            localStorage.setItem('voted_portraits', JSON.stringify(revertedVoted));
        }
    }

  return (
    <>
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight lg:text-5xl">
            The Licks & Lids Hall of Fame
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to our public gallery! Admire the dapper pets and vote for your favorite portraits.
          </p>
        </div>
        
        {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
                           <div className="w-full space-y-2">
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-10 w-full" />
                            </div>
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
          <>
            {portraits.length === 0 ? (
                 <div className="text-center py-16 border-2 border-dashed rounded-lg">
                    <h2 className="text-2xl font-semibold">The Gallery is Empty</h2>
                    <p className="mt-2 text-muted-foreground">Be the first to publish a portrait!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {portraits.map((portrait) => (
                    <Card key={portrait.id} className="overflow-hidden group">
                        <CardContent className="p-0">
                        <div className="aspect-square relative">
                            <Image
                            src={portrait.imageUrl}
                            alt={`${portrait.petName} wearing a ${portrait.hatStyle}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        </CardContent>
                        <CardHeader className="p-4">
                        <CardTitle as="h3">{portrait.petName}</CardTitle>
                        <CardDescription>Sporting a stylish {portrait.hatStyle}</CardDescription>
                        </CardHeader>
                        <CardFooter className="p-4 pt-0 flex-col gap-2">
                          <Button onClick={() => handleVote(portrait.id)} variant={voted[portrait.id] ? "secondary" : "default"} className="w-full" disabled={voted[portrait.id]}>
                              <Heart className={cn("mr-2 h-4 w-4", voted[portrait.id] ? "fill-red-500 text-red-500" : "")} />
                              {voted[portrait.id] ? 'Voted!' : 'Vote'} ({votes[portrait.id] || 0})
                          </Button>
                          <Button asChild variant="outline" className="w-full">
                              <a
                               href={`https://www.amazon.com/s?k=${encodeURIComponent(portrait.hatStyle + ' for pet')}&tag=logonitro-20`}
                               target="_blank"
                               rel="noopener noreferrer"
                              >
                                  <ShoppingCart /> Shop this look
                              </a>
                          </Button>
                        </CardFooter>
                    </Card>
                    ))}
                </div>
            )}
            <div className="text-center mt-12">
                <p className="text-xs text-muted-foreground">
                    As an Amazon Associate, we earn from qualifying purchases.
                </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
