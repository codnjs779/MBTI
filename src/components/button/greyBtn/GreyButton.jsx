import React from "react";
import styles from "./GreyButton.module.css";
const GreyButton = ({ buttonTxt }) => {
    return <button className={styles.greybutton}>{buttonTxt}</button>;
};

export default GreyButton;
