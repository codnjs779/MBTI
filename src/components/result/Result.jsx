import React from "react";
import styles from "./Result.module.css";
import img from "../../images/sample.PNG";
import BlackButton from "../blackBtn/BlackButton";
import YellowButton from "../yellowBtn/YellowButton";
import { useNavigate } from "react-router-dom";
const Result = () => {
    const retryNavigate = useNavigate();

    const retryTest = () => {
        retryNavigate("/");
    };
    return (
        <div className={styles.resultBox}>
            <section className={styles.scoreSection}>
                <div className={styles.title}>나와 상대의 궁합은</div>
                <div className={styles.score}>00점</div>

                <div className={styles.heartIcon}>
                    <i className="fas fa-heart"></i>
                </div>
                <div className={styles.container}>
                    <div className={styles.progress}>
                        <div className={styles.progressBar}>
                            <div className={styles.circle}></div>
                        </div>
                    </div>
                </div>

                <div className={styles.scoreBox}>
                    <div>
                        <img src={img} alt="" />
                        <div>별자리</div>
                        <div>00점</div>
                    </div>

                    <div>
                        <img src={img} alt="" />
                        <div>12지신</div>
                        <div>00점</div>
                    </div>

                    <div>
                        <img src={img} alt="" />
                        <div>혈액형</div>
                        <div>00점</div>
                    </div>

                    <div>
                        <img src={img} alt="" />
                        <div>MBTI</div>
                        <div>00점</div>
                    </div>
                </div>
            </section>

            <section className={styles.result}>
                <div className={styles.title}>결과 해석</div>
                <ul className={styles.resultContents}>
                    <li>결과</li>
                    <li>결과</li>
                    <li>결과</li>
                    <li>결과</li>
                </ul>
            </section>
            <section className={styles.buttonBox}>
                <div className={styles.retry}>
                    <BlackButton onClick={retryTest} buttonTxt="다시하기" />
                </div>
                <div className={styles.share}>
                    <YellowButton buttonTxt="결과 링크 공유하기" />
                </div>
            </section>
        </div>
    );
};

export default Result;
