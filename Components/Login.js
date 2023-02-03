import styles from "@/styles/Login.module.css";
import EmailInput from "./EmailInput";
import Google from "./Google";

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
            <span>Or use your Email</span>
            <EmailInput />

            <button>Sign Up!</button>
          </form>
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
            <div className={styles.input}>
              <label htmlFor="">
                <input type="text" placeholder="Name" />
              </label>
              <label htmlFor="">
                <input type="email" placeholder="Email" />
              </label>
              <label htmlFor="">
                <input type="password" placeholder="Password" />
              </label>
            </div>
            <button>Sign In!</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
