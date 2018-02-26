import React, { Component } from 'react';
import {connect} from 'react-redux';
import Modal from '../Modal';
import { addItems } from 'ducks/basket';

/* eslint-disable */
class ModalContent extends Component {
  render() {
    return (
      <Modal close={this.props.hideModal}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button className="close" onClick={this.props.hideModal}>
                <span>&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <ul className="Extras">
                <li className="extras-title">Available extras:</li>
                {this.props.dish.get('extras').map((id) => {
                  const extras = this.props.extras.find((extra) => extra.get('id') === id);
                    return extras ? (
                      <li key={id}>
                        <span>{extras.get('title')}</span>
                        <span> ({extras.get('price')}$) </span>
                        <span
                          className="btn"
                          onClick={(e) => this.props.addItems(extras)}
                        > Add </span>
                      </li>
                    ) : null
                  })}
              </ul>
            </div>

            <div className="modal-footer">
              <button className="btn btn-success" onClick={this.props.hideModal}>Add and Buy</button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}


export default connect((state) => ({
  extras: state.fetch.get('data').get('extras'),
}), { addItems })(ModalContent);
