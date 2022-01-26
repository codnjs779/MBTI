import React from "react";
import styles from "./YellowButton.module.css";
const YellowButton = ({ buttonTxt, onClick }) => {
    return (
        <button onClick={onClick} className={styles.yellowbutton}>
            {buttonTxt}
        </button>
    );
};

export default YellowButton;
