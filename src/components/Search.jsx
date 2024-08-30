import { assets } from "../assets/assets";
import styles from "../styles/search.module.css";
export default function Search() {
  return (
    <div className={styles.bottom}>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Enter a prompt here..." />
        <div>
          <img src={assets.gallery_icon} alt="galleryIcon" />
          <img src={assets.mic_icon} alt="micIcon" />
          <img src={assets.send_icon} alt="sendIcon" />
        </div>
      </div>
      <p className={styles.bottomInfo}>
        Gemini may include inaccurate info, including about people. Your privacy
        and Gemini Apps.
      </p>
    </div>
  );
}
