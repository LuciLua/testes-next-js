import Footer from "../components/Footer"
import Header from "../components/Header"
import '../styles/globals.scss'

function App({ Component, pageProps }) {
    return (
        <>
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
        </>
    )
}

export default App