import Main from "./components/main/Main";
import styles from "./App.module.css";
import Mepage from "./components/meAndYoupage/Mepage";
import Youpage from "./components/meAndYoupage/Youpage";
import Result from "./components/result/Result";
import { Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <div className={styles.app}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/me" element={<Mepage />} />
                <Route path="/you" element={<Youpage />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </div>
    );
};

export default App;
