import Footer from "../components/Footer"
import Header from "../components/Header"
import { NomeProvider } from "../context/NomeContext"
import '../styles/globals.scss'
import React, {useRef, useLayoutEffect} from 'react'

function App({ Component, pageProps }) {

    return (
        <>
        <NomeProvider>
            <div className="container">
                <header>
                    <Header />
                </header>
                <main>
                    <Component {...pageProps} />
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </NomeProvider>
        </>
    )
}

export default App