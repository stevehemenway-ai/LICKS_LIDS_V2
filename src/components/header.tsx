
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Menu } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import React from 'react';

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);


  const navItems = [
    { href: '/', label: 'Create' },
    { href: '/gallery', label: 'Public Gallery' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Logo />
        <nav className="ml-10 hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === item.href
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
           <Button asChild variant="outline">
            <a
              href="https://bestfriends.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className="mr-2 h-4 w-4" /> 
              <span className="hidden sm:inline">Support a Great Cause</span>
            </a>
          </Button>
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-4 py-4">
                  <Logo />
                   <nav className="grid gap-2 text-lg font-medium">
                     {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsSheetOpen(false)}
                        className={cn(
                          'flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:text-foreground',
                          pathname === item.href
                            ? 'bg-muted text-foreground'
                            : 'text-muted-foreground'
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
