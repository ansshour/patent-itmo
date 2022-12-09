import styles from "./Button.module.css"

export const Button = ({ children, primary, secondary, blue, ...attr }) => {
    return (
        <>
            {primary && <button className={styles.buttonPrimary} {...attr}>{children}</button>}
            {secondary && <button className={styles.buttonSecondary} {...attr}>{children}</button>}
            {blue && <button className={styles.buttonBlue}>{children}</button>}
        </>
    )
}