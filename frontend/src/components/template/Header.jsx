import styles from './Header.module.css'

export default function Header(props) {
    return(
        <header className={styles.header}>
            <a 
            className={`
                ${styles.toggle} 
                ${props.menuIsVisible ? props.menuHidden : null}`} 
            onClick={props.onClick}>
                <i className={`fa fa-lg ${props.toggle}`} />
            </a>
            <h1 className={styles.title}>{ props.title }</h1>
        </header>
    )
}