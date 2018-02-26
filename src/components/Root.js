import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import Loader from './Loader';
import {fetchData} from 'ducks/fetch';

class Root extends Component {
	componentDidMount() {
		this.props.fetchData()
	}

	render() {
		return (
			<div className="wrapper">
				{this.props.loading && <Loader/>}
				<Header></Header>
				<div className="container">
					<div className="row">
					<div className="col-md-2">
						<Sidebar></Sidebar>
					</div>
					<div className="col-md-10">
						<Main />
					</div>
					</div>
				</div>
			</div>);
	}
}

export default connect((state) => ({
	loading: state.fetch.get('loading'),
}), { fetchData }, null, {pure: false})(Root);
