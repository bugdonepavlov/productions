import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Basket = ({
	basket,
}) => (<div>
	{basket.size
		? (<Link
				to="/basket"
				className="btn btn-success"
			>Cart items: {basket.size}</Link>)

		: <span className="navbar-text">Basket is empty</span>}
</div>);

export default connect((state) => ({
	basket: state.basket,
}), null)(Basket);