import { assets } from "../assets/assets";
import styles from "../styles/search.module.css";
import { useDispatch } from "react-redux";
import { sendPrompt } from "../store/promptSlice";
import { useState } from "react";
import { recentPrompts } from "../store/promptSlice";

export default function Search() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={styles.bottom}>
      <div className={styles.searchBox}>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Enter a prompt here..."
        />
        <div>
          <img
            onClick={() => {
              dispatch(sendPrompt(input));
              dispatch(recentPrompts(input));
              setInput("");
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
