import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/client";
import { Footer } from "../components/Footer";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [session, loading] = useSession();
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

            <li>
              {!session && (
                <button
                  onClick={(): Promise<void> => signIn("auth0")}
                  className={styles.btnLogin}
                >
                  Faça login
                </button>
              )}
              {session && (
                <>
                  <img
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                    src={session.user.image}
                    onClick={(): Promise<void> => signOut()}
                    className={styles.btnLogout}
                  ></img>
                </>
              )}
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
        {loading && (
          <div
            style={{
              position: "absolute",
              width: "100vw",
              height: "100vh",
              background: "rgba(26, 26, 26, 0.7004)",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "72px" }}>Carregando</h1>
          </div>
        )}
      </div>
      <Footer isPositionAbsolute={true} />
    </>
  );
}
