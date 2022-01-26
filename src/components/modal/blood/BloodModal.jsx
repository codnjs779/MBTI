import React from "react";
import styles from "./BloodModal.module.css";
const BloodModal = () => {
    const bloodBox = ["A형", "B형", "C형", "D형"];
    // const userBlood = (blood) => {
    //     userBloodWriter(blood);
    // };
    const test = bloodBox.map((blood) => {
        return <li className={styles.bloodItem}>{blood}</li>;
    });
    return <ul className={styles.bloodSet}>{test}</ul>;
};

export default BloodModal;
