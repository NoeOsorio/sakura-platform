import axios from "axios";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as _signOut,
} from "firebase/auth";

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

export const signUp = async ({ email, password, firstName, lastName }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    await axios.post(`${process.env.REACT_APP_API_URL}/api/users`, {
      email,
      first_name: firstName,
      last_name: lastName,
      uid: user.uid,
    });
    return userCredential;
  } catch (error) {
    console.error("Error signing up with password and email", error);
    return null;
  }
};
