import styles from '../../styles/template/ToggleMenu.module.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function ToggleMenu(props) {
    return (
        <div
            className={styles.toggle}
            onClick={props.setMenuIsVisible}>
            {props.menuIsVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowLeftIcon />}
        </div>
    )
}