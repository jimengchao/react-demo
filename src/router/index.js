import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Home from 'bundle-loader?lazy&name=index!@/pages/index'
import Page1 from 'bundle-loader?lazy&name=page1!@/pages/page1'
import Counter from 'bundle-loader?lazy&name=counter!@/pages/counter'
import UserInfo from 'bundle-loader?lazy&name=user-info!@/pages/user-info'
import Bundle from './Bundle'
const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => {
    return (
        <Bundle load={component}>
            {
                (Component) => Component ? <Component {...props} /> : <Loading/>
            }
        </Bundle>
    )
}

function getRouter () {
    return  <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">首页1</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/counter">counter</Link></li>
                    <li><Link to="/userinfo">UserInfo</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={createComponent(Home)} />
                    <Route path="/page1" component={createComponent(Page1)}/>
                    <Route path="/counter" component={createComponent(Counter)}/>
                    <Route path="/userinfo" component={createComponent(UserInfo)}/>
                </Switch>
            </div>
        </BrowserRouter>
} 


export default getRouter