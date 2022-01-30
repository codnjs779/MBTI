import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/pageScroll/ScrollToTop";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
import DataAPI from "./components/apis/api";

const dataApi = new DataAPI();
ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop />
        <App dataApi={dataApi} />
    </BrowserRouter>,
    document.getElementById("root")
);
