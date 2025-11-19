import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const getEnvValue = (...keys) => {
  for (const key of keys) {
    const value =
      import.meta.env[key] ??

      (typeof process !== "undefined" ? process.env?.[key] : undefined);
    if (value && value !== "undefined") {
      return value.trim();
    }
  }
  return undefined;
};

const firebaseConfig = {
  apiKey: getEnvValue("VITE_FIREBASE_API_KEY", "REACT_APP_FIREBASE_API_KEY"),
  authDomain: getEnvValue(
    "VITE_FIREBASE_AUTH_DOMAIN",
    "REACT_APP_FIREBASE_AUTH_DOMAIN"
  ),
  projectId: getEnvValue(
    "VITE_FIREBASE_PROJECT_ID",
    "REACT_APP_FIREBASE_PROJECT_ID"
  ),
  storageBucket: getEnvValue(
    "VITE_FIREBASE_STORAGE_BUCKET",
    "REACT_APP_FIREBASE_STORAGE_BUCKET"
  ),
  messagingSenderId: getEnvValue(
    "VITE_FIREBASE_MESSAGING_SENDER_ID",
    "REACT_APP_FIREBASE_MESSAGING_SENDER_ID"
  ),
  appId: getEnvValue("VITE_FIREBASE_APP_ID", "REACT_APP_FIREBASE_APP_ID"),
};

// const missingEntries = Object.entries(firebaseConfig)
//   .filter(([, value]) => !value)
//   .map(([key]) => key);

const missingEntries = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingEntries.length) {
  const missingList = missingEntries.join(", ");
  throw new Error(
    `[firebase.config] Missing Firebase environment variables: ${missingList}. ` +
      "Please add them to your .env file (prefixed with VITE_ when using Vite)."
  );
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);