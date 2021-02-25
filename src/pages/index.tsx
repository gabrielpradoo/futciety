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
              <a href="">Cadastre seu Campo</a>
            </li>
            <li>
              <a href="">Sobre Nós</a>
            </li>
            <li>
              <a href="">Contato</a>
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
              <a href="" className={styles.btn1}>
                Encontre um Fut
              </a>
              <a href="" className={styles.btn2}>
                Cadastre um campo
               </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
