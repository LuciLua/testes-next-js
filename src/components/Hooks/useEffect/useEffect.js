import styles from "../hooks.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { getRepositories } from "../../../services/Repos.services";

import Axios from "axios"

import classNames from 'classnames'


function ApplicationUseEffect() {

  const [repositories, setRepositories] = useState([]);

  // 2 parametros
  // funcao , Em quais circunstancias essas funcao deve ser executada
  // circunstancias = variaveis.. posso passar varias... userEffect so é executado quando 1 dessas variaveis mudar
  // useEffect/efeito so vai ser disparado quando repositories mudar

  async function getRepositories(numPage) {
    const response = await fetch(`https://api.github.com/users/LuciLua/repos?page=${numPage}`)
    const data = await response.json()

    setRepositories(data)
  }
  
  function onChangeRepo(e){
    getRepositories(e.target.textContent)
  }
  
  // 15:00
  return (
    <div className={styles.container}>
      <div className={styles.selectPage}>
        <div className={styles.eachPage} onClick={onChangeRepo}>1</div>
        <div className={styles.eachPage} onClick={onChangeRepo}>2</div>
        <div className={styles.eachPage} onClick={onChangeRepo}>3</div>
      </div>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <Link href={repo.html_url}>
              <a>
                Name: {repo.name} =&gt;  Description: {repo.description}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApplicationUseEffect;
