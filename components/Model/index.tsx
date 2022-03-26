import { useEffect, SetStateAction, useState } from "react";
import styles from "./Model.module.css";
import { Icon } from "@iconify/react";

const Model = () => {
  const [inputTest, setInputTest] = useState<string>("");
  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => setInputTest(e.target.value);
  const fireModeltest = () => {
    console.log(`The user has inputted: ${inputTest}`);
  };
  return (
    <div>
      <h3>Test it here!</h3>
      <div className={styles.container}>
        <input
          className={styles.input}
          onChange={handleInputChange}
          placeholder="Tell us what's on your mind"
        />
        <button className={styles.button} onClick={fireModeltest}>
          <Icon style={{width: "25px", height: "25px"}} icon="icon-park-outline:write" />
        </button>
      </div>
    </div>
  );
};

export default Model;
