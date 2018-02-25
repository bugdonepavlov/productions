import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as basketActions from 'ducks/basket';
import Form from './Form';

class Basket extends Component {
	state = {
		formIsOpen: false,
	}

	removeItem = (e, item) => {
		const index = this.props.basket.findIndex((bItem) => bItem.equals(item));
		this.props.removeBasketItem(index);
	}

	getItemType(item) {
		if (item.get('picture')) return 'dish';
		if (item.get('price')) return 'extras';
		return 'type';
	}
	calculateTotal() {
		// const total = this.props.basket.map()
		const calculated = this.props.basket.reduce((a, b) => {
			// Duck typing
			const price = a.get ? a.get('price') : a;
			return price + b.get('price');
		}, 0);
		return calculated && calculated.toFixed && calculated.toFixed(2);
	}

	renderInfo() {
		return (
			<React.Fragment>
				<ul className="items">
					{!!this.props.basket && this.props.basket.map((item) => (
						<li className="item" key={item.get('id') + Math.random(2) + Date.now()}>
							<div className="title">{item.get('title')}</div>
							<button className="remove" onClick={(e) => { this.removeItem(e, item) }}>Remove</button>
						</li>
					))}
					<li className="total">Total: <b>{this.calculateTotal()}$</b></li>
				</ul>
				{!this.state.formIsOpen
				? <div className="continue" onClick={() => this.setState({ formIsOpen: true })}>Continue</div>
				: <Form clearBasket={this.props.clearBasket}></Form>}
			</React.Fragment>
		)
	}

	render() {
		return (
			<div>
				{this.props.basket.size
					? this.renderInfo()
					: <div className="empty-msg">Basket Empty</div>}
			</div>
		);
	}
}

export default connect((state) => ({
	basket: state.basket,
}), {...basketActions})(Basket);