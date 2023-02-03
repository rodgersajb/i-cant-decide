import { AuthContext } from "Context/AuthContext";
import { useState, useContext } from "react";
import styles from "@/styles/Login.module.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import { firebase } from "./firebase";

const EmailSignIn = () => {
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

  useEffect(() => {
    if (!loggedIn) {
      authenticateUser();
    }
  }, [loggedIn]);
  return (
    <>
      <div className={styles.input}>
        <form action="" onSubmit={handleOnSubmit}>
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

          <button onClick={handleSignIn}>Sign In</button>
        </form>
      </div>
    </>
  );
};

export default EmailSignIn;
