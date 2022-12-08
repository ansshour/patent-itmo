import { Button } from "../Button/Button"
import styles from "./SearchPanel.module.css"
import information from "./res/info.svg"
import { useState } from "react";
import { MyDatePicker } from "../DatePicker/myDatePicker";
import { fetchData } from "../../api/fetchData";

export const SearchPanel = ({ search, setSearch, dateFrom, setDateFrom, dateTo, setDateTo, variants, setSearchResult, searchResult }) => {

    const makeSimpleSearchQueryBody = ({ searchQuery, documentNumber, author, patentHolder, applicant, dateFrom, dateTo, pageNumber }) => {
        return ({
            "qn": searchQuery,
            "offset": (pageNumber - 1) * 10,
            "limit": 10,
            "pre_tag": "<span style='background: yellow' class=\"marked-element\">",
            "post_tag": "</span>",
            "include_facets": 0,
            "filter": {
                "date_published:search": {
                    "range": {
                        "gte": dateFrom,
                        "lte": dateTo
                    }
                },
                "document_number": {
                    "search": documentNumber
                },
                "authors:search": {
                    "search": author
                },
                "patent_holders:search": {
                    "search": patentHolder
                },
                "applicants:search": {
                    "search": applicant
                }
            },
            "sort": "relevance",
            "highlight": {
                "profiles": [
                    "_searchquery_"
                ]
            },
            "preffered_lang": "ru"
        })
    }

    const simpleQuery = async () => {
        try {
            const { data } = await fetchData.post("/api/patents/search", makeSimpleSearchQueryBody({
                ...search,
                dateTo,
                dateFrom
            }))
            setSearchResult(data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className={styles.search}>
            <ul className={styles.variants}>
                {variants.map(({ id, name, isActive }) => <li className={isActive ? [styles.variant, styles.active].join(" ") : styles.variant} key={id}>{name}</li>)}
            </ul>
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="Введите поисковый запрос"
                    className={styles.searchInput}
                    value={search.searchQuery}
                    onChange={(e) => { setSearch({ ...search, searchQuery: e.target.value }) }}
                />
                <div className={styles.btnWrapper}><Button primary onClick={simpleQuery}>Поиск</Button></div>
            </div>
            {!searchResult && (
                <div className={styles.searchCriteria}>
                    <p className={styles.name}>Критерии поиска</p>
                    <div className={styles.line1}>
                        <div className={styles.criteriasInputWrapper}>
                            <label className={styles.placeholder}>Номер документа</label>
                            <input
                                className={styles.criteriasInput}
                                value={search.documentNumber}
                                onChange={(e) => { setSearch({ ...search, documentNumber: e.target.value }) }} />
                        </div>
                        <div className={styles.datePicker}>
                            <MyDatePicker
                                placeholder="Дата публикации от"
                                date={dateFrom}
                                setDate={setDateFrom} />
                        </div>
                        <div className={styles.datePicker}>
                            <MyDatePicker
                                placeholder="Дата публикации до"
                                date={dateTo}
                                setDate={setDateTo} />
                        </div>
                    </div>
                    <div className={styles.line2}>
                        <div className={styles.criteriasInputWrapper}>
                            <label className={styles.placeholder}>Автор</label>
                            <input
                                className={styles.criteriasInput}
                                value={search.author}
                                onChange={(e) => { setSearch({ ...search, author: e.target.value }) }} />
                        </div>
                        <img src={information} alt="info" className={styles.information} />
                    </div>
                    <div className={styles.line3}>
                        <div className={styles.criteriasInputWrapper}>
                            <label className={styles.placeholder}>Патентообладатель</label>
                            <input
                                className={styles.criteriasInput}
                                value={search.patentHolder}
                                onChange={(e) => { setSearch({ ...search, patentHolder: e.target.value }) }} />
                        </div>
                        <img src={information} alt="info" className={styles.information} />
                    </div>
                    <div className={styles.line4}>
                        <div className={styles.criteriasInputWrapper}>
                            <label className={styles.placeholder}>Заявитель</label>
                            <input
                                className={styles.criteriasInput}
                                value={search.applicant}
                                onChange={(e) => { setSearch({ ...search, applicant: e.target.value }) }} />
                        </div>
                        <img src={information} alt="info" className={styles.information} />
                    </div>
                    <div className={styles.clearAreas}>
                        <Button secondary>Очистить поля</Button>
                    </div>
                </div>
            )}
        </div>
    )
}