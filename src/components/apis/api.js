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

    async testResult(userData, setResult, setLoading) {
        try {
            setLoading(true);
            const response = await axios.post(`${baseURL}/judgment`, {
                me: userData.me,
                you: userData.you,
            });
            setTimeout(() => {
                setLoading(false);
                setResult(response.data.result);
            }, 2000);
        } catch (err) {
            console.log("err", err);
        }
    }
}

export default DataAPI;
