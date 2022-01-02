import Document, { Html, Head, Main, NextScript } from "next/document";

export default class myDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;600&display=swap"
              rel="stylesheet"
            />
            <title>ContextAPI</title>
          </head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
