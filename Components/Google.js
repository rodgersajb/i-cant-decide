import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebase } from "./firebase";
import Image from "next/image";

const Google = () => {
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(firebase);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <div className="google" onClick={handleSignIn}>
        <Image src="google-fill.svg" alt="Google logo" width={20} height={20} />
      </div>
    </>
  );
};

export default Google;
