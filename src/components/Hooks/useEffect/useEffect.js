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

  var numPage = 1

  async function getRepositories(numPage) {
    return Axios
      .get(`https://api.github.com/users/LuciLua/repos?page=${numPage}`)
      .then(res => res.data)
  }


  async function fetchRepos() {
    await getRepositories(numPage)
      .then(setRepositories([...repositories]))
  }


  function onChangeRepo(e){
    console.log(e.target.textContent)
  }


  useEffect(() => {

    fetchRepos() // esse num page precisa variar
  }, []); // array vazio melhor opção, executa apenas 1 vez. garnte apenas 1 load inicial


  useEffect(() => {
  }, [getRepositories])


  // 15:00
  return (
    <div className={styles.container}>
      <div className={styles.selectPage}>
        <div className={classNames(styles.eachPage, "eachPage")} id="page1" onClick={onChangeRepo}>1</div>
        <div className={classNames(styles.eachPage, "eachPage")} id="page2" onClick={onChangeRepo}>2</div>
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
