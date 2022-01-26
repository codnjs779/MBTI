import React from "react";
import styles from "./MbtiLinkBtn.module.css";
const MbtiLinkBtn = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.mbtiLink}>
            mbti 검사
        </button>
    );
};

export default MbtiLinkBtn;
