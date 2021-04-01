 import Layout from '../components/Layout';
 import Link from 'next/link';


const PostLink = ({slug, title}) => (
    <li>    
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
                <a>{title}</a>
        </Link>
    
    </li>
)


 export default () => (
   <Layout title="My Blog">
     <ul>
       <li>
         <PostLink title="react" />
         <PostLink title="angular" />
         <PostLink title="vue" />
       </li>
     </ul>
   </Layout>
 );




