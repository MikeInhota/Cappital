import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './view/login/Login';
import Register from './view/register/Register';
import Main from './view/main/Main';
import About from './view/about/About';
import E404 from './view/e404/E404';
import Forms from './view/EditUser/Form.jsx';
import example from './view/meta/Meta.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/landingpage" exact={true} component={App} />
            <Route path="/" exact={true} component={Login} />
            <Route path="/register" exact={true} component={Register} />
            <Route path="/EditUser" component={Forms}/>
            <Route path="/Meta" component={example}/>
            <Route path="/main" exact={true} component={Main} />
            <Route path="/about" component={About} />
            <Route path="teste" component={E404} />
            <Route path="*" component={E404} />
        
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
// registerServiceWorker();
