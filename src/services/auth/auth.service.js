import { auth, firestore } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as _signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const signIn = (email, password) => {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error logging in with password and email", error);
    return null;
  }
};

export const signOut = async () => {
  try {
    await _signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
};

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await setDoc(doc(firestore, "users", user.uid), {
      email: user.email,
      uid: user.uid,
      role: "student",
    });
    return userCredential;
  } catch (error) {
    console.error("Error signing up with password and email", error);
    return null;
  }
};
