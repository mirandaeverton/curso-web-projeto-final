import styles from '../../styles/CategoryAdmin.module.css'
import { Toaster } from 'react-hot-toast'
import CategoryAdminTable from './CategoryAdminTable'

export default function CategoryAdmin(props) {
    return (
        <div className={styles.categoryAdmin}>
            <Toaster position='top-right' />
            <CategoryAdminTable />
        </div>
    )
}