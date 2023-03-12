import styles from "./styles.module.scss"
import Link from "next/link";

const UserMenu = ({loggedIn}) => {

    return (

        <div className={styles.menu}>
            <h4>Welcome to Shoppay !</h4>
            {loggedIn ? (
                <div className={styles.flex}>
                    <img src={"https://www.shareicon.net/data/128x128/2016/07/26/802001_man_512x512.png"} alt="" className={styles.menu__img} />
                    <div className={styles.col}>
                        <span>Welcome Back,</span>
                        <h3>Alexey G.</h3>
                        <span onClick="">Sign out</span>
                    </div>
                </div>
            ) : (
                <div className={styles.flex}>
                    <button className={styles.btn_primary}>Register</button>
                    <button className={styles.btn_outlined} onClick={() => signIn()}>
                        Login
                    </button>
                </div>
            )}
            <ul>
                <li>
                    <Link href="/profile">Account</Link>
                </li>
                <li>
                    <Link href="/profile/orders">My Orders</Link>
                </li>
                <li>
                    <Link href="/profile/messages">Message Center</Link>
                </li>
                <li>
                    <Link href="/profile/address">Address</Link>
                </li>
                <li>
                    <Link href="/profile/whishlist">Whishlist</Link>
                </li>
            </ul>
        </div>
    );
};

export default UserMenu;