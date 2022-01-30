import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;

class DataAPI {
    countUser(setUserCount) {
        axios
            .get(`${baseURL}/count`) //
            .then((res) => {
                const countData = res.data.result.count;
                setUserCount(countData);
            })
            .catch((err) => console.log(`err`, err));
    }

    testResult() {
        console.log("test");
    }
}

export default DataAPI;
