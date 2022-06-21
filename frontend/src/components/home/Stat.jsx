import styles from '../../styles/Stat.module.css'

export default function Stat(props) {
    return (
        <div className={styles.stat}>
            <div className={styles.statIcon}>
                {props.children}
            </div>
            <div className={styles.statInfo}>
                <span className={styles.statTitle}>{props.title}</span>                
                <span className={styles.statValue}>{props.value}</span>                
            </div>

        </div>
    )
}