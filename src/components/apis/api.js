import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;

class DataAPI {
    countUser(setUserCount) {
        // axios
        //     .get(`${baseURL}/count`) //
        //     .then((res) => {
        //         const countData = res.data.result.count;
        //         setUserCount(countData);
        //     })
        //     .catch((err) => console.log(`err`, err));
    }

    // async testResult(setLoading, userData, setResult) {
    //     try {
    //         const response = await axios.post(`${baseURL}/judgment`, {
    //             me: userData.me,
    //             you: userData.you,
    //         });
    //         const userRes = await response.result;
    //         await setResult(userRes);
    //     } catch (err) {
    //         console.log("err", err);
    //     }
    // }
    // axios
    //     .post(`${baseURL}/judgment`, {
    //         me: userData.me,
    //         you: userData.you,
    //     })
    //     .then(async (res) => {
    //         setLoading(true);
    //         const judData = await res.data.result;
    //         setLoading(false);
    //         setResult(judData);
    //     })
    //     .catch((err) => console.log(`err`, err));

    async testResult(setLoading, userData, setResult) {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title: "foo",
                body: "bar",
                userId: 1,
            });
            await setResult(response.data.body);
        } catch (err) {
            console.log("err", err);
        }
    }
}

export default DataAPI;
