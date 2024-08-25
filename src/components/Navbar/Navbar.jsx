import styles from "./Navbar.module.css";
import Logo from "../Logo";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <button className={`${styles.navBtn} ${styles.active}`}>Home</button>
        </li>
        <li>
          <button className={styles.navBtn}>Projects</button>
        </li>
        <li>
          <button className={styles.navBtn}>About me</button>
        </li>
        <li>
          <button className={styles.navBtn}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
