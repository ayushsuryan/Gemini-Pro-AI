import { assets } from "../assets/assets";
import styles from "../styles/mainscreen.module.css";
import Navigation from "./Navigation";
import Search from "./Search";
import { useSelector } from "react-redux";

export default function Mainscreen() {
  const response = useSelector((state) => state.response);
  return (
    <div className={styles.main}>
      <Navigation></Navigation>
      <div className={styles.bodyCotainer}>
        {!response ? (
          <div className={styles.greet}>
            <p>
              <span>Hello, Dev!</span>
            </p>
            <p>How can I help you today?</p>
          </div>
        ) : null}
        {!response ? (
          <div className={styles.cards}>
            <div className={styles.card}>
              <p>Suggest beautiful places to see on an upcoming roadtrip.</p>
              <img src={assets.compass_icon} alt="compass-icon" />
            </div>
            <div className={styles.card}>
              <p>Briefly summarize this concept: urban planning.</p>
              <img src={assets.bulb_icon} alt="compass-icon" />
            </div>
            <div className={styles.card}>
              <p>Brainstorm team bonding activities for our work retreat.</p>
              <img src={assets.message_icon} alt="compass-icon" />
            </div>
            <div className={styles.card}>
              <p>Improve the readability of the following code.</p>
              <img src={assets.code_icon} alt="compass-icon" />
            </div>
          </div>
        ) : null}
        {response ? <p>{response}</p> : null}
        <Search></Search>
      </div>
    </div>
  );
}
