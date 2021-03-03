import Link from "next/link";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { signIn, signOut, useSession } from "next-auth/client";

import styles from "../styles/NewField.module.css";

export default function CreateNewField() {
  const [session, loading] = useSession();

  const [fieldName, setFieldName] = useState<string>();
  const [propertyName, setPropertyName] = useState<string>();
  const [fieldImage, setFieldImage] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [whatsapp, setWhatsapp] = useState<string>();
  const [opening, setOpening] = useState<any>();
  const [closure, setClosure] = useState<any>();
  const [address, setAddress] = useState<string>();
  const [address2, setAddress2] = useState<string>();
  const [city, setCity] = useState<string>();
  const [state, setState] = useState<string>();

  function handleData(e) {
    e.preventDefault();
  }

  return (
    <>
      <section className={styles.bgImg}>
        <img src="/img/field.png" alt="Soccer Field" />
      </section>
      <Header page="NewField" />
      {session && (
        <section className={styles.main}>
          <form onSubmit={handleData}>
            <h1>
              Cadastro do <br />
              campo ou quadra
            </h1>
            <fieldset>
              <legend>Dados Gerais</legend>

              <div className={styles.field}>
                <label htmlFor="fieldName">Nome do Campo/Quadra</label>
                <input
                  required
                  type="text"
                  value={fieldName}
                  onChange={(e) => setFieldName(e.target.value)}
                  name="fieldName"
                  id="fieldName"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="propertyName">
                  Nome do Proprietário/Instituição
                </label>
                <input
                  required
                  type="text"
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                  name="propertyName"
                  id="propertyName"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="fieldImage">Link da Imagem do Local</label>
                <input
                  type="text"
                  name="fieldImage"
                  value={fieldImage}
                  onChange={(e) => setFieldImage(e.target.value)}
                  id="fieldImage"
                  placeholder="https://linkdasuaimagem.com"
                />
              </div>
            </fieldset>

            <div className={styles.groupFieldset}>
              <fieldset>
                <legend>Contato</legend>

                <div className={styles.fieldGroup}>
                  <div className={styles.field}>
                    <label htmlFor="email">E-mail</label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      id="email"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="whatsapp">Whatsapp</label>
                    <input
                      required
                      type="text"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      name="whatsapp"
                      id="whatsapp"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend>Horários</legend>

                <div className={styles.fieldGroup}>
                  <div className={styles.field}>
                    <label htmlFor="opening">Abre às</label>
                    <input
                      type="time"
                      value={opening}
                      onChange={(e) => setOpening(e.target.value)}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="closure">Fecha às</label>
                    <input
                      type="time"
                      value={closure}
                      onChange={(e) => setClosure(e.target.value)}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
            <fieldset>
              <legend>Endereço</legend>

              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label htmlFor="address">Endereço</label>
                  <input
                    required
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    name="address"
                    id="address"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="address2">Número</label>
                  <input
                    required
                    type="text"
                    value={address2}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAddress2(e.currentTarget.value)
                    }
                    name="address2"
                    id="address2"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="state">Estado</label>
                  <input
                    required
                    type="text"
                    value={state}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setState(e.currentTarget.value)
                    }
                    name="state"
                    id="state"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="city">Cidade</label>
                  <input
                    required
                    type="text"
                    value={city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setCity(e.currentTarget.value)
                    }
                    name="city"
                    id="city"
                  />
                </div>
              </div>
            </fieldset>

            <button type="submit" className={styles.btn1}>
              Cadastrar
            </button>
          </form>
        </section>
      )}
      {!session && (
        <section
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h3>Para cadastrar um campo/quadra faça login</h3>
          <button
            onClick={(): Promise<void> => signIn("auth0")}
            className={styles.btnLogin}
          >
            Faça login
          </button>
        </section>
      )}
      <Footer isPositionAbsolute={false} />
    </>
  );
}
