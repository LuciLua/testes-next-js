import styles from "../hooks.module.scss";
import { useState } from "react";

function ApplicationUseState() {

  // treino 1
  // par componente tem memoria
  const [contador, setContador] = useState(1);
  function adicionarContador() {
    setContador(contador + 1);
  }

  // treino 2
  const [real, setReal] = useState(1)
  // valor do dolar do dia 03/01/2022
  const currentDolar = 0.18
  // conversao
  let dolarResult = real * currentDolar
  // definindo real para o que for capturado no evento onChange... Deixa pronto para conversao
  const convert = (e) => setReal(e.target.value)

  const [repositories, setRepositories] = useState([
    { id: '1', name: "repo-1" },
    { id: '2', name: "repo-2" },
    { id: '3', name: "repo-3" }
  ]);

  function addNewRepos() {
    setRepositories([
      ...repositories,
      { id: Math.random(), name: "novo repo" }
    ])
  }

  console.log(repositories)

  return (
    <>
      {/* treino 1 */}
      <div className={styles.container}>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar</button>
      </div>

      <h3>
        Others experiments:
      </h3>

      {/* treino 2 */}
      <div className={styles.container}>
        <label>Real:</label>
        <input type={"number"} onChange={convert} placeholder="Reais" />
        <label>Dolar:</label>
        <input type={"number"} value={dolarResult} readOnly />
      </div>

      {/* treino 3 */}

      <div className={styles.container}>
        <ul>
          <li>First</li>
          {repositories.map(repo => (
            <li key={repo.id}>
              {repo.name}
            </li>
          ))
          }
        </ul>
        <button onClick={addNewRepos}>Add new Repo</button>
      </div>

    </>
  );
}

export default ApplicationUseState;
