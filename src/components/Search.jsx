import { assets } from "../assets/assets";
import styles from "../styles/search.module.css";
import { useDispatch } from "react-redux";
import { sendPrompt } from "../store/promptSlice";
import { useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={styles.bottom}>
      <div className={styles.searchBox}>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Enter a prompt here..."
        />
        <div>
          <img src={assets.gallery_icon} alt="galleryIcon" />
          <img src={assets.mic_icon} alt="micIcon" />
          <img
            onClick={() => {
              dispatch(sendPrompt(input));
            }}
            src={assets.send_icon}
            alt="sendIcon"
          />
        </div>
      </div>
      <p className={styles.bottomInfo}>
        Gemini may include inaccurate info, including about people. Your privacy
        and Gemini Apps.
      </p>
    </div>
  );
}
