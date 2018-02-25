import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
	render() {
		return (
			<div className="row justify-content-between">
				<div className="col-auto">
					{/* <div className="avatar" style={{ backgroundImage: `url(${props.data.get('picture')})` }}></div> */}
				</div>
				<div className="col-auto">
					<div className="lead">
						<Link to={`/item/${this.props.dish.get('id')}`}>{this.props.dish.get('title')}</Link>
					</div>
				</div>
				<div className="col-auto">
					<button className="btn" onClick={(e) => this.props.addBasketItems(this.props.dish)}>Buy</button>
				</div>
			</div>
		);
	}
}

export default Item;