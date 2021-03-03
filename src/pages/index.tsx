import Link from "next/link";
import { Footer } from "../components/Footer";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.bgImg}>
        <img src="/img/field.png" alt="Soccer Field" />
      </section>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src="/svg/logo.svg" alt="Futciety Logo" />
          </div>

          <ul className={styles.list}>
            <li>
              <Link href="/newfield">
                <a>Cadastre seu Campo</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Sobre Nós</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contato</a>
              </Link>
            </li>
          </ul>
        </header>
        <section className={styles.main}>
          <div className={styles.mainContainer}>
            <h1>
              Ache o seu Fut no <br /> <strong>Futciety</strong>
            </h1>

            <p>
              Ajudamos pessoas a encontrarem campos para jogarem o seu tão
              sagrado futebol.
            </p>

            <div className={styles.buttons}>
              <Link href="/fields">
                <a className={styles.btn1}>Encontre um Fut</a>
              </Link>

              <Link href="/newfield">
                <a className={styles.btn2}>Cadastre um campo</a>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer isPositionAbsolute={true} />
    </>
  );
}
