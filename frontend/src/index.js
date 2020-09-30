import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Components/login/Login';
import Register from './Components/register/Register';
import Main from './Components/main/Main';
import About from './Components/about/About';
import E404 from './Components/e404/E404';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/landingpage" exact={true} component={App} />
            <Route path="/" exact={true} component={Login} />
            <Route path="/register" exact={true} component={Register} />
            <Route path="/main" exact={true} component={Main} />
            <Route path="/about" component={About} />
            <Route path="*" component={E404} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
// registerServiceWorker();
