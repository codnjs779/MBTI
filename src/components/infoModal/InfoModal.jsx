import React from "react";
import styles from "./InfoModal.module.css";
const InfoModal = () => {
    return (
        <div className={styles.state}>
            <ul className={styles.modal}>
                <li>문의: codnjs779@naver.com</li>
                <div className={styles.source}>출처:</div>
                <li>- MBTI 유형별 궁합</li>
                <li>- 네이버 지식백과</li>
                <li>- 별자리 궁합표</li>
            </ul>
        </div>
    );
};

export default InfoModal;
