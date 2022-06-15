import styles from '../../styles/PageTitle.module.css'

export default function PageTitle(props) {
    return(
        <div className={styles.pageTitle}>
            <h1><i className={props.icon} /> {props.mainTitle}</h1>
            <h2>{props.caption}</h2>
            <hr />
        </div>
    )
}