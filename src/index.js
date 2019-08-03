import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Container from '@material-ui/core/Container';
import TopNavBar from './components/TopNavbar';
import ListView from './components/List.js';
import CreateNew from './components/New.js';

// https://api.myjson.com/bins/goa4t
// 


const routing = (
	<Router>
		<div>
			<TopNavBar></TopNavBar>
			<Container maxWidth="xl">
				<Route exact path="/" component={Home}></Route>
				<Route path="/list" component={ListView}></Route>
				<Route path="/new" component={CreateNew}></Route>
			</Container>
		</div>
	</Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

