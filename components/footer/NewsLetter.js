import styles from "./styles.module.scss"
import Link from "next/link";
import { useState } from "react";

const NewsLetter = (props) => {

    const [email, setEmail] = useState("")

    return (
        <div className={styles.footer__newsletter}>
            <h3>SIGN UP FOR OUR NEWSLETTER</h3>
            <div className={styles.footer__flex}>
                <input
                    type="text"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className={styles.btn_primary}                  
                    // onClick={"() => subscribe()"}
                >
                    SUBSCRIBE
                </button>
            </div>          
            <p>
                By clicking the SUBSCRIBE button, you are agreeing to{" "}
                <Link href="">our Privacy & Cookie Policy</Link>
            </p>
        </div>
    )
};

export default NewsLetter;