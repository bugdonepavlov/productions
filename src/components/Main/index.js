import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from './List';
import Basket from './Basket';

const Main = () => (
	<div>
		<Switch>
			<Route exact path="/" component={List}></Route>
			<Route path="/basket" component={Basket} />
			<Route path="/:type"  component={List}></Route>
		</Switch>
	</div>);

export default Main;