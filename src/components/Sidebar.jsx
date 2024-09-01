import styles from "../styles/sidebar.module.css";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { newChat } from "../store/promptSlice";
export default function Sidebar() {
  const [extended, setExtended] = useState(false);
  const recentPrompts = useSelector((state) => state.recentPrompts);
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <div className={styles.menu}>
          <img
            onClick={() => {
              setExtended((prev) => !prev);
            }}
            src={assets.menu_icon}
            alt="hamburger"
          />
        </div>
        <div
          onClick={() => {
            dispatch(newChat());
          }}
          className={styles.newChat}
        >
          <img src={assets.plus_icon} alt="new-chat" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className={styles.recent}>
            <p className={styles.recentTitle}>Recent</p>
            {recentPrompts.length !== 0
              ? recentPrompts.map((recent, index) => {
                  const truncatedRecent =
                    recent.length > 20
                      ? recent.substring(0, 20) + "..."
                      : recent;

                  return (
                    <p className={styles.recentEntry} key={index}>
                      {truncatedRecent}
                    </p>
                  );
                })
              : null}
          </div>
        ) : null}
      </div>

      <div className={styles.bottom}>
        <div
          onClick={() => {
            alert("Unavailable");
          }}
          className={`${styles.bottomItem} ${styles.recentEntry}`}
        >
          <img src={assets.setting_icon} alt="question-icon" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}
