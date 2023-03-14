import styles from "./styles.module.scss"
import { MdOutlineArrowDropDown, MdOutlineSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDownFill } from "react-icons/ri";
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top({country}) {

    const [loggedIn, setLoggedIn] = useState(true)
    const [visible, setVisible] = useState(false)


    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li className={styles.li}>
                        <img src={country.flag} alt="Флаг" />
                        <span>{country.name} / руб.</span>
                    </li>
                    <li className={styles.li}>
                        <MdOutlineSecurity />
                        <span>Buyer protection</span>
                    </li>
                    <li className={styles.li}>
                        <span>
                            Customer Service
                        </span>
                    </li>
                    <li className={styles.li}>
                        <span>
                            Help
                        </span>
                    </li>
                    <li className={styles.li}>
                        <BsSuitHeart />
                        <span>
                            Wishlist
                        </span>
                    </li>
                    <li className={styles.li}
                        onMouseOver={() => { setVisible(true) }}
                        onMouseLeave={() => { setVisible(false) }}
                    >
                        {
                            loggedIn ? (
                                <div>
                                    <div className={styles.flex}>
                                        <img
                                            src="https://www.shareicon.net/data/128x128/2016/07/26/802001_man_512x512.png"
                                            alt="Avatar" />
                                        <span>Alexey G.</span>
                                        <MdOutlineArrowDropDown />
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className={styles.flex}>
                                        <RiAccountPinCircleLine />
                                        <span>Log In</span>
                                        <MdOutlineArrowDropDown />
                                    </div>
                                </div>
                            )
                        }


                        {
                            visible && <UserMenu loggedIn={loggedIn} />
                        }


                    </li>
                </ul>
            </div>
        </div>
    )
}