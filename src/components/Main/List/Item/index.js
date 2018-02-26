import React, { Component } from 'react';
import ModalContent from 'components/common/ModalContent';

class Item extends Component {
	state = {
		showModal: false,
	}

	addBasketAndShowModal = () => {
		this.props.addItems(this.props.dish);
		this.setState({ showModal: true });
	}

	showModal = () => {
		this.setState({ showModal: true });
	}

	hideModal = () => {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<div className="col-4">
				<div className="card mb-4">
					<div className="avatar" style={{ backgroundImage: `url(${this.props.dish.get('picture')})` }}></div>
					<div className="card-block">
						<h4 className="card-title">{this.props.dish.get('title')}</h4>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						{this.props.dish.get('extras') && this.props.dish.get('extras').size
							? (
								<React.Fragment>
									<button
										className="btn btn-dark"
										onClick={this.addBasketAndShowModal}
									>Buy</button>

									{this.state.showModal && (<ModalContent
										title={this.props.dish.get('title')}
										show={this.state.showModal}
										showModal={this.showModal}
										hideModal={this.hideModal}
										dish={this.props.dish}
									/>)}
								</React.Fragment>)
							: <button
								className="btn btn-primary"
								onClick={(e) =>
									this.props.addItems(this.props.dish)
								}>Buy</button>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default Item;