import styles from "./styles.module.scss"
import {BiRightArrowAlt} from "react-icons/bi";

function CircledIconBtn({type, text}) {
    return (
        <button className={styles.button} type={type}>
            {text}
            <div className={styles.svg__wrap}>
                <BiRightArrowAlt />
            </div>
        </button>
    );
}

export default CircledIconBtn;