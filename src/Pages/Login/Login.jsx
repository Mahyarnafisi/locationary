import React, { useState } from "react";
import styles from "./Login.module.css";
import brandLogo from "../../assets/brand_icon.png";
import userImage from "../../assets/user_img.jpg";
import PageNav from "../../Components/PageNav/PageNav";

function Login() {
  const [inputEmail, setInputEmail] = useState("example@email.com");
  const [inputPassword, setInputPassword] = useState(12345);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: inputEmail,
      password: inputPassword,
    };
  };

  return (
    <div className={styles.login}>
      <PageNav />

      <section className={styles.section}>
        <div className={styles.warper}>
          <form className={styles.form} onSubmit={submitHandler}>
            <img src={brandLogo} alt="" />
            <h2>Login here:</h2>
            <br />
            <label className={styles.form__label} htmlFor="email">
              Email:
            </label>
            <input className={styles.form__input} type="email" id="email" value={inputEmail} onChange={(e) => e.target.value} />

            <label className={styles.form__label} htmlFor="password">
              Password:
            </label>
            <input className={styles.form__input} type="password" id="password" value={inputPassword} />

            <button type="submit" className={styles.submit__btn}>
              Login Here <i class="bi bi-chevron-right"></i>
            </button>
          </form>

          <div className={styles.content}>
            <div className={styles.content__header}>
              <p>Locationary</p>
              <h2>Start your journey with us.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem totam rem iste quo soluta eos fuga sunt! Eum, in tenetur asperiores excepturi, expedita, soluta possimus amet inventore magnam libero eligendi!</p>
            </div>
            <div className={styles.content__body}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sed pariatur repellat tenetur consequatur ducimus!</p>
              <div className={styles.content__feedback}>
                <img src={userImage} alt="" />
                <div className={styles.feedback__text}>
                  <h4>Jack Nasion</h4>
                  <p>Business COO</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias, doloremque sapiente cupiditate libero enim!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
