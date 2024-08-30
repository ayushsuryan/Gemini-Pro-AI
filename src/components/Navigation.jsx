import { assets } from "../assets/assets";
import styles from "../styles/navigation.module.css";
export default function Navigation() {
  return (
    <div className={styles.nav}>
      <p>Gemini Pro AI+ </p>
      <img src={assets.user_icon} alt="avatar" />
    </div>
  );
}
