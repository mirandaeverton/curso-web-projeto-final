import styles from '../../styles/template/Content.module.css'

export default function Content(props) {
    return (
        <div className={styles.content}>
            {props.children}
        </div>
    )
}