import Links from "./Links"
import NewsLetter from "./NewsLetter"
import Payment from "./Payment"
import Socials from "./Socials"
import styles from "./styles.module.scss"
import Copyright from "./Copyright";


export default function Footer() {
  return (
    <footer className={styles.footer}>

        <div className={styles.footer__container}>
            <Links/>
            <Socials/>
            <NewsLetter/>
            <Payment/>
            <Copyright/>
        </div>

    </footer>
  )
}