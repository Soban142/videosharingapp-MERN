import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5dpbnaa0srdfWzo7TABUjXlOCG9pnxtw",
  authDomain: "lama-dev-videosharing.firebaseapp.com",
  projectId: "lama-dev-videosharing",
  storageBucket: "lama-dev-videosharing.appspot.com",
  messagingSenderId: "914030508333",
  appId: "1:914030508333:web:ab27d39c1999ad3b213ba4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

export default app;
