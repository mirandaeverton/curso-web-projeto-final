import styles from '../../styles/template/PageTitle.module.css'

export default function PageTitle(props) {
    return(
        <div className={styles.pageTitle}>
            <h1>
                {props.children}
                {props.mainTitle}</h1>
            <h2>{props.caption}</h2>
            <hr />
        </div>
    )
}