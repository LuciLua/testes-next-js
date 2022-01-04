import styles from "../hooks.module.scss";
import { useEffect, useState } from "react";
import { useNome } from "../../../context/NomeContext";

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
  
  // useState() or API ... not 2
  // async function SearchCurrentValueOfDolarForBR() {
  //   const resp = await fetch('https://economia.awesomeapi.com.br/last/BRL-USD')
  //   const data = await resp.json()
  //   const dolarEmReal = await data.BRLUSD.bid

  //   document.getElementById('dolarCurrentValue').innerHTML = dolarEmReal
  // }


  const [nome, setNome] = useNome();

  useEffect(() => {
    const userStorage = localStorage.getItem("nome")
    if(userStorage){
      setNome(JSON.parse(userStorage))
    } else{
      setNome({
        name: ''
      })
    }
  }, []);

  return (
    <>
      {/* treino 1 */}
      <div className={styles.container}>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar</button>
      </div>

      {/* treino 2 */}
      <div className={styles.container}>
        <label>Real:</label>
        <input type={"number"} onChange={convert} placeholder="Reais" />
        <label>Dolar:</label>
        <input type={"number"} value={dolarResult} readOnly />
      </div>
    </>
  );
}

export default ApplicationUseState;
