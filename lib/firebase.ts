
// This configuration is public and can be safely exposed to the client.
// Firebase security rules are used to protect data.
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

export const firebaseConfig = {
  "projectId": "licks-lids-v2",
  "appId": "1:143053980742:web:7814a83f74abe82efcf647",
  "storageBucket": "licks-lids-v2.appspot.com",
  "apiKey": "AIzaSyAkUstFf78zRwjwrkexbFl9ZTuCGdc4U54",
  "authDomain": "licks-lids-v2.firebaseapp.com",
  "measurementId": "G-EKL6MN1C0Q",
  "messagingSenderId": "143053980742"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Analytics and export it for use in other parts of the app
// Add a check for projectId to prevent crashes if the config is not set up yet.
const analytics = firebaseConfig.projectId
  ? isSupported().then(yes => (yes ? getAnalytics(app) : null))
  : Promise.resolve(null);


export { app, analytics };
