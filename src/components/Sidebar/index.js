import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Sidebar = ({
	category,
}) => (<nav className="nav nav-pills flex-column">
		<h4 className="mb-4">Categories</h4>
		<NavLink
			key="all"
			className="nav-link"
			to='/'
			activeClassName="active"
			exact
		>All</NavLink>
		{category.map(item => (
			<NavLink
				key={item.get('id')}
				to={`/${item.get('title').toLowerCase()}`}
				href={`/${item.get('title').toLowerCase()}`}
				className="nav-link"
				activeClassName="active"
				exact
			>{item.get('title')}</NavLink>
		))}
</nav>);

export default connect((state) => ({
	category: state.fetch.get('data').get('category'),
}), null, null, {pure: false})(Sidebar);