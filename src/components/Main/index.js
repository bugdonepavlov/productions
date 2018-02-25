import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import List from './List';
import Dish from './Dish';
import Basket from './Basket';
import fetchData from 'ducks/fetch';

class Main extends Component {
	componentDidMount() {
		// this.props.fetchData()
	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={List}></Route>
					<Route path="/basket" component={Basket} />
					<Route exact path="/:type"  component={List}></Route>
					<Route exact path="/item/:id" component={Dish} />
				</Switch>
			</div>
		);
	}
}

export default Main;