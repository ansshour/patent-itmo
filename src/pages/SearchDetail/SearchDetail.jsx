import { Button } from "../../components/Button/Button"
import styles from "./SearchDetail.module.css"
import buttonWithArrow from "./res/buttonWithArrowRight.svg"
import arrow from "./res/arrow.svg"
import arrowDown from "./res/arrowDown.svg"
import searchIcon from "./res/searchIcon.svg"
import classNames from "classnames"
import { Accordion } from "../../components/Accordion/Accordion"

export const SearchDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1 className={styles.title}>БЫТОВОЕ УСТРОЙСТВО, СОДЕРЖАЩЕЕ ЛОГОТИП, И СПОСОБ НАНЕСЕНИЯ ЛОГОТИПА </h1>
                <Button blue>Похожие документы</Button>
                <div className={styles.switchPage}>
                    <img src={buttonWithArrow} className={styles.left} alt="left" />
                    <img src={buttonWithArrow} alt="right" />
                </div>
            </div>
            <div className={styles.twoLineTop}>
                <button className={styles.backToSearch}>
                    <img src={arrow} alt="arrow" />
                    <p>Вернуться к результатам поиска</p>
                </button>
                <div className={styles.downloads}>
                    <Button blue>Espacenet</Button>
                    <button className={styles.pdf}>
                        <p>PDF</p>
                        <img src={arrowDown} alt="arrowDown" />
                    </button>
                    <Button blue>XML</Button>
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
                    <div className={styles.point}>
                        <p className={styles.name}>Номер заявки:</p>
                        <p className={styles.result}>2014143788/12</p>
                    </div>
                    <div className={styles.point}>
                        <p className={styles.name}>Дата подачи заявки:</p>
                        <p className={styles.result}>2013.03.29 <img src={searchIcon} className={styles.search} alt="search" /></p>
                    </div>
                    <div className={styles.point}>
                        <p className={styles.name}>Опубликовано:</p>
                        <p className={styles.result}>2016.04.20 <img src={searchIcon} className={styles.search} alt="search" /></p>
                    </div>
                    <p className={styles.result}>RU 2 <span className={styles.blue}>615 335</span> C2</p>
                </div>
                <div className={styles.second}>
                    <div className={classNames(styles.point, styles.twoGrid)}>
                        <p className={styles.name}>Приоритетные данные:</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /> A 2012/03934 2012.04.05 TR</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /> A 2012/03934 2012.04.05 TR</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /> A 2012/03934 2012.04.05 TR</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /> A 2012/03934 2012.04.05 TR</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /> A 2012/03934 2012.04.05 TR</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /> A 2012/03934 2012.04.05 TR</p>
                    </div>
                    <div className={styles.point}>
                        <p className={styles.name}>СПК:</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /> G09F23/00</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />G09F3/00</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /> G09F23/0058</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />G09F7/16</p>
                    </div>
                    <div className={styles.point}>
                        <p className={styles.name}>МПК:</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" /> G09F23/00</p>
                    </div>
                    <div></div>
                </div>
                <div className={styles.third}>
                    <div className={classNames(styles.point, styles.twoGrid)}>
                        <p className={styles.name}>Заявители:</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />ARCHELYK ANONIM SHIRKETI</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />ARCHELYK ANONIM SHIRKETI</p>
                    </div>

                    <div className={classNames(styles.point, styles.fourColumns)}>
                        <p className={styles.name}>Авторы:</p>
                        <div className={styles.twoColumns}>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />ИЛГЫН, Сонер (TR)</p>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />АВДЖЫ, Сердал Коркут (TR)</p>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />БАТУР, Алпер (TR)</p>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />ГУЛБАЙ, Умит (TR)</p>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />ILGYN SONER</p>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />AVDZHY SERDAL KORKUT</p>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />BATUR ALPER</p>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />GULBAJ UMIT</p>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />ILGYN, SONER</p>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />AVDZHY, SERDAL KORKUT</p>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />BATUR, ALPER</p>
                            <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />GULBAJ, UMIT</p>
                        </div>
                    </div>
                </div>
                <div className={styles.fourth}>
                    <div className={classNames(styles.point, styles.twoGrid)}>
                        <p className={styles.name}>Патентообладатели:</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />ARCHELYK ANONIM SHIRKETI</p>
                        <p className={styles.result}><img src={searchIcon} className={styles.searchSecond} alt="search" />ARCHELYK ANONIM SHIRKETI</p>
                    </div>

                    <div className={classNames(styles.point, styles.fourColumns)}>
                        <p className={styles.name}>Документы, цитированные в отчёте о поиске:</p>
                        <p className={styles.result}>DE 102006053906 A1, 21.05.2008.</p>
                        <p className={styles.result}>US 7412790 B2, 19.08.2008.</p>
                        <p className={styles.result}>US 2010275481 A1, 04.11.2010.</p>
                        <p className={styles.result}>US 2008163759 A1, 10.07.2008.</p>
                        <p className={styles.result}>US 6477799 B1, 12.11.2002.</p>
                        <p className={styles.result}>US 5536558 A, 16.07.1996.</p>
                        <p className={styles.result}>JP 2004198775 A, 15.07.2004.</p>
                        <p className={styles.result}>RU 2161332 C1, 27.12.2000.</p>
                    </div>
                </div>
            </div>
            <div className={styles.closeContent}>
                <div className={styles.pictures}>
                    <Accordion name="Чертежи (4)"></Accordion>
                </div>
                <div className={styles.report}>
                    <Accordion name="Реферат"></Accordion>
                </div>
                <div className={styles.formula}>
                    <Accordion name="Формула"></Accordion>
                </div>
                <div className={styles.description}>
                    <Accordion name="Описание"></Accordion>
                </div>
                <div className={styles.description}>
                    <Accordion name="Документы, цитированные в отчёте о поиске:"></Accordion>
                </div>
            </div>
        </div>
    )
}