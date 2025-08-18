// This configuration is public and can be safely exposed to the client.
// Firebase security rules are used to protect data.
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyAkUstFf78zRwjwrkexbFl9ZTuCGdc4U54",
  authDomain: "licks-lids-v2.firebaseapp.com",
  projectId: "licks-lids-v2",
  storageBucket: "licks-lids-v2.appspot.com",
  messagingSenderId: "143053980742",
  appId: "1:143053980742:web:66843fcca005eb5bfcf647"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Analytics and export it for use in other parts of the app
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export { app, analytics };
