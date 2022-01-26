import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlackButton from "../blackBtn/BlackButton";
import GreyButton from "../greyBtn/GreyButton";
import heart from "../../images/heart.png";
import InfoModal from "../infoModal/InfoModal";
import styles from "./Main.module.css";
const Main = () => {
    const [modalState, setModalState] = useState(false);
    const startNavigate = useNavigate();
    const onClick = () => {
        modalState === false ? setModalState(true) : setModalState(false);
    };
    const onStartBtn = () => {
        startNavigate("/me");
    };
    return (
        <>
            <div onClick={onClick} className={styles.infoButton}>
                <i className="fas fa-info-circle"></i>
            </div>
            {modalState === true ? <InfoModal /> : null}
            <section className={styles.main}>
                <div className={styles.title}>우리의 모든 것</div>
                <p className={styles.content}>mbti 별자리 띠 혈액형 모든 궁합을 한번에 확인해보세요!</p>
                <img className={styles.heartImg} src={heart} alt="" />
                <div className={styles.users}>
                    현재까지 <strong>00명</strong>이 참여했어요
                </div>
            </section>
            <section className={styles.buttonBox}>
                <BlackButton onClick={onStartBtn} buttonTxt="시작하기" />
                <GreyButton buttonTxt="테스트 공유" />
            </section>
        </>
    );
};

export default Main;
