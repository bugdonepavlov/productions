import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { categoryType } from 'ducks/category';

class Sidebar extends Component {
	render() {

		console.log(this.props)
		return (
			<nav className="nav flex-column">
				<h4>Categories</h4>
				<NavLink
					key="all"
					className="nav-link"
					to='/'
					activeClassName="active"
					exact
				>All</NavLink>
				{this.props.category.map(item => (
					<NavLink
						key={item.get('id')}
						to={`/${item.get('title').toLowerCase()}`}
						href={`/${item.get('title').toLowerCase()}`}
						className="nav-link"
						activeClassName="active"
						exact
					>{item.get('title')}</NavLink>
				))}
			</nav>
		);
	}
}

export default connect((state) => ({
	category: state.category,
}), {categoryType})(Sidebar);