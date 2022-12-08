import styles from "./PatentCard.module.css"
import openNewWindow from "./res/openNewWindow.svg"
import addToFavorites from "./res/addToFavorites.svg"
import download from "./res/download.svg"

export const PatentCard = ({ title, MPK, document, inventors, description, applicants }) => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <div className={styles.name}>
                    <p dangerouslySetInnerHTML={{ __html: title }} />
                    <img src={openNewWindow} alt="openNewWindow" className={styles.openNewWindow} />
                </div>
                <div className={styles.topBtns}>
                    <img src={addToFavorites} alt="addTofavorites" />
                    <img src={download} alt="download" />
                </div>
            </div>
            <div className={styles.line2}>
                <p>МПК {MPK}</p>
                <p>Документ {document}</p>
                <p>Заявитель {inventors?.map(({ name }) => name).join(", ")}</p>
                <p>Автор {applicants?.map(({ name }) => name).join(", ")}</p>
            </div>
            <p className={styles.content}>
                Целью настоящего изобретения является реализация бытового устройства, содержащего логотип, который пользователь может воспринимать в 3D, и у которого отсутствует возможность выпадения с течением времени. Бытовое устройство, выполненное для достижения цели настоящего изобретения, изложенного в первом пункте формулы изобретения и ее соответствующих пунктах, содержит логотип, который расположен на его корпусе, и состоит из сегментов логотипа, таких как буква, знак и символ. Сегменты логотипа наносятся на площадки, сформированные на основе логотипа, и между логотипом и площадками имеются канавки, которые отделяют логотип и поверхность основы друг от друга. Канавки прорезаются в основе вдоль контура каждого сегмента логотипа, образуя логотип посредством известных способов формования.
            </p>
        </div>
    )
}