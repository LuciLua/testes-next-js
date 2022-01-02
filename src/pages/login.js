import { useNome } from "../context/NomeContext";
import styles from "../styles/login.module.scss";
import { useState } from 'react'

function About() {

  const { nome, setNome } = useNome();


  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>
              Login
          </p>
          <input placeholder="user" />
          <button
            onClick={() => {
              const btnValue = document.querySelector("input").value;
              setNome(btnValue);
              nome = btnValue;
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
