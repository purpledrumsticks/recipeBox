import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'react-bootstrap'

class AddRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false })
  }

  open() {
    this.setState({ showModal: true })
    console.log(this.state.showModal)
  }

  render() {
    return (
      <div>
        <button onClick={this.open}>Edit Recipes</button>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Recipe Box</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Stuff in here
          </Modal.Body>
          <Modal.Footer>
            <button>Close</button>
            <button>Save Changes</button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )

  }
}

export default AddRecipe
