import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap'

class AddRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      edit: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false, edit: false })
  }

  open() {
    this.setState({ showModal: true, edit: true })
  }

  render() {
    return (
      <div>
        {!this.state.edit ? <button onClick={this.open}>Edit Recipes</button> : null}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Recipe Box</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            //Forms
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
          <button>Save Changes</button>
          <button onClick={this.close}>Close</button>
        </Modal>
      </div>
    )
  }
}

export default AddRecipe
