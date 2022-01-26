import React from "react";
import styles from "./MbtiModal.module.css";

const MbtiModal = () => {
    const mbti = ["ENFJ", "ENFP", "ENTJ", "ENTP", "ESFJ", "ESFP", "ESTJ", " ESTP", "INFJ", "INFP", "INTJ", "INTP", "ISFJ", "ISFP", "ISTJ", "ISTP"];
    const test = (mbtiItem) => {
        console.log(mbtiItem);
    };
    const mbtiList = mbti.map((mbtiItem) => {
        return (
            <li className={styles.mbtiItem} onClick={() => test(mbtiItem)}>
                {mbtiItem}
            </li>
        );
    });
    return <ul className={styles.mbtiSet}>{mbtiList}</ul>;
};

export default MbtiModal;
