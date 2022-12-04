import { Button } from "../Button/Button"
import styles from "./SearchPanel.module.css"
import information from "./res/info.svg"
import { useState } from "react";
import { MyDatePicker } from "../DatePicker/myDatePicker";

export const SearchPanel = () => {

    const [startDateBefore, setStartDateBefore] = useState(new Date());
    const [startDateAfter, setStartDateAfter] = useState(new Date());

    const variants = [
        { id: 0, name: "Простой поиск", isActive: true },
        { id: 1, name: "Расширенный поиск", isActive: false },
        { id: 2, name: "Поиск A.I.", isActive: false },
    ]

    return (
        <div className={styles.search}>
            <ul className={styles.variants}>
                {variants.map(({ id, name, isActive }) => <li className={isActive ? [styles.variant, styles.active].join(" ") : styles.variant} key={id}>{name}</li>)}
            </ul>
            <div className={styles.searchWrapper}>
                <input type="text" placeholder="Введите поисковый запрос" className={styles.searchInput} />
                <div className={styles.btnWrapper}><Button>Поиск</Button></div>
            </div>
            <div className={styles.searchCriteria}>
                <p className={styles.name}>Критерии поиска</p>
                <div className={styles.line1}>
                    <div className={styles.criteriasInputWrapper}>
                        <label className={styles.placeholder}>Номер документа</label>
                        <input className={styles.criteriasInput} />
                    </div>
                    <div className={styles.datePicker}>
                        <MyDatePicker placeholder="Дата публикации от" date={startDateBefore} setDate={setStartDateBefore} />
                    </div>
                    <div className={styles.datePicker}>
                        <MyDatePicker placeholder="Дата публикации до" date={startDateAfter} setDate={setStartDateAfter} />
                    </div>
                </div>
                <div className={styles.line2}>
                    <div className={styles.criteriasInputWrapper}>
                        <label className={styles.placeholder}>Автор</label>
                        <input className={styles.criteriasInput} />
                    </div>
                    <img src={information} alt="info" className={styles.information} />
                </div>
                <div className={styles.line3}>
                    <div className={styles.criteriasInputWrapper}>
                        <label className={styles.placeholder}>Патентообладатель</label>
                        <input className={styles.criteriasInput} />
                    </div>
                    <img src={information} alt="info" className={styles.information} />
                </div>
                <div className={styles.line4}>
                    <div className={styles.criteriasInputWrapper}>
                        <label className={styles.placeholder}>Заявитель</label>
                        <input className={styles.criteriasInput} />
                    </div>
                    <img src={information} alt="info" className={styles.information} />
                </div>
                <div className={styles.clearAreas}>
                    <button className={styles.clearAreasBtn}>Очистить поля</button>
                </div>
            </div>
        </div>
    )
}