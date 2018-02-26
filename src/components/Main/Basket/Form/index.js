import React, { Component } from 'react';

class Form extends Component {
	state = {
		email: '',
		name: '',
		emailError: '',
		nameError: ''
	}

	componentDidMount() {
		this.validateEmail(this.state.email);
		this.validateName(this.state.name);
	}

	handleChangeName = (e) => {
		const target = e.target;
		const name = target.name;
		this.validateName(target.value)
		this.setState({
			[name]: target.value
		});
	}

	handleChangeEmail = (e) => {
		const target = e.target;
		const name = target.name;
		this.validateEmail(target.value)
		this.setState({
			[name]: target.value
		});
	}

	handleSubmit = (e) => {
		this.setState({ email: '', name: '', emailError: '', nameError: '' });
		this.props.clear();
		e.preventDefault();
	}

	validateEmail(value) {
		this.emailRegexp = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/;

		if (!value) return this.setState({ emailError: 'Email cannot be empty' });
		if (!this.emailRegexp.test(value)) return this.setState({ emailError: 'Email is not correct.' });
		this.setState({ emailError: '' });
	}

	validateName(value) {
		if (!value) return this.setState({ nameError: 'Name cannot be empty' });
		this.setState({ nameError: '' });
	}

	render() {
		return (<form onSubmit={this.handleSubmit}>
			<h4>Log in</h4>
			<div className="form-group">
				<label>Full name:</label>
				<input
					name="name"
					type="text"
					value={this.state.name}
					onChange={this.handleChangeName}
					placeholder="Enter your name"
					className="form-control"
				/>
				{!!this.state.nameError && (<div className="alert alert-danger">{this.state.nameError}</div>)}
			</div>
			<div className="form-group">
				<label>E-mail</label>
				<input
					name="email"
					type="email"
					value={this.state.email}
					onChange={this.handleChangeEmail}
					placeholder="Enter your email"
					className="form-control"
				/>
				{!!this.state.emailError && (<div className="alert alert-danger">{this.state.emailError}</div>)}
			</div>
			<button
				className="btn btn-primary"
				disabled={this.state.emailError || this.state.nameError}
				type="submit"
			>Submit</button>
		</form>);
	}
}

export default Form;