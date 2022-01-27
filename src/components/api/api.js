import axios from "axios";
import { memo } from "react";
export const CountUser = memo(() => {
    axios
        .get(process.env.REACT_APP_COUNT)
        .then((res) => {
            const count = res.data.result.count;
            console.log(`count`, count);
            return count;
        })
        .catch(function (error) {
            // 오류발생시 실행
        })
        .then(function () {
            // 항상 실행
        });
});
