import styles from "./Navbar.module.css";
import Logo from "../Logo";

function Navbar({ refs }) {
  const [homeRef, projectsRef, aboutRef, contactRef] = refs;

  function handleClickLink(ref) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <nav className={`${styles.nav} breakout`}>
      <Logo />
      <ul>
        <li>
          <button
            className={`${styles.navBtn} ${styles.active}`}
            onClick={() => handleClickLink(homeRef)}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={styles.navBtn}
            onClick={() => handleClickLink(projectsRef)}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className={styles.navBtn}
            onClick={() => handleClickLink(aboutRef)}
          >
            About me
          </button>
        </li>
        <li>
          <button
            className={styles.navBtn}
            onClick={() => handleClickLink(contactRef)}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
