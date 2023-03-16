import styles from "./styles.module.scss"
import {BiUser} from "react-icons/bi";
import {MdEmail, MdInput, MdPassword} from "react-icons/md";
import {ErrorMessage, useField} from "formik";

function LoginInput({ icon, placeholder, ...props }) {

    const [field, meta] = useField(props);

    switch (icon) {
        case "user" : {
            icon = <BiUser/>
            break
        }
        case "email" : {
            icon = <MdEmail/>
            break
        }
        case "password" : {
            icon = <MdPassword/>
            break
        }
        default:
            icon = <MdInput/>

    }

    return (
        <div className={`${styles.input} ${meta.touched && meta.error ? styles.error : ''}`}>
            {icon}
            <input
                name={field.name}
                placeholder={placeholder}
                {...field}
                {...props}
            />
            {/*Ошибка*/}
            {meta.touched && meta.error && (
                <div className={styles.error__popup}>
                    <span></span>
                    <ErrorMessage name={field.name} />
                </div>
            )}
        </div>

    );
}

export default LoginInput;