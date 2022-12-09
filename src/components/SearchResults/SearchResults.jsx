import styles from "./SearchResults.module.css"
import resultIcon from "./res/file-search-03.svg"
import analysisIcon from "./res/microscope.svg"
import { Button } from "../Button/Button"
import { PatentCard } from "../PatentCard/PatentCard"
import { MyPagination } from "../Pagination/MyPagination"
import { useEffect } from 'react'

export const SearchResults = ({ searchResult, setPageNumber }) => {

    useEffect(() => {
        console.log(searchResult)
    }, [searchResult])

    const normaliseResults = (searchResult) => {
        return searchResult?.hits.map(item => (
            {
                id: item.id,
                title: item.snippet.title,
                description: item.snippet.description,
                MPK: item.common.classification.ipc[0].fullname,
                document: `${item.common.publishing_office} ${item.common.document_number} ${item.common.kind} ${item.common.publication_date}`,
                inventor: item.biblio.en?.inventor,
                applicant: item.biblio.en?.applicant,
            }
        ))
    }

    return (
        <>
            {!searchResult.hits?.length ? <p className={styles.noResults}>По вашему запросу ничего не найдено.</p> : (
                <>
                    <div className={styles.top}>
                        <div className={styles.first}>
                            <div className={styles.title}>
                                <img src={resultIcon} alt="resultIcon" />
                                <p>Результаты поиска</p>
                            </div>
                            <div className={styles.showFilters}>
                                <img src={analysisIcon} alt="analysis" />
                                <p>Анализ результатов поиска</p>
                            </div>
                        </div>
                        <Button secondary>
                            Сохранить поисковой запрос
                        </Button>
                    </div>
                    <div className={styles.results}>
                        <div className={styles.totalAndSort}>
                            <p className={styles.total}>Всего найдено: {searchResult.total}</p>
                            <div className={styles.sort}>
                                Тут будет сортировка!!
                            </div>
                        </div>
                        <div className={styles.projectCards}>
                            {normaliseResults(searchResult).map(({ title, description, MPK, document, inventor, applicant, id }) => (
                                <PatentCard key={id} title={title} description={description} MPK={MPK} document={document} inventors={inventor} applicants={applicant} />
                            ))}
                        </div>
                        <div className={styles.pagination}>
                            <MyPagination countPage={Math.ceil(searchResult.available / 10)} setPageNumber={setPageNumber} />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}