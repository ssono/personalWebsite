import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Gallery from'./Gallery';
import Trip from './Trip'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Route exact path="/" component={App}/>
    <Route exact path="/gallery" component={Gallery}/>
    <Route exact path="/gallery/:tripId" component={Trip}/>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
