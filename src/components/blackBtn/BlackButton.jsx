import React from "react";
import styles from "./BlackButton.module.css";
const BlackButton = ({ buttonTxt, onClick }) => {
    return (
        <button type="submit" onClick={onClick} className={styles.blackbutton}>
            {buttonTxt}
        </button>
    );
};

export default BlackButton;
