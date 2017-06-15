import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Form, FormGroup, FormControl, Button } from 'react-bootstrap'

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
        {!this.state.edit ? <Button onClick={this.open}>Edit Recipes</Button> : null}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Recipe Box</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Add New Recipe"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
          <Button>Save Changes</Button>
          <Button onClick={this.close}>Close</Button>
        </Modal>
      </div>
    )
  }
}

export default AddRecipe
