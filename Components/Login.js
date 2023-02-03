const Login = () => {
  return (
    <>
      <div className="form-container sign-up-container">
        <form action="">
          <h1>Sign Up</h1>
          <div className="social-container">
            {/* Firebase will have sign in methods for different application, store them as seperate components below  */}
            {/* These are just place holders for now 👇👇 */}
            <p>Google</p>
            <p>Facebook</p>
            <p>Something</p>
          </div>
          <span>Or use your Email</span>
          <label htmlFor="">
            <input type="text" placeholder="Name" />
          </label>
          <label htmlFor="">
            <input type="email" placeholder="Email" />
          </label>
          <label htmlFor="">
            <input type="password" placeholder="Password" />
          </label>
          <button>Sign Up!</button>
        </form>
      </div>
      <div className="form-container sign-up-container">
        <form action="">
          <h1>Sign In</h1>
          <div className="social-container">
            {/* Firebase will have sign in methods for different application, store them as seperate components below  */}
            {/* These are just place holders for now 👇👇 */}
            <p>Google</p>
            <p>Facebook</p>
            <p>Something</p>
          </div>
          <span>Or use your Email</span>
          <label htmlFor="">
            <input type="text" placeholder="Name" />
          </label>
          <label htmlFor="">
            <input type="email" placeholder="Email" />
          </label>
          <label htmlFor="">
            <input type="password" placeholder="Password" />
          </label>
          <button>Sign In!</button>
        </form>
      </div>
    </>
  );
};

export default Login;
