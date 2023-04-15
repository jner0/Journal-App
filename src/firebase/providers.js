import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    // console.log({ credentials });
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      //User Info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
    };
  }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {

  try{
     const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
     const { uid, photoURL } = resp.user;
     console.log(resp);

     return{
      ok: true,
      uid, photoURL, email, displayName
     }

  }catch (error){
      console.log(error)
      return { ok: false, errorMessage: error.message }
  }

}
