import { useEffect, useState } from "react";
import styles from '../../styles/UserAdminForm.module.css'
import saveUserToDb from "../../api/saveUserToDb";

export default function UserAdminForm(props) {

    const initialUser = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        admin: false
    }

    const [user, setUser] = useState(setInitialUser)

    function setInitialUser() {
        if (props.user) {
            return props.user
        } else {
            return initialUser
        }
    }

    function handleInputChange(event, userProp) {
        const propUpdatedValue = userProp !== "admin" ? event.target.value : event.target.checked
        const updatedProp = { [userProp]: propUpdatedValue }
        setUser({
            ...user,
            ...updatedProp
        })
    }

    async function saveUser(e) {
        e.preventDefault()
        const modifiedUser = { ...user }
        resetUserState()
        await saveUserToDb(modifiedUser)
        props.toggleRefreshUsersTable()
    }

    function resetUserState(e) {
        if (e) e.preventDefault()
        setUser({ ...initialUser })
    }

    useEffect(() => {
            setUser(props.user)
    }, [props.user])

    return (
        <>
            <form className={styles.userForm} onSubmit={saveUser} onReset={resetUserState} >
                {user.id ?
                    <label className={`${styles.formInput} ${styles.idInput}`}>
                        Id:
                        <input readOnly={true} value={user.id} />
                    </label>
                    : ''}
                <label className={`${styles.formInput} ${styles.nameInput}`}>
                    Nome:
                    <input type="text" placeholder={!user.name ? "Informe o Nome do Usuário" : ''}
                        value={user.name} onChange={e => handleInputChange(e, 'name')} />
                </label>
                <label className={`${styles.formInput} ${styles.emailInput}`}>
                    E-mail:
                    <input type="email" placeholder={user.email ? user.email : "Informe o E-mail do Usuário"}
                        value={user.email} onChange={e => handleInputChange(e, 'email')} />
                </label>
                <label className={`${styles.checkBox} ${styles.adminInput}`}>
                    <input type="checkbox" checked={user.admin ? true : false}
                        onChange={e => handleInputChange(e, 'admin')} />
                    Administrador?
                </label>
                <label className={`${styles.formInput} ${styles.passwordInput}`}>
                    Senha:
                    <input type="password" placeholder="Informe a Senha do Usuário"
                        value={user.password} onChange={e => handleInputChange(e, 'password')} />
                </label>
                <label className={`${styles.formInput} ${styles.confirmPasswordInput}`}>
                    Confirmação de Senha:
                    <input type="password" placeholder="Confirme a Senha do Usuário"
                        value={user.confirmPassword} onChange={e => handleInputChange(e, 'confirmPassword')} />
                </label>
                <div className={styles.buttons}>
                    <input type="submit" value="Salvar" className={`${styles.submitButton}`} />
                    <input type="reset" value="Cancelar" className={`${styles.resetButton}`} />
                </div>
            </form>
            <hr />
        </>

    )
}