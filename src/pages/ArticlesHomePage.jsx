import React, { Component } from 'react';
import ArticlesList from '../components/ArticlesList';

// ui controller
// view controller
// container
// ui - logic
// side efects : appel http, routage
class ArticlesHomePage extends Component{
    componentDidMount() {
        
    }

    render() {

        return(
            <div>
               <ArticlesList title="Hello !" />
            </div>
        )
    }
} 

export default ArticlesHomePage;