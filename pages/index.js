import Link from "next/link";
import { Component } from "react";
import Layout from "../components/Layout";


 class Index extends Component {

componentDidMount(){
  if("serviceWorker" in navigator){
    navigator.serviceWorker
    .register("/service-worker.js")
    .then(registration => {
      console.log("Service Worker Register Successfull",registration);
    }) .catch(err => {
      console.warn("Service worker registeration failed",err.message);
    })
  }
}


render()
  {
    return(<Layout title="Home">
      <p>Welcome To the Home Page</p>
      <Link href="/about">
        <a>Go To About Page </a>
      </Link>
    </Layout>)
  }
};



export default Index;



///on difrent port use -p on dev -p 4000     npm run dev       "dev": "next"


///npm run build
///npm start  for starting node js 