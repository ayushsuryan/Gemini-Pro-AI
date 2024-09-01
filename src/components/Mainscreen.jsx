import { assets } from "../assets/assets";
import styles from "../styles/mainscreen.module.css";
import Navigation from "./Navigation";
import Search from "./Search";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendPrompt } from "../store/promptSlice";

export default function Mainscreen() {
  const dispatch = useDispatch();
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
            <div
              onClick={() => {
                dispatch(
                  sendPrompt(
                    "Suggest beautiful places to see on an upcoming roadtrip."
                  )
                );
              }}
              className={styles.card}
            >
              <p>Suggest beautiful places to see on an upcoming roadtrip.</p>
              <img src={assets.compass_icon} alt="compass-icon" />
            </div>
            <div
              onClick={() => {
                dispatch(
                  sendPrompt("Briefly summarize this concept: urban planning..")
                );
              }}
              className={styles.card}
            >
              <p>Briefly summarize this concept: urban planning.</p>
              <img src={assets.bulb_icon} alt="compass-icon" />
            </div>
            <div
              onClick={() => {
                dispatch(
                  sendPrompt(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                );
              }}
              className={styles.card}
            >
              <p>Brainstorm team bonding activities for our work retreat.</p>
              <img src={assets.message_icon} alt="compass-icon" />
            </div>
            <div
              onClick={() => {
                dispatch(
                  sendPrompt("Improve the readability of the following code")
                );
              }}
              className={styles.card}
            >
              <p>Improve the readability of the following code.</p>
              <img src={assets.code_icon} alt="compass-icon" />
            </div>
          </div>
        ) : null}
        {response ? (
          <p className={styles.generatedResponse}>{response}</p>
        ) : null}
        <Search></Search>
      </div>
    </div>
  );
}
