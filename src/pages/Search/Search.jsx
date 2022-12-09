import styles from "./Search.module.css"
import backArrow from "./res/backArrow.svg"
import { SearchPanel } from "../../components/SearchPanel/SearchPanel"
import { Accordion } from "../../components/Accordion/Accordion"
import { useState, useEffect } from "react"
import { SearchResults } from "../../components/SearchResults/SearchResults"
import { Loader } from "../../components/Loader/Loader"

export const Search = () => {

    const [search, setSearch] = useState({
        searchQuery: "", // поисковой запрос
        documentNumber: "", // номер документа
        author: "", // автор
        patentHolder: "", // патентообладатель
        applicant: "", // заявитель
    })

    const [pageNumber, setPageNumber] = useState(1)


    const [dateFrom, setDateFrom] = useState()
    const [dateTo, setDateTo] = useState()

    const variants = [
        { id: 0, name: "Простой поиск", isActive: true },
        { id: 1, name: "Расширенный поиск", isActive: false },
        { id: 2, name: "Поиск A.I.", isActive: false },
    ]

    const [searchResult, setSearchResult] = useState(null)
    const [status, setStatus] = useState(null)

    return (
        <div className={styles.container}>
            {status === "loading" && (
                <Loader />
            )}
            <a className={styles.backToServiceCatalog}>
                <img src={backArrow} alt="back" />
                <p>Вернуться к Каталогу сервисов</p>
            </a>
            <h1 className={styles.title}>Сервис патентного ландшафта</h1>
            <h2 className={styles.subTitle}>Поиск патентной документации</h2>
            <SearchPanel setStatus={setStatus} pageNumber={pageNumber} search={search} searchResult={searchResult} setSearch={setSearch} dateFrom={dateFrom} setDateFrom={setDateFrom} dateTo={dateTo} setDateTo={setDateTo} variants={variants} setSearchResult={setSearchResult} />
            {status === "error" && (
                <p>Ошибка загрузки! Попробуйте снова!</p>
            )}
            {!searchResult ? (
                <div className={styles.favorites}>
                    <p className={styles.name}>Избранное</p>
                    <div className={styles.accordions}>
                        <Accordion name={"Сохраненные поисковые запросы"}></Accordion>
                        <Accordion name={"Избранные документы"}></Accordion>
                    </div>
                </div>
            ) : (
                <SearchResults searchResult={searchResult} setPageNumber={setPageNumber} />
            )}
        </div>
    )
}