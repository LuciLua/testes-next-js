import styles from "../hooks.module.scss";
import { useState } from "react";

function ApplicationUseState() {
  // par componente tem memoria
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    // <div className={styles.contador}>
    <div className={styles.container}>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  );
}

export default ApplicationUseState;
