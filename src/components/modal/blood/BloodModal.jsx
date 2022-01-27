import React from "react";
import styles from "./BloodModal.module.css";
const BloodModal = ({ onBloodPickController }) => {
    const bloodBox = ["A", "B", "C", "D"];
    const userBlood = (blood) => {
        const userpick = blood;
        onBloodPickController(userpick);
    };
    const test = bloodBox.map((blood) => {
        return (
            <li onClick={() => userBlood(blood)} className={styles.bloodItem}>
                {blood}
            </li>
        );
    });
    return <ul className={styles.bloodSet}>{test}</ul>;
};

export default BloodModal;
