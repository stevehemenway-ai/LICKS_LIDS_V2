
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, MessageSquareHeart } from 'lucide-react';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';
import { app } from '@/lib/firebase';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


export function Header() {
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

  const handleInstagramClick = () => {
    if (analytics) {
      logEvent(analytics, 'instagram_click', {
        target_url: 'https://www.instagram.com/licksandlids/',
      });
    }
     window.open('https://www.instagram.com/licksandlids/', '_blank', 'noopener,noreferrer');
  };

  const handleFacebookClick = () => {
    if (analytics) {
      logEvent(analytics, 'facebook_click', {
        target_url: 'https://www.facebook.com/profile.php?id=61579937275158',
      });
    }
    window.open('https://www.facebook.com/profile.php?id=61579937275158', '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Logo />
        <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/feedback">
                <MessageSquareHeart className="mr-2 h-4 w-4" />
                Feedback
              </Link>
            </Button>
            
            <TooltipProvider>
              <Tooltip>
                  <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={handleInstagramClick} aria-label="Instagram">
                          <Instagram />
                      </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                      <p>Follow us on Instagram</p>
                  </TooltipContent>
              </Tooltip>
              <Tooltip>
                  <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={handleFacebookClick} aria-label="Facebook">
                          <Facebook />
                      </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                      <p>Follow us on Facebook</p>
                  </TooltipContent>
              </Tooltip>
            </TooltipProvider>
        </div>
      </div>
    </header>
  );
}
