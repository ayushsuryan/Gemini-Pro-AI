import styles from "../styles/sidebar.module.css";
import { assets } from "../assets/assets";
import { useState } from "react";

export default function Sidebar() {
  const [extended, setExtended] = useState(false);
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.menu}>
          <img
            onClick={(e) => {
              setExtended((prev) => !prev);
            }}
            src={assets.menu_icon}
            alt="hamburger"
          />
        </div>
        <div className={styles.newChat}>
          <img src={assets.plus_icon} alt="new-chat" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className={styles.recent}>
            <p className={styles.recentTitle}>Recent</p>
            <div className={styles.recentEntry}>
              <img src={assets.message_icon} alt="message-icon" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className={styles.bottom}>
        <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
          <img src={assets.question_icon} alt="question-icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
          <img src={assets.history_icon} alt="question-icon" />
          {extended ? <p>History</p> : null}
        </div>
        <div className={`${styles.bottomItem} ${styles.recentEntry}`}>
          <img src={assets.setting_icon} alt="question-icon" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}
