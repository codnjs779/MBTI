import React, { useEffect, useState } from "react";
import ResultView from "./ResultView";
import styles from "./Result.module.css";

const Result = ({ dataResultApi, userData }) => {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dataResultApi(userData, setResult, setLoading);
    }, [dataResultApi, userData]);

    return (
        <>
            {loading === true ? <div className={styles.load}></div> : null}
            {result && <ResultView result={result} />}
        </>
    );
};

export default Result;
