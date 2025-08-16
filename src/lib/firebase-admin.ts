
import { initializeApp, getApps, cert, type App, type ServiceAccount, type AppOptions } from 'firebase-admin/app';

let serviceAccount: ServiceAccount | undefined;

try {
  // IMPORTANT: This file is not committed to source control.
  // You need to download it from your Firebase project settings.
  serviceAccount = require('../../firebase-service-account.json');
} catch (e) {
  // In a deployed environment (like Firebase), the service account is often
  // configured via environment variables, so we don't need the file.
  console.log('Service account key file not found, attempting to initialize with default credentials.');
}

const appName = 'firebase-admin-app';
let app: App;

if (getApps().find(app => app.name === appName)) {
  app = getApps().find(app => app.name === appName)!;
} else {
  const options: AppOptions = {
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  };

  if (serviceAccount) {
    options.credential = cert(serviceAccount);
  }

  app = initializeApp(options, appName);
}

export { app };
