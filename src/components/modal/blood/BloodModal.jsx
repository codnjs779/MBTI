import React, { memo } from "react";
import styles from "./BloodModal.module.css";
const BloodModal = memo(({ onBloodPickController }) => {
    const bloodBox = ["A", "B", "O", "AB"];

    const userBlood = (blood) => {
        const userpick = blood;
        onBloodPickController(userpick);
    };

    const test = bloodBox.map((blood) => {
        return (
            <li key={blood} onClick={() => userBlood(blood)} className={styles.bloodItem}>
                {blood}
            </li>
        );
    });
    return <ul className={styles.bloodSet}>{test}</ul>;
});

export default BloodModal;
