import styles from "./Login.module.css";
import PageNav from "../../Components/PageNav/PageNav";

function Login() {
  return (
    <div className={styles.login}>
      <PageNav />
      <h1>Login</h1>
    </div>
  );
}

export default Login;
