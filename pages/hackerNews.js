import fetch from 'isomorphic-unfetch';
import {Component} from 'react';
import StoryList from "../components/StoryList";
export default class HackerNews extends Component {

static async getInitialProps({req,res,query}){
    let stories;
    let page;

    try{
    
    page = Number(query.page) || 1;

    const response = await fetch("https://node-hnapi.herokuapp.com/news?page=1")
    stories = await response.json();
    }
    catch(err)
    {
    console.log(err);
    stories = [];
    }

    return {stories};
}

    render(){
            
        
        const {stories} = this.props;
        if(stories.length === 0)
        {
            return <Error statusCode={503}/>
        }
        return (
          <div>
            <h1>hacker next</h1>
            <StoryList stories={stories} />
            <div>
                <Link href={`/?page=${page + 1}`}>
                    
                </Link>
            </div>
          </div>
        );
    }
}

