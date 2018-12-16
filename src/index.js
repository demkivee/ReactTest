import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import MyComponent from './MyComponent'
import SecondComp from './SecondComp'
import ThirdComp from './ThirdComp'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/first">First Task</Link>
                </li>
                <li>
                    <Link to="/second">Second Task</Link>
                </li>
                <li>
                    <Link to="/third">Third Task</Link>
                </li>
            </ul>
            <Route exact path="/" component={App} />
            <Route path="/first" component={MyComponent} />
            <Route path="/second" component={SecondComp} />
            <Route path="/third" component={ThirdComp} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
