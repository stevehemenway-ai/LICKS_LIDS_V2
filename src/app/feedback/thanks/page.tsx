'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Home, ShoppingBag, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';
import { app } from '@/lib/firebase';

export default function ThanksPage() {
    const { toast } = useToast();
    const [analytics, setAnalytics] = useState<any>(null);

    useEffect(() => {
        // Only initialize Analytics if the projectId is available in the config
        if (app.options.projectId) {
          isSupported().then(supported => {
            if (supported) {
              setAnalytics(getAnalytics(app));
            }
          });
        }
    }, []);

    const handleBestFriendsClick = () => {
        if (analytics) {
            logEvent(analytics, 'support_best_friends_click');
        }
        window.open('https://bestfriends.org', '_blank', 'noopener,noreferrer');
    };

    const handleAmazonClick = () => {
        if (analytics) {
            logEvent(analytics, 'shop_pet_supplies_click');
        }
        const amazonTag = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG;
        if (!amazonTag) {
            console.error("Amazon Associate Tag is not configured.");
             // Fallback to a generic link if the tag is missing
            window.open('https://www.amazon.com/pets', '_blank', 'noopener,noreferrer');
            toast({ title: 'Shopping Error', description: 'The associate link could not be fully generated, but you have been redirected to Amazon Pets.', variant: 'destructive' });
            return;
        }
        const searchTerm = encodeURIComponent('pet supplies');
        const url = `https://www.amazon.com/s?k=${searchTerm}&tag=${amazonTag}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleInstagramClick = () => {
        if (analytics) {
          logEvent(analytics, 'follow_on_instagram_click');
        }
         window.open('https://www.instagram.com/licksandlids/', '_blank', 'noopener,noreferrer');
      };
    
      const handleFacebookClick = () => {
        if (analytics) {
          logEvent(analytics, 'follow_on_facebook_click');
        }
        window.open('https://www.facebook.com/profile.php?id=61579937275158', '_blank', 'noopener,noreferrer');
      };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold tracking-tight text-primary mt-8">
          Thank You!
        </h1>
        <p className="text-muted-foreground mt-2 text-lg">
          We've received your feedback. Every suggestion helps us make Licks & Lids better for pets and their people everywhere.
        </p>

        <p className="font-semibold mt-8 mb-4">Join our community & stay updated:</p>

        <div className="mt-2 flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
             <Button asChild size="lg">
                <Link href="/">
                    <Home className="mr-2"/>
                    Back to Home
                </Link>
             </Button>
             <Button onClick={handleInstagramClick} variant="outline" size="lg">
                 <Instagram className="mr-2"/>
                 Follow on Instagram
             </Button>
             <Button onClick={handleFacebookClick} variant="outline" size="lg">
                 <Facebook className="mr-2"/>
                 Follow on Facebook
             </Button>
             <Button onClick={handleBestFriendsClick} variant="outline" size="lg">
                 <Heart className="mr-2"/>
                 Support Best Friends
             </Button>
             <Button onClick={handleAmazonClick} variant="outline" size="lg">
                 <ShoppingBag className="mr-2"/>
                 Shop Pet Supplies
            </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
      </div>
    </div>
  );
}
