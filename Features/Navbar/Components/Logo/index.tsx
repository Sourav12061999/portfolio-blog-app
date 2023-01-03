import {} from "react";
import styles from "./logo.module.css";
function Logo() {
  return (
    <div className={styles.container}>
      <img src="../../logo.png" alt="logo" />
      <h2>{"<Sourav/>"}</h2>
    </div>
  );
}

export default Logo;
