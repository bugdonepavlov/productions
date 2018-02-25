import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import * as basketActions from 'ducks/basket';

class List extends Component {
	findTypeTitle(typeId) {
		return this.props.category.find((type) => type.get('title').toLowerCase() === typeId).get('id');
	}

	render() {
		return (
			<div>
				<ul>
					{this.props.dishes.filter(item => (
						!!this.props.match.params.type
							? item.get('type') === this.findTypeTitle(this.props.match.params.type)
							: item
					)).map(item => (
						<Item
							addBasketItems={this.props.addBasketItems}
							key={item.get('id')}
							dish={item}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default connect((state) => ({
	dishes: state.dishes,
	category: state.category,
}), { ...basketActions })(List);