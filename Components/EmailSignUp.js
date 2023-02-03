import styles from "@/styles/Login.module.css";

import { set, ref } from "@firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { firebase, db } from "./firebase";
import { useState, useEffect } from "react";

const EmailSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        alert("successfully signed up!");
        set(ref(db, "users" + user.uid), {
          email: email,
          name: name,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className={styles.input}>
        <form action="" onSubmit={handleOnSubmit}>
          <label htmlFor="">
            <input
              type="text"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
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

          <button onClick={handleSignUp}>Sign Up!</button>
        </form>
      </div>
    </>
  );
};

export default EmailSignUp;
