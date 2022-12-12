import axios from "axios";

// axios.defaults.baseURL = "http://194.67.93.27";
// axios.defaults.withCredentials = true

export const BaseURL = "https://searchplatform.rospatent.gov.ru";

export const fetchData = axios.create({
    baseURL: "http://194.67.93.27",
    headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
})