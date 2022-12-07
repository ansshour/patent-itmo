import axios from "axios";

axios.defaults.baseURL = "http://194.67.93.27";
axios.defaults.withCredentials = true

export const fetchData = axios.create({
    baseURL: "http://194.67.93.27",
    headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
    },
    withCredentials: true,
})

// function getCookie(name) {
//     let matches = document.cookie.match(new RegExp(
//         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
// }

// fetchData.interceptors.request.use((config) => {
//     config.headers.Cookie = `fastapiusersauth=${getCookie("fastapiusersauth")}`
//     return config;
// })