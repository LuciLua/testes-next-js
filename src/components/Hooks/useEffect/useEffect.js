import styles from "../hooks.module.scss";
import { useEffect } from "react";

function ApplicationUseEffect() {
  const [repositories, setRepositories] = useState([]);

  // 2 parametros
  // funcao , Em quais circunstancias essas funcao deve ser executada
  // circunstancias = variaveis.. posso passar varias... userEffect so é executado quando 1 dessas variaveis mudar
  // useEffect/efeito so vai ser disparado quando repositories mudar

  useEffect(async () => {

      const response = await fetch(`https://api.github.com/users/LuciLua/repos`);
      const data = await response.json();
    
    setRepositories(data)

  }, []); // array vazio melhor opção, executa apenas 1 vez. garnte apenas 1 load inicial

  // 15:00
  return (
    <div className={styles.container}>
      <p>Application useEffect</p>
    </div>
  );
}

export default ApplicationUseEffect;
