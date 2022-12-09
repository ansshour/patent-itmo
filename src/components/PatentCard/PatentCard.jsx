import styles from "./PatentCard.module.css"
import openNewWindow from "./res/openNewWindow.svg"
import addToFavorites from "./res/addToFavorites.svg"
import download from "./res/download.svg"
import { Link } from "react-router-dom";

export const PatentCard = ({ title, MPK, document, inventors, description, applicants }) => {

    const applicantsFormat = (applicants) => {
        const applicantNames = applicants.map(({ name }) => name);
        return applicantNames.join(" ")
    }

    const inventorsFormat = (inventors) => {
        const inventorsNames = inventors.map(({ name }) => name);
        return inventorsNames.join(" ")
    }

    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.name}>
                    <Link to={"search/1"}><p dangerouslySetInnerHTML={{ __html: title }} /></Link>
                    <a href="search/1" target="_blank"><img src={openNewWindow} alt="openNewWindow" className={styles.openNewWindow} /></a>
                </div>
                <div className={styles.topBtns}>
                    <img src={addToFavorites} alt="addTofavorites" />
                    <img src={download} alt="download" />
                </div>
            </div>
            <div className={styles.line2}>
                <p className={styles.points}>МПК {MPK}</p>
                <p className={styles.points}>Документ {document}</p>
                {applicants && <p className={styles.points}>Заявитель {applicantsFormat(applicants)}</p>}
                {inventors && <p className={styles.points}>Автор {inventorsFormat(inventors)}</p>}
            </div>
            <p className={styles.content} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    )
}