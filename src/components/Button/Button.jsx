import styles from "./Button.module.css"

export const Button = ({ children, ...attr }) => {
    return (
        <button className={styles.button} {...attr}>{children}</button>
    )
}