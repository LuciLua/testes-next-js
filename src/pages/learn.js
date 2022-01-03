import Link from "next/link";
// import { useState } from "react";
import styles from "../styles/learn.module.scss";

import ApplicationUseState from "../components/Hooks/useState/useState";
import ApplicationUseEffect from "../components/Hooks/useEffect/useEffect";
import ApplicationUseContext from "../components/Hooks/useContext/useContext";
import ApplicationUseReducer from "../components/Hooks/useReducer/useReducer";
import ApplicationUseCallback from "../components/Hooks/useCallback/useCallback";
import ApplicationUseMemo from "../components/Hooks/useMemo/useMemo";
import ApplicationUseRef from "../components/Hooks/useRef/useRef";
import ApplicationUseImperativeHandle from "../components/Hooks/useImperativeHandle/useImperativeHandle";
import ApplicationUseLayoutEffect from "../components/Hooks/useLayoutEffect/useLayoutEffect";
import ApplicationUseDebugValue from "../components/Hooks/useDebugValue/useDebugValue";
import GoToTop from "../components/GoToTop/goToTop";

function Learn() {
  function ConvertToLowerCase(props) {
    const textoInserido = props.children;
    const result = textoInserido.toLowerCase();

    return result;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <GoToTop />
          <div className={styles.hooksColumns}>
            <h1>React</h1>
            <ConvertToLowerCase>
              All things in react are components. Components are Javascript
              functions and react can be a good idea for big and medium
              projects. This paragraph, for example, had all letters converted
              for lowercase through a component created for this function.
            </ConvertToLowerCase>
            <br />
            <div className={styles.codes}>
              <code>{`function ConvertToLowerCase(props) {`}</code>
              <code
                className={styles.codeWithIndent}
              >{`const textoInserido = props.children`}</code>
              <code
                className={styles.codeWithIndent}
              >{`const result = textoInserido.toLowerCase()`}</code>
              <code className={styles.codeWithIndent}>{`return result`}</code>
              <code>{`}`}</code>
              <code>{`<ConvertToLowerCase> THIS TEXT WILL BE CONVERTED FOR TO THE LOWER CASE </ConvertToLowerCase>`}</code>
            </div>
            <h1>Hooks</h1>
            <p>
              useState is a Hook, I don&apos;t know explained what is it
              especifically, but this can be help you while your application
              need of memoria. Hooks are identified by the word: &apos;use&apos;
              before the rest. Exists two types of Hooks classified by oficial
              documentation of react:
            </p>
            <ul>
              <ul className={styles.category}>
                Basic Hooks
                <li>
                  <Link href={"#useState"}>useState()</Link>
                </li>
                <li>
                  <Link href={"#useEffect"}>useEffect()</Link>
                </li>
                <li>
                  <Link href={"#useContext"}>useContext()</Link>
                </li>
              </ul>
              <ul className={styles.category}>
                Additional Hooks
                <li>
                  <Link href={"#useReducer"}>useReducer()</Link>
                </li>
                <li>
                  <Link href={"#useCallback"}>useCallback()</Link>
                </li>
                <li>
                  <Link href={"#useMemo"}>useMemo()</Link>
                </li>
                <li>
                  <Link href={"#useRef"}>useRef()</Link>
                </li>
                <li>
                  <Link href={"#useImperativeHandle"}>
                    useImperativeHandle()
                  </Link>
                </li>
                <li>
                  <Link href={"#useLayoutEffect"}>useLayoutEffect()</Link>
                </li>
                <li>
                  <Link href={"#useDebugValue"}>useDebugValue()</Link>
                </li>
              </ul>
            </ul>

            <h2 id="useState">useState()</h2>
            <p>
              I have a counter, the functions are created with basic of
              Javascript, but... always that the on click in some element the
              variable is updated only in console, but not in renderization of
              the page... Well we can use the Hook useState(), this hook will
              alert your browser when it necessary update some variable.
            </p>
            <div className={styles.codes}>
              <code>{`function Contador() {`}</code>
              <code
                className={styles.codeWithIndent}
              >{`const [contador, setContador] = useState(1);`}</code>
              <code
                className={styles.codeWithIndent}
              >{`function adicionarContador() {`}</code>
              <code
                className={styles.codeWithTwoIndent}
              >{`setContador(contador + 1)`}</code>
              <code className={styles.codeWithIndent}>{`}`}</code>
              <code className={styles.codeWithIndent}>{`return (`}</code>
              <code className={styles.codeWithIndent}>{`<div>`}</code>
              <code
                className={styles.codeWithTwoIndent}
              >{`<div>{contador}</div>`}</code>
              <code
                className={styles.codeWithTwoIndent}
              >{`<button onClick={adicionarContador}>Adicionar</button>`}</code>
              <code className={styles.codeWithIndent}>{`</div>`}</code>
              <code className={styles.codeWithIndent}>{`)`}</code>
              <code>{`}`}</code>
            </div>
            <h2>
              Result: <ApplicationUseState />
            </h2>
            <h2 id="useEffect">useEffect()</h2>
            <p>useEffect is...</p>
            <div className={styles.codes}>
              <code>...</code>
              <code className={styles.codeWithIndent}>...</code>
              <code className={styles.codeWithTwoIndent}>...</code>
            </div>
            <h2>
              Result: <ApplicationUseEffect />
            </h2>
            <h2 id="useContext">useContext()</h2>
            <p>useContext is...</p>
            <div className={styles.codes}>
              <code>...</code>
              <code className={styles.codeWithIndent}>...</code>
              <code className={styles.codeWithTwoIndent}>...</code>
            </div>
            <h2>
              Result: <ApplicationUseContext />
            </h2>
            {/* Additional Hooks */}
            <h2 id="useReducer">useReducer()</h2>
            <p>useReducer is...</p>
            <div className={styles.codes}>
              <code>...</code>
              <code className={styles.codeWithIndent}>...</code>
              <code className={styles.codeWithTwoIndent}>...</code>
            </div>
            <h2>
              Result: <ApplicationUseReducer />
            </h2>
            <h2 id="useCallback">useCallback()</h2>
            <p>useCallback is...</p>
            <div className={styles.codes}>
              <code>...</code>
              <code className={styles.codeWithIndent}>...</code>
              <code className={styles.codeWithTwoIndent}>...</code>
            </div>
            <h2>
              Result: <ApplicationUseCallback />
            </h2>
            <h2 id="useMemo">useMemo()</h2>
            <p>useMemo is...</p>
            <div className={styles.codes}>
              <code>...</code>
              <code className={styles.codeWithIndent}>...</code>
              <code className={styles.codeWithTwoIndent}>...</code>
            </div>
            <h2>
              Result: <ApplicationUseMemo />
            </h2>
            <h2 id="useRef">useRef()</h2>
            <p>useRef is...</p>
            <div className={styles.codes}>
              <code>...</code>
              <code className={styles.codeWithIndent}>...</code>
              <code className={styles.codeWithTwoIndent}>...</code>
            </div>
            <h2>
              Result: <ApplicationUseRef />
            </h2>
            <h2 id="useImperativeHandle">useImperativeHandle()</h2>
            <p>useImperativeHandle is...</p>
            <div className={styles.codes}>
              <code>...</code>
              <code className={styles.codeWithIndent}>...</code>
              <code className={styles.codeWithTwoIndent}>...</code>
            </div>
            <h2>
              Result: <ApplicationUseImperativeHandle />
            </h2>
            <h2 id="useLayoutEffect">useLayoutEffect()</h2>
            <p>useLayoutEffect is...</p>
            <div className={styles.codes}>
              <code>...</code>
              <code className={styles.codeWithIndent}>...</code>
              <code className={styles.codeWithTwoIndent}>...</code>
            </div>
            <h2>
              Result: <ApplicationUseLayoutEffect />
            </h2>
            <h2 id="useDebugValue">useDebugValue()</h2>
            <p>useDebugValue is...</p>
            <div className={styles.codes}>
              <code>...</code>
              <code className={styles.codeWithIndent}>...</code>
              <code className={styles.codeWithTwoIndent}>...</code>
            </div>
            <h2>
              Result: <ApplicationUseDebugValue />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;
