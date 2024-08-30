import styles from "../styles/mainscreen.module.css";
import Navigation from "./Navigation";
export default function Mainscreen() {
  return (
    <div className={styles.main}>
      <Navigation></Navigation>
      <div>Body</div>
    </div>
  );
}
