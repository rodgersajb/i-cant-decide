import styles from "@/styles/Login.module.css";
import { AuthContext } from "Context/AuthContext";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebase } from "./firebase";
import { useState, useEffect, useContext } from "react";

const EmailInput = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const handleSignIn = () => {
    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };
  const authenticateUser = () => {
    // determine if user is logged in
    const auth = getAuth(firebase);
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        //    <Navigate to="/Home" />;
        setLoggedIn(true);
        const uid = currentUser.uid;
      } else {
        setLoggedIn(false);
      }
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  // const handleUserSignUp = () => {
  //   <Navigate to="/Signup" />;
  // };

  useEffect(() => {
    if (!loggedIn) {
      authenticateUser();
    }
  }, [loggedIn]);

  return (
    <>
      <div className={styles.input}>
        <label htmlFor="">
          <input type="text" placeholder="Name" />
        </label>
        <label htmlFor="">
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label htmlFor="">
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
    </>
  );
};

export default EmailInput;
