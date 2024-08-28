import styles from "./Navbar.module.css";
import Logo from "../Logo";

function Navbar({ refs, handleNavigate }) {
  const [homeRef, projectsRef, aboutRef, contactRef] = refs;
  return (
    <nav className={`${styles.nav} breakout`}>
      <Logo />
      <ul>
        <li>
          <button
            className={`${styles.navBtn} ${styles.active}`}
            onClick={() => handleNavigate(homeRef)}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={styles.navBtn}
            onClick={() => handleNavigate(projectsRef)}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className={styles.navBtn}
            onClick={() => handleNavigate(aboutRef)}
          >
            About me
          </button>
        </li>
        <li>
          <button
            className={styles.navBtn}
            onClick={() => handleNavigate(contactRef)}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
