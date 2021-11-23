import React, { Component } from 'react';
import { Button } from 'antd';
import reduxSaga from 'redux-saga';

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
                <Button type="primary">Hello !</Button>
            </div>
        )
    }
} 

export default ArticlesHomePage;