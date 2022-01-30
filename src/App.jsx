import React, { useState, useEffect } from "react";
import Main from "./components/main/Main";
import styles from "./App.module.css";
import Mepage from "./components/meAndYoupage/Mepage";
import Youpage from "./components/meAndYoupage/Youpage";
import Result from "./components/result/Result";
import { Routes, Route } from "react-router-dom";

const App = ({ dataApi }) => {
    const [userCount, setUserCount] = useState();

    const [userData, setUserData] = useState({
        me: {
            name: "",
            gender: "",
            blood: "",
            mbti: "",
            born: "",
        },
        you: {
            name: "",
            gender: "",
            blood: "",
            mbti: "",
            born: "",
        },
    });
    const dataFile = (user, id) => {
        setUserData((userData) => {
            const newObj = { ...userData };
            if (id === "me") {
                newObj.me = user;
                return newObj;
            } else if (id === "you") {
                newObj.you = user;
                return newObj;
            }
        });
    };

    useEffect(() => {
        dataApi.countUser(setUserCount);
    }, []);

    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<Main userCount={userCount} />} />
                <Route path="/me" element={<Mepage meData={userData.me} dataFile={dataFile} />} />
                <Route path="/you" element={<Youpage youData={userData.you} dataFile={dataFile} />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </div>
    );
};

export default App;
