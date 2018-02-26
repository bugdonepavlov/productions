import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { addItems } from 'ducks/basket';

class List extends Component {

	findTypeTitle(typeId) {
		return this.props.category.find((type) => type.get('title').toLowerCase() === typeId).get('id');
	}

	render() {
		return (
			<div className="row">
				{this.props.dishes.filter(item => (
					!!this.props.match.params.type
						? item.get('type') === this.findTypeTitle(this.props.match.params.type)
						: item
				)).map(item => (
					<Item
						addItems={this.props.addItems}
						key={item.get('id')}
						dish={item}
					/>
				))}
			</div>
		);
	}
}

export default connect((state) => ({
	dishes: state.fetch.get('data').get('dishes'),
	category: state.fetch.get('data').get('category'),
}), { addItems })(List);