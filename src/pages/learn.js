import Link from "next/link";
import { useState } from "react";
import styles from "../styles/learn.module.scss";

function Learn() {

    function ConvertToLowerCase(props) {
        const textoInserido = props.children
        const result = textoInserido.toLowerCase()

        return result
    }

    function Contador() {

        // par componente tem memoria
        const [contador, setContador] = useState(1);

        function adicionarContador() {
            setContador(contador + 1)
        }

        return (
            <div className={styles.contador}>
                <div>{contador}</div>
                <button onClick={adicionarContador}>Adicionar</button>
            </div>
        )
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.hooksColumns}>
                        <h1>React</h1>
                        <p>
                            <ConvertToLowerCase>
                                All things in react are components. Components are Javascript functions and react can be a good idea for big and medium projects.
                                This paragraph, for example, had all letters converted for lowercase through a component created for this function.
                            </ConvertToLowerCase>
                            <br />
                            <div className={styles.codes}>
                                <code>{`function ConvertToLowerCase(props) {`}</code>
                                <code className={styles.codeWithIndent}>{`const textoInserido = props.children`}</code>
                                <code className={styles.codeWithIndent}>{`const result = textoInserido.toLowerCase()`}</code>
                                <code className={styles.codeWithIndent}>{`return result`}</code>
                                <code>{`}`}</code>
                                <code>{`<ConvertToLowerCase> THIS TEXT WILL BE CONVERTED FOR TO THE LOWER CASE </ConvertToLowerCase>`}</code>
                            </div>
                        </p>
                        <h1>
                            Hooks
                        </h1>
                        <p>
                            useState is a Hook, I don&apos;t know explained what is it especifically, but this can be help you while your application need of memoria. Hooks are identified by the word: &apos;use&apos; before the rest.
                            Exists two types of Hooks classified by oficial documentation of react:
                        </p>
                        <ul>
                            <li className={styles.category}>
                                Basic Hooks
                                <li>
                                    <Link href={'#useState'}>
                                        useState()
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#useEffect'}>
                                        useEffect()
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#useContext'}>
                                        useContext()
                                    </Link>
                                </li>
                            </li>
                            <li className={styles.category}>
                                Additional Hooks
                                <li>
                                    <Link href={'#useReducer'}>
                                        useReducer()
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#useCallback'}>
                                        useCallback()
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#useMemo'}>
                                        useMemo()
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#useRef'}>
                                        useRef()
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#useEmperativeHandle'}>
                                        useEmperativeHandle()
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#useLayoutEffect'}>
                                        useLayoutEffect()
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#useDebugValue'}>
                                        useDebugValue()
                                    </Link>
                                </li>
                            </li>
                        </ul>

                        <h2 id="useState">
                            useState()
                        </h2>
                        <p>
                            I have a counter, the functions are created with basic of Javascript, but... always that the on click in some element the variable is updated only in console, but not in renderization of the page... Well we can use the Hook useState(), this hook will alert your browser when it necessary update some variable.
                        </p>
                        <p>
                            <div className={styles.codes}>
                                <code>{`function Contador() {`}</code>
                                <code className={styles.codeWithIndent}>{`const [contador, setContador] = useState(1);`}</code>
                                <code className={styles.codeWithIndent}>{`function adicionarContador() {`}</code>
                                <code className={styles.codeWithTwoIndent}>{`setContador(contador + 1)`}</code>
                                <code className={styles.codeWithIndent}>{`}`}</code>
                                <code className={styles.codeWithIndent}>{`return (`}</code>
                                <code className={styles.codeWithIndent}>{`<div>`}</code>
                                <code className={styles.codeWithTwoIndent}>{`<div>{contador}</div>`}</code>
                                <code className={styles.codeWithTwoIndent}>{`<button onClick={adicionarContador}>Adicionar</button>`}</code>
                                <code className={styles.codeWithIndent}>{`</div>`}</code>
                                <code className={styles.codeWithIndent}>{`)`}</code>
                                <code>{`}`}</code>
                            </div>
                        </p>
                        <h2>
                            Result: <Contador />
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Learn;
