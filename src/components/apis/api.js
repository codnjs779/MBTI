import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;
console.log(`baseURL`, baseURL);

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

    async testResult(userData, setResult) {
        try {
            const response = await axios.post(`${baseURL}/judgment`, {
                me: userData.me,
                you: userData.you,
            });
            await setResult(response.data.result);
        } catch (err) {
            console.log("err", err);
        }
    }
}

export default DataAPI;
