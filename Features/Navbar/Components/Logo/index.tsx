import {} from "react";
import styles from "./logo.module.css";
function Logo() {
  return (
    <div className={styles.container}>
      <img src="../../logo.png" alt="logo" />
      <h1>{"<Sourav/>"}</h1>
    </div>
  );
}

export default Logo;
