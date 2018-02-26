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
		this.props.removeItem(index);
	}

	getTotal() {
		const calculated = this.props.basket.reduce((a, b) => {
			const price = a.get ? a.get('price') : a;
			return price + b.get('price');
		}, 0);
		return calculated && calculated.toFixed && calculated.toFixed(2);
	}

	renderInfo() {
		return (
			<React.Fragment>
				<ul className="list-group mb-4">
					{!!this.props.basket && this.props.basket.map((item) => (
						<li className="list-group-item" key={item.get('id') + Math.random(2) + Date.now()}>
							<div className="row align-items-center">
								<div className="col-auto">
									<h4>{item.get('title')} {item.get('price')}$</h4>
								</div>
								<div className="col-auto">
									<button
										className="btn btn-danger"
										onClick={(e) => {
											this.removeItem(e, item)
										}}>Remove</button>
								</div>
							</div>
						</li>
					))}
					<li className="list-group-item strong">Total: <b>{this.getTotal()}$</b></li>
				</ul>
				{!this.state.formIsOpen
					? <button
						className="btn btn-success"
						onClick={() => {
							this.setState({ formIsOpen: true })
						}}>Continue Shopping</button>
					: <Form clear={this.props.clear}></Form>}
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