
'use client';

import { useEffect } from 'react';
import { analytics } from '@/lib/firebase';

export function FirebaseAnalytics() {
  useEffect(() => {
    // This effect will run once on the client, initializing analytics
    analytics;
  }, []);

  return null;
}
