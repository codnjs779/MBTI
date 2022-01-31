import React, { useEffect, useState } from "react";
import ResultView from "./ResultView";

const Result = ({ dataResultApi, userData }) => {
    const [result, setResult] = useState();

    useEffect(() => {
        dataResultApi(userData, setResult);
    }, []);

    return <> {result && <ResultView result={result} />}</>;
};

export default Result;
