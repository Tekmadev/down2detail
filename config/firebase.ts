import { initializeApp, getApps, FirebaseApp, getApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth/web-extension";



const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIRABASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIRABASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIRABASE_MEASURMENT_ID
  };

  let app: FirebaseApp | undefined;
  let analytics: Analytics | undefined;
  let db: any;
  let auth: any;
  let storage: any;
  
  if(typeof window !== "undefined" && !getApps().length){
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    db = getFirestore(app)
    auth = getAuth(app);
    storage = getStorage(app);
  }
  

  const googleProvider = new GoogleAuthProvider();


  export {analytics, db, auth, googleProvider, storage, ref, uploadBytes, getDownloadURL};
  export {app};