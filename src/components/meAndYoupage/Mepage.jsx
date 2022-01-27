import React, { useState, useRef } from "react";
import BlackButton from "../blackBtn/BlackButton";
import MbtiLinkBtn from "../mbtiLinkBtn/MbtiLinkBtn";
import { useNavigate } from "react-router-dom";
import styles from "./Mepage.module.css";
import BloodModal from "../modal/blood/BloodModal";
import MbtiModal from "../modal/mbti/MbtiModal";

const Mepage = ({ dataFile }) => {
    const [bloodModal, setbloodModal] = useState(false);
    const [mbtiModal, setMbtiModal] = useState(false);
    const [gender, setGender] = useState();
    const NextNavigate = useNavigate();

    const formRef = useRef();
    const nameRef = useRef();
    const birthRef = useRef();
    const bloodRef = useRef();
    const mbtiRef = useRef();

    const nextPage = () => {
        const me = {
            name: nameRef.current.value || "",
            gender: gender || "",
            birth: birthRef.current.value || "",
            blood: bloodRef.current.value || "",
            mbti: mbtiRef.current.value || "",
        };

        const id = "me";
        formRef.current.value = "";
        dataFile(me, id);
        NextNavigate("/you");
    };

    const onMbtiLink = () => {
        window.open("https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC", "_blank");
    };

    const onBloodModal = () => {
        setbloodModal(!bloodModal);
    };

    const onMbtiModal = () => {
        setMbtiModal(!mbtiModal);
    };
    const onGender = (e) => {
        console.log(e.target.value, "gender");
        setGender(e.target.value);
    };
    return (
        <div className={styles.mepage}>
            <div className={styles.title}>나의 정보를 입력해주세요</div>

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
                    <input ref={birthRef} type="text" placeholder="8자리를 입력해주세요" />
                </div>

                <div>
                    <label>혈액형</label>
                    <input ref={bloodRef} onClick={onBloodModal} type="text" placeholder="혈액형을 선택해주세요" />
                </div>
                {bloodModal === true ? <BloodModal /> : null}

                <div>
                    <label>MBTI</label>
                    <input ref={mbtiRef} onClick={onMbtiModal} type="text" placeholder="MBTI를 선택해주세요" />
                </div>
                {mbtiModal === true ? <MbtiModal /> : null}

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

export default Mepage;
