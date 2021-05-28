import Link from 'next/link';

import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';


Router.onRouteChangeStart = url => {
    console.log(url);
    NProgress.start();
}

Router.OnRouteChangeComplete = () => NProgress.done();

Router.OnRouteChangeError = () => NProgress.done();


export default ({ children, title }) => (
  <div className="root">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <div className="container">
      <nav>
          {backButton && <span onClick={() => Router.back()} className="back-button">&#x2b05;</span>}
        <Link href="/">
          <a>Home </a>
        </Link>
        <Link href="/about">
          <a>About </a>
        </Link>
        <Link href="/hireme">
          <a>HireMe </a>
        </Link>{" "}
        <Link href="/blog">
          <a>blog </a>
        </Link>
        <Link href="/hackerNews">
          <a>hackerNews </a>
        </Link>
      </nav>
    </div>

    <h1>{title}</h1>
    {children}

    <footer>&copy; {new Date().getFullYear()} Footer</footer>
    <style jsx>{`
      .container{
        max-width: 800px;
        margin : 0 auto;
        background: #f6f6ef;
      }
      nav{
        background: #f60;
        padding : 1em;
      }
      nav > * {
        display: inline-block;
        color: black;
      }
      nav a {
        text-decoration : none;
      }
      nav .main-title{
        font-weight: bold;
      }
      nav .back-button {
        font-wight: 600;
        cursor : pointer;
      }      
    `}</style>
       {
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   flex-direction: column;
      // }
      // header {
      //   width: 100%;
      //   display: flex;
      //   justify-content: space-around;
      //   padding: 1em;
      //   font-size: 1.2rem;
      //   background: indigo;
      // }

      // header a {
      //   color: darkgray;
      //   text-decoration: none;
      // }
      // header a:hover {
      //   font-wight: bold;
      //   color: lightgrey;
      // }
      // footer {
      //   padding: 1em;
       }
    <style global jsx>
      {`
        body {
          margin: 0;
          font-size: 110%;
          background: #f0f0f0;
        }
      `}
    </style>
  </div>
);

