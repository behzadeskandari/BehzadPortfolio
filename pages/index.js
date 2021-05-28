import Link from "next/link";
import { Component } from "react";
import Layout from "../components/Layout";


 class Index extends Component {
static async getInitialProps({req,res,query}){
  let stories;
  let page;
  try{
      page = Number(query.page) || 1; 
      const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);

      stories = await response.json();

  }catch(err){
    console.log(err);
    stories = [];
  }

  return {page, stories};
}

componentDidMount() {
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
render(){
   const {stories , page }= this.props;

   if(stories.length === 0){
     return <Error statusCode={503} />
   }

   return(
    <Layout title="Home" description>
      <p>Welcome To the Home Page</p>
      <Link href="/about">
        <a>Go To About Page </a>
      </Link>
      
    </Layout>
   )
}

// componentDidMount(){
//   if("serviceWorker" in navigator){
//     navigator.serviceWorker
//     .register("/service-worker.js")
//     .then(registration => {
//       console.log("Service Worker Register Successfull",registration);
//     }) .catch(err => {
//       console.warn("Service worker registeration failed",err.message);
//     })
//   }
// }


// render()
//   {
//     return(
    


//     // <Layout title="Home" description>
//     //   <p>Welcome To the Home Page</p>
//     //   <Link href="/about">
//     //     <a>Go To About Page </a>
//     //   </Link>
      
//     // </Layout>
//     )
//   }
// };



//export default Index;



///on difrent port use -p on dev -p 4000     npm run dev       "dev": "next"


///npm run build
//npm start  for starting node js 