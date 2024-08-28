import styles from "./Projects.module.css";

function Projects({ refProps }) {
  return <section ref={refProps} className={styles.projects}></section>;
}

export default Projects;
