import { useState } from "react"
import styles from "./Accordion.module.css"
import { ReactComponent as Arrow } from "./res/arrow.svg"

export const Accordion = ({ name, children }) => {

    const [open, setOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div
                className={styles.main}
                onClick={() => { setOpen(!open) }}>
                <p>{name}</p>
                <span><Arrow className={open ? [styles.arrow, styles.open].join(" ") : styles.arrow} /></span>
            </div>
            <div className={open ? [styles.content, styles.open].join(" ") : styles.content}>
                {children}
            </div>
        </div>
    )
}