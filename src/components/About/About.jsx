import styles from "./About.module.css";

function About({ refProps }) {
  return <section ref={refProps} className={styles.about}></section>;
}

export default About;
