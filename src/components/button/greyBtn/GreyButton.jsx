import React from "react";
import styles from "./GreyButton.module.css";
const GreyButton = ({ buttonTxt, onClick }) => {
    return (
        <button onClick={onClick} className={styles.greybutton}>
            {buttonTxt}
        </button>
    );
};
export default GreyButton;
