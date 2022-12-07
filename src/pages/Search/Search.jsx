import styles from "./Search.module.css"
import backArrow from "./res/backArrow.svg"
import { SearchPanel } from "../../components/SearchPanel/SearchPanel"
import { Accordion } from "../../components/Accordion/Accordion"
import { fetchData } from "../../api/fetchData"
import axios from "axios"

export const Search = () => {

    const authAxios = axios.create({
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*"
        },
        withCredentials: true,
    });

    const testAuth = async () => { // авторизация для получения токена.
        const username = "a.zhukov001@yandex.ru"
        const password = "andrey123"
        const params = new FormData();
        params.append('username', username);
        params.append('password', password);
        params.append("grant_type", "")
        params.append("scope", "")
        params.append("client_id", "")
        params.append("client_secret", "")
        try {
            await authAxios.post("http://194.67.93.27/api/auth/jwt/login", params)
            window.alert("success")
        } catch (err) { }

    }

    return (
        <div className={styles.container}>
            <button onClick={testAuth}>auth</button>
            <a className={styles.backToServiceCatalog}>
                <img src={backArrow} alt="back" />
                <p>Вернуться к Каталогу сервисов</p>
            </a>
            <h1 className={styles.title}>Сервис патентного ландшафта</h1>
            <h2 className={styles.subTitle}>Поиск патентной документации</h2>
            <SearchPanel />
            <div className={styles.favorites}>
                <p className={styles.name}>Избранное</p>
                <div className={styles.accordions}>
                    <Accordion name={"Сохраненные поисковые запросы"}></Accordion>
                    <Accordion name={"Избранные документы"}></Accordion>
                </div>
            </div>
        </div>
    )
}