import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="apple-mobile-web-app-capable" content="yes" />

          <meta name="application-name" content="hacker-next" />

          <meta name="apple-moblie-web-app-title" content="hacker-next" />
          <meta name="theme-color" content="#f60" />
          <meta name="msapplication-navbutton-color" content="#f60" />
          <meta
            name="apple-moblie-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/"  />
          <meta
            name="description"
            content="a site for my programming Protfolio"
          />
          <meta name="utf-8" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto"/>
            
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>
          {`
            body {
              font-family: "Roboto", sans-serif;
            }
          `}
        </style>
      </Html>
    );
  }
}
