import { Button } from "../../components/Button/Button"
import styles from "./SearchDetail.module.css"
import buttonWithArrow from "./res/buttonWithArrowRight.svg"
import arrow from "./res/arrow.svg"
import arrowDown from "./res/arrowDown.svg"
import searchIcon from "./res/searchIcon.svg"
import classNames from "classnames"
import { Accordion } from "../../components/Accordion/Accordion"
import { fetchData } from "../../api/fetchData"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Loader } from "../../components/Loader/Loader"
import { BaseURL } from "../../api/fetchData.js"

export const SearchDetail = () => {

    const navigate = useNavigate()

    const { id } = useParams()

    const [data, setData] = useState(null)
    const [status, setStatus] = useState("loading")
    const [lang, setLang] = useState("ru")

    const getPatent = async () => {
        try {
            const { data } = await fetchData(`/api/patents/docs/${id}`)
            console.log(data)
            setData(data)
        } catch (err) {

        } finally {
            setStatus("fullfiled")
        }

    }

    useEffect(() => {
        getPatent()
    }, [])

    return (
        <>
            {status === "loading" ? <Loader /> : (
                <div className={styles.container}>
                    <div className={styles.top}>
                        <h1 className={styles.title}>{(lang === "ru" && data?.biblio.ru.title) || (lang === "en" && data?.biblio.en.title)}</h1>
                        <div className={styles.topInner}>
                            <Button blue>Похожие документы</Button>
                            <div className={styles.switchPage}>
                                <img src={buttonWithArrow} className={styles.left} alt="left" />
                                <img src={buttonWithArrow} alt="right" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.twoLineTop}>
                        <button className={styles.backToSearch} onClick={() => { navigate(-1) }}>
                            <img src={arrow} alt="arrow" />
                            <p>Вернуться к результатам поиска</p>
                        </button>
                        <div className={styles.downloads}>
                            <a target="_blank" href={`https://worldwide.espacenet.com/patent/search/family/021520852/publication/${[data?.common.publishing_office, data?.common.document_number, data?.common.kind].join("")}?q=${[data?.common.publishing_office, data?.common.document_number, data?.common.kind].join("")}`}><Button blue>Espacenet</Button></a>
                            <button className={styles.pdf}>
                                <p>PDF</p>
                                <img src={arrowDown} alt="arrowDown" />
                            </button>
                            <a href={`https://searchplatform.rospatent.gov.ru${data?.ex_xml}`} download target="_blank"><Button blue>XML</Button></a>
                        </div>
                        <div className={styles.lang}>
                            <div className={styles.langChange}>
                                <p className={styles.langText}>Язык документа: </p>
                                <button className={styles.langChanger}>
                                    <p>Русский</p>
                                    <img src={arrowDown} alt="arrowDown" />
                                </button>
                            </div>
                            <div className={styles.langChange}>
                                <p className={styles.langText}>Перевод документа на: </p>
                                <button className={styles.langChanger}>
                                    <p>Не выбрано</p>
                                    <img src={arrowDown} alt="arrowDown" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.contentTitle}>Библиография</p>
                        <div className={styles.first}>
                            <div className={styles.point}>
                                <p className={styles.name}>Правовой статус:</p>
                                <p className={styles.result}>отсутствует</p>
                            </div>
                            {data?.common.application.number && (
                                <div className={styles.point}>
                                    <p className={styles.name}>Номер заявки:</p>
                                    <p className={styles.result}>{data?.common.application.number}</p>
                                </div>
                            )}
                            {data?.common.application.filing_date && (
                                <div className={styles.point}>
                                    <p className={styles.name}>Дата подачи заявки:</p>
                                    <p className={styles.result}><p>{data?.common.application.filing_date}</p> <img src={searchIcon} className={styles.search} alt="search" /></p>
                                </div>
                            )}
                            {data?.common.publication_date && (
                                <div className={styles.point}>
                                    <p className={styles.name}>Опубликовано:</p>
                                    <p className={styles.result}><p>{data?.common.publication_date}</p> <img src={searchIcon} className={styles.search} alt="search" /></p>
                                </div>
                            )}
                            {data?.common.publishing_office && <p className={styles.result}>{data?.common.publishing_office} <span className={styles.blue}>{data?.common.document_number}</span> {data?.common.kind}</p>}
                        </div>
                        <div className={styles.second}>
                            <div className={classNames(styles.point, styles.twoGrid)}>
                                <p className={styles.name}>Приоритетные данные:</p>
                                {data?.common.priority?.map(({ number, filing_date, publishing_office }, i) => <p key={i} className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /><p>{`${number ? number : ""} ${filing_date ? filing_date : ""} ${publishing_office ? publishing_office : ""}`}</p></p>)}
                            </div>
                            {data?.common.classification.cpc && (
                                <div className={styles.point}>
                                    <p className={styles.name}>СПК:</p>
                                    {data?.common.classification.cpc?.map(({ fullname }, i) => <p key={i} className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /> <p>{fullname}</p></p>)}
                                </div>
                            )}
                            {data?.common.classification.ipc && (
                                <div className={styles.point}>
                                    <p className={styles.name}>МПК:</p>
                                    {data?.common.classification.ipc?.map(({ fullname }, i) => <p key={i} className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /> <p>{fullname}</p></p>)}
                                </div>
                            )}
                            <div></div>
                        </div>
                        <div className={styles.third}>
                            {data?.biblio[(lang === "ru" && "ru") || (lang === "en" && "en")].applicant && (
                                <div className={classNames(styles.point, styles.twoGrid)}>
                                    <p className={styles.name}>Заявители:</p>
                                    {data?.biblio[(lang === "ru" && "ru") || (lang === "en" && "en")].applicant?.map(({ name }, i) => <p key={i} className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /><p>{name}</p></p>)}
                                </div>
                            )}
                            {data?.biblio[(lang === "ru" && "ru") || (lang === "en" && "en")].inventor && (
                                <div className={classNames(styles.point, styles.fourColumns)}>
                                    <p className={styles.name}>Авторы:</p>
                                    <div className={styles.twoColumns}>
                                        {data?.biblio[(lang === "ru" && "ru") || (lang === "en" && "en")].inventor?.map(({ name }, i) => <p key={i} className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /><p>{name}</p></p>)}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={styles.fourth}>
                            {data?.biblio[(lang === "ru" && "ru") || (lang === "en" && "en")].patentee && (
                                <div className={classNames(styles.point, styles.twoGrid)}>
                                    <p className={styles.name}>Патентообладатели:</p>
                                    {data?.biblio[(lang === "ru" && "ru") || (lang === "en" && "en")].patentee?.map(({ name }, i) => <p key={i} className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /><p>{name}</p></p>)}
                                </div>
                            )}
                            <div className={classNames(styles.point, styles.fourColumns)}>
                                <p className={styles.name}>Документы, цитированные в отчёте о поиске:</p>
                                {data?.biblio[(lang === "ru" && "ru") || (lang === "en" && "en")].citations_parsed?.map(({ text }, i) => <p key={i} className={styles.result}>{text}</p>)}
                            </div>
                        </div>
                    </div>
                    <div className={styles.closeContent}>
                        {data?.drawings && (
                            <div className={styles.pictures}>
                                <Accordion name={`Чертежи (${data?.drawings.length})`}>
                                    <div className={styles.pictures}>
                                        {data?.drawings?.map(({ url, width, height }, i) => <a key={i} href={`${BaseURL}${url}`} download target="_blank"><img alt="picture" src={`${BaseURL}${url}`} width={"auto"} height={242} /></a>)}
                                    </div>
                                </Accordion>
                            </div>
                        )}
                        {data?.abstract[(lang === "ru" && "ru") || (lang === "en" && "en")] && (
                            <div className={styles.report}>
                                <Accordion name="Реферат">
                                    <p dangerouslySetInnerHTML={{ __html: data?.abstract[(lang === "ru" && "ru") || (lang === "en" && "en")] }} />
                                </Accordion>
                            </div>
                        )}
                        {data?.claims[(lang === "ru" && "ru") || (lang === "en" && "en")] && (
                            <div className={styles.formula}>
                                <Accordion name="Формула">
                                    <div dangerouslySetInnerHTML={{ __html: data?.claims[(lang === "ru" && "ru") || (lang === "en" && "en")] }} />
                                </Accordion>
                            </div>
                        )}
                        {data?.description[(lang === "ru" && "ru") || (lang === "en" && "en")] && (
                            <div className={styles.description}>
                                <Accordion name="Описание">
                                    <p dangerouslySetInnerHTML={{ __html: data?.description[(lang === "ru" && "ru") || (lang === "en" && "en")] }} />
                                </Accordion>
                            </div>
                        )}
                        {/* <div className={styles.docs}>
                            <Accordion name="Документы, цитированные в отчёте о поиске:"></Accordion>
                        </div> */}
                    </div>
                </div>
            )}
        </>

    )
}