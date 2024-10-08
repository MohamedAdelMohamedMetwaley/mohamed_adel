import ShadowButton from "../ShadowButton/ShadowButton";
import styles from "./Header.module.css";

// const svgs = document.querySelector(".floatingSVG__container");

function Header({ refProps, projectsRef, handleNavigate }) {
  return (
    <header ref={refProps} className={`${styles.header} breakout`}>
      <article className={styles.introductionContainer}>
        <h1 className={styles.heroHeading}>I&apos;m Mohamed</h1>
        <p className={styles.heroSubtext}>
          a frontend web developer & designer, specializing in turning ideas
          into responsive, functional, and engaging websites.
        </p>
        <ShadowButton handleClick={() => handleNavigate(projectsRef)} />
      </article>
      <picture className={styles.imageContainer}>
        <img src="./images/MePhoto.jpg" alt="my-photo" />
      </picture>
    </header>
  );
}

export default Header;
