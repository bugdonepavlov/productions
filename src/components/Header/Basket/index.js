import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Basket = (props) => (
	<div>
		{props.basket.size
			? (<Link to="/basket">
					Cart items: {props.basket.size}
				</Link>)
			: <span>Basket is empty</span>}
	</div>);

export default connect((state) => ({
	basket: state.basket,
}), null)(Basket);