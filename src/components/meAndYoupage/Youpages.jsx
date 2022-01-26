import React from "react";
import { useNavigate } from "react-router-dom";
import BlackButton from "../blackBtn/BlackButton";
import MbtiLinkBtn from "../mbtiLinkBtn/MbtiLinkBtn";
import styles from "./Mepage.module.css";
const Youpage = () => {
    const resultNavigate = useNavigate();
    const nextPage = () => {
        resultNavigate("/result");
    };

    const onMbtiLink = () => {
        window.open("https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC", "_blank");
    };

    return (
        <div className={styles.mepage}>
            <div className={styles.title}>상대의 정보를 입력해주세요</div>

            <form className={styles.formBox}>
                <div>
                    <label>이름</label>
                    <input type="text" placeholder="이름을 입력해주세요" />
                </div>

                <div className={styles.gender}>
                    <label>성별</label>
                    <span>
                        {" "}
                        <label>남</label>
                    </span>

                    <input type="radio" />
                    <span>
                        {" "}
                        <label>여</label>
                    </span>
                    <input type="radio" />
                </div>

                <div>
                    <label>생년월일</label>
                    <input type="text" placeholder="8자리를 입력해주세요" />
                </div>

                <div>
                    <label>혈액형</label>
                    <input type="text" placeholder="혈액형을 선택해주세요" />
                </div>

                <div>
                    <label>MBTI</label>
                    <input type="text" placeholder="MBTI를 선택해주세요" />
                </div>
                <span className={styles.buttonLinkBox}>
                    <MbtiLinkBtn onClick={onMbtiLink} />
                </span>
            </form>
            <div className={styles.buttonNextBox}>
                <BlackButton onClick={nextPage} buttonTxt="결과보기" />
            </div>
        </div>
    );
};

export default Youpage;
