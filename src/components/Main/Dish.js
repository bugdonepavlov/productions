import React, { Component } from 'react';

class Dish extends Component {
	render() {
		return (
			<div>
				{this.props.match.params.id}
			</div>
		);
	}
}

export default Dish;