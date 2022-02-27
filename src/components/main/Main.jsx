import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import BlackButton from "../button/blackBtn/BlackButton";
import GreyButton from "../button/greyBtn/GreyButton";
import heart from "../../images/heart.png";
import InfoModal from "../infoModal/InfoModal";
import styles from "./Main.module.css";

const shareURL = "https://chemistry-test.co.kr";

const Main = ({ dataCountApi }) => {
    const [userCount, setUserCount] = useState();
    const [modalState, setModalState] = useState(false);

    const startNavigate = useNavigate();
    const onClick = () => {
        modalState === false ? setModalState(true) : setModalState(false);
    };
    const onStartBtn = () => {
        startNavigate("/me");
    };
    const offmodal = () => {
        setModalState(false);
    };
    const onShareBtn = () => {
        alert("링크복사가 완료되었습니다!");
    };
    useEffect(() => {
        dataCountApi(setUserCount);
    }, [dataCountApi]);

    return (
        <>
            {" "}
            {modalState === true ? <div onClick={offmodal} className={styles.modalBack}></div> : null}
            {modalState === true ? <InfoModal /> : null}
            <div onClick={onClick} className={styles.infoButton}>
                <i className="fas fa-info-circle"></i>
            </div>
            <section className={styles.main}>
                <div className={styles.title}>우리의 모든 것</div>
                <p className={styles.content}>mbti 별자리 띠 혈액형 모든 궁합을 한번에 확인해보세요!</p>
                <img className={styles.heartImg} src={heart} alt="" />

                <div className={styles.users}>
                    현재까지 <strong>{userCount}명</strong>이 참여했어요
                </div>
            </section>
            <section className={styles.buttonBox}>
                <BlackButton onClick={onStartBtn} buttonTxt="시작하기" />

                <CopyToClipboard text={shareURL}>
                    <GreyButton buttonTxt="테스트 공유" onClick={onShareBtn} />
                </CopyToClipboard>
            </section>
        </>
    );
};

export default Main;
