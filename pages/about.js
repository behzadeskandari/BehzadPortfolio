import Link from 'next/link';
import Layout from '../components/Layout';
import Image from "next/image";
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';




export default class About extends Component {

// state ={
//   user : null
// };

static async getInitialProps(){
    const res = await fetch("https://api.github.com/users/behzadeskandari");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    // .then(res => res.json())
    // .then(data => {
    //   // this.setState({
    //   //   user : data
    //   // })
    //   console.log(data);
    // });

    return { user: data, statusCode };
}
  // componentDidMount(){

  // }


 render(){
   const { user, statusCode } = this.props;

if(statusCode){
  return <Error statusCode={statusCode}/>
}

 return(
 <Layout title="about">
   {/* {JSON.stringify(this.props.user)} */}

 <p>{user.name}</p>
    <Link href="/">
      <a>Go To Home </a>
    </Link>
    <img
      src={user.avatar_url}
      alt="avatar"
      height="400px"
      width="400"
    />
  </Layout>
 )
 }

};
  // About.getInitialProps = () => {};

