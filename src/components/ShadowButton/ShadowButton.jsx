import styles from "./ShadowButton.module.css";

function ShadowButton({ handleClick }) {
  return (
    <button onClick={handleClick} className={styles.button}>
      See My Work
    </button>
  );
}

export default ShadowButton;
