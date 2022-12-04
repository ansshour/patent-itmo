import styles from "./Search.module.css"
import backArrow from "./res/backArrow.svg"
import { SearchPanel } from "../../components/SearchPanel/SearchPanel"

export const Search = () => {
    return (
        <div className={styles.container}>
            <a className={styles.backToServiceCatalog}>
                <img src={backArrow} alt="back" />
                <p>Вернуться к Каталогу сервисов</p>
            </a>
            <h1 className={styles.title}>Сервис патентного ландшафта</h1>
            <h2 className={styles.subTitle}>Поиск патентной документации</h2>
            <SearchPanel />
        </div>
    )
}