'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const mockPortraits = [
  { id: 1, name: 'Buddy', hat: 'Cowboy Hat', votes: 128, image: 'https://placehold.co/500x500.png', dataAiHint: 'dog cowboy' },
  { id: 2, name: 'Lucy', hat: 'Wizard Hat', votes: 99, image: 'https://placehold.co/500x500.png', dataAiHint: 'dog wizard' },
  { id: 3, name: 'Max', hat: 'Top Hat', votes: 210, image: 'https://placehold.co/500x500.png', dataAiHint: 'dog tophat' },
  { id: 4, name: 'Daisy', hat: 'Beanie', votes: 74, image: 'https://placehold.co/500x500.png', dataAiHint: 'dog beanie' },
  { id: 5, name: 'Rocky', hat: 'Fez', votes: 56, image: 'https://placehold.co/500x500.png', dataAiHint: 'dog fez' },
  { id: 6, name: 'Sadie', hat: 'Graduation Cap', votes: 150, image: 'https://placehold.co/500x500.png', dataAiHint: 'dog graduation' },
  { id: 7, name: 'Charlie', hat: 'Sombrero', votes: 189, image: 'https://placehold.co/500x500.png', dataAiHint: 'dog sombrero' },
  { id: 8, name: 'Molly', hat: 'Baseball Cap', votes: 88, image: 'https://placehold.co/500x500.png', dataAiHint: 'dog cap' },
];

export default function GalleryPage() {
    const [votes, setVotes] = useState(mockPortraits.reduce((acc, p) => ({ ...acc, [p.id]: p.votes }), {} as Record<number, number>));
    const [voted, setVoted] = useState<Record<number, boolean>>({});

    const handleVote = (id: number) => {
        if (voted[id]) return;
        setVotes(prev => ({ ...prev, [id]: prev[id] + 1 }));
        setVoted(prev => ({ ...prev, [id]: true }));
    }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
          The Licks & Lids Hall of Fame
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Welcome to our public gallery! Admire the dapper dogs and vote for your favorite portraits.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mockPortraits.map((portrait) => (
          <Card key={portrait.id} className="overflow-hidden group">
            <CardContent className="p-0">
               <div className="aspect-square relative">
                <Image
                  src={portrait.image}
                  alt={`${portrait.name} wearing a ${portrait.hat}`}
                  data-ai-hint={portrait.dataAiHint}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardContent>
            <CardHeader className="p-4">
              <CardTitle>{portrait.name}</CardTitle>
              <CardDescription>Sporting a stylish {portrait.hat}</CardDescription>
            </CardHeader>
            <CardFooter className="p-4 pt-0">
               <Button onClick={() => handleVote(portrait.id)} variant={voted[portrait.id] ? "secondary" : "default"} className="w-full" disabled={voted[portrait.id]}>
                <Heart className={cn("mr-2 h-4 w-4", voted[portrait.id] ? "fill-red-500 text-red-500" : "")} />
                {voted[portrait.id] ? 'Voted!' : 'Vote'} ({votes[portrait.id]})
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
