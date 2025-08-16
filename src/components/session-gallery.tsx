import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';

type SessionGalleryProps = {
  portraits: {
    portraitDataUri: string;
    hatStyle: string;
  }[];
};

export function SessionGallery({ portraits }: SessionGalleryProps) {
  if (portraits.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-headline">
          Your Session Gallery
        </h2>
        <p className="text-xs text-muted-foreground mt-2">
            As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {portraits.map((portrait, index) => (
          <Card key={index} className="overflow-hidden group">
            <CardContent className="p-0">
              <div className="aspect-square relative">
                <Image
                  src={portrait.portraitDataUri}
                  alt={`Pet wearing ${portrait.hatStyle}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardContent>
            <CardFooter className="p-4 bg-background/80">
              <Button asChild variant="secondary" className="w-full">
                <a
                  href={`https://www.amazon.com/s?k=${encodeURIComponent(
                    portrait.hatStyle + ' for pet'
                  )}&tag=logonitro-20`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Shop for a "{portrait.hatStyle}"
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
