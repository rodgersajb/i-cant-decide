import styles from "@/styles/Login.module.css";
import EmailSignUp from "./EmailSignUp";
import Google from "./Google";
import EmailSignIn from "./EmailSignIn";

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <form action="">
            <h1>Sign Up</h1>
            <div className={styles.social}>
              {/* Firebase will have sign in methods for different application, store them as seperate components below  */}
              {/* These are just place holders for now 👇👇 */}
              <Google />
              <p>Facebook</p>
              <p>Something</p>
            </div>
          </form>
          <span>Or use your Email</span>
          <EmailSignUp />
        </div>
        <div className="form-container sign-up-container">
          <form action="">
            <h1>Sign In</h1>
            <div className={styles.social}>
              {/* Firebase will have sign in methods for different application, store them as seperate components below  */}
              {/* These are just place holders for now 👇👇 */}
              <Google />
              <p>Facebook</p>
              <p>Something</p>
            </div>
            <span>Or use your Email</span>
            <EmailSignIn />
        
            <button>Sign In!</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
