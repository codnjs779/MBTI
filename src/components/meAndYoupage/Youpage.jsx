import React, { useState, useRef } from "react";
import BlackButton from "../button/blackBtn/BlackButton";
import MbtiLinkBtn from "../button/mbtiLinkBtn/MbtiLinkBtn";
import { useNavigate } from "react-router-dom";
import styles from "./Mepage.module.css";
import BloodModal from "../modal/blood/BloodModal";
import MbtiModal from "../modal/mbti/MbtiModal";

const Youpage = ({ dataFile }) => {
    const [bloodModal, setbloodModal] = useState({ state: false, bloodPick: "" });
    const [mbtiModal, setMbtiModal] = useState({ state: false, mbtiPick: "" });
    const [genderPick, setGender] = useState();

    const formRef = useRef();
    const nameRef = useRef();
    const birthRef = useRef();

    const resultNavigate = useNavigate();

    const nextPage = (e) => {
        e.preventDefault();

        const you = {
            name: nameRef.current.value || "",
            gender: genderPick || "",
            birth: birthRef.current.value || "",
            blood: bloodModal.bloodPick || "",
            mbti: mbtiModal.mbtiPick || "",
        };

        const { name, gender, birth, blood, mbti } = you;

        // if (name === "" || gender === "" || birth === "" || blood === "" || mbti === "") {
        //     alert("빈칸을 모두 입력해주세요!");
        // } else {
        const id = "you";
        formRef.current.value = "";
        dataFile(you, id);
        resultNavigate("/result");
        // }
    };

    const onMbtiLink = () => {
        window.open("https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC", "_blank");
    };
    const onBloodModal = () => {
        setbloodModal((bloodModal) => {
            const newBlood = { ...bloodModal };
            newBlood.state = !bloodModal.state;
            return newBlood;
        });
    };
    const onMbtiModal = () => {
        setMbtiModal((mbtiModal) => {
            const newMbti = { ...mbtiModal };
            newMbti.state = !mbtiModal.state;
            return newMbti;
        });
    };

    const onGender = (e) => {
        setGender(e.target.value);
    };
    const onBloodPickController = (userpick) => {
        setbloodModal((bloodModal) => {
            let newBlood = { ...bloodModal };
            newBlood = { state: !bloodModal.state, bloodPick: userpick };
            return newBlood;
        });
    };

    const onMbtiPickController = (userpick) => {
        setMbtiModal((mbtiModal) => {
            let newMbti = { ...mbtiModal };
            newMbti = { state: !mbtiModal.state, mbtiPick: userpick };
            return newMbti;
        });
    };

    return (
        <div className={styles.mepage}>
            <div className={styles.title}>상대의 정보를 입력해주세요</div>

            <form ref={formRef} className={styles.formBox}>
                <div>
                    <label>이름</label>
                    <input ref={nameRef} type="text" placeholder="이름을 입력해주세요" />
                </div>

                <div className={styles.gender}>
                    <label>성별</label>
                    <span>
                        {" "}
                        <label>남</label>
                    </span>
                    <input name="gener" type="radio" value="male" onClick={onGender} />

                    <span>
                        {" "}
                        <label>여</label>
                    </span>
                    <input name="gener" type="radio" value="female" onClick={onGender} />
                </div>

                <div>
                    <label>생년월일</label>
                    <input ref={birthRef} type="text" maxLength="8" placeholder="8자리를 입력해주세요" />
                </div>

                <div>
                    <label>혈액형</label>
                    <input
                        value={bloodModal.bloodPick}
                        className={styles.readOnlyInput}
                        onClick={onBloodModal}
                        onChange={onBloodPickController}
                        type="text"
                        placeholder="혈액형을 선택해주세요"
                        readOnly
                    />
                </div>
                {bloodModal.state === true ? <BloodModal onBloodPickController={onBloodPickController} /> : null}

                <div>
                    <label>MBTI</label>
                    <input value={mbtiModal.mbtiPick} className={styles.readOnlyInput} onClick={onMbtiModal} onChange={onMbtiPickController} type="text" placeholder="MBTI를 선택해주세요" readOnly />
                </div>
                {mbtiModal.state === true ? <MbtiModal onMbtiPickController={onMbtiPickController} /> : null}

                <span className={styles.buttonLinkBox}>
                    <MbtiLinkBtn onClick={onMbtiLink} />
                </span>
            </form>
            <div className={styles.buttonNextBox}>
                <BlackButton onClick={nextPage} buttonTxt="다음으로" />
            </div>
        </div>
    );
};

export default Youpage;
