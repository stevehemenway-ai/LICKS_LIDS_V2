import { Dog } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Dog className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold font-headline tracking-tight">
        Licks & Lids
      </span>
    </Link>
  );
}
