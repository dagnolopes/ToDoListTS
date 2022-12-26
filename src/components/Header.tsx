import styles from "./Header.module.css";

import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Todo" />
      <strong className={styles.cab01}>to</strong>
      <strong className={styles.cab02}>do</strong>
    </header>
  );
}
