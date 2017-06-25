import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Accordion, Panel } from 'react-bootstrap'

class Recipes extends React.Component {
  constructor(...args) {
    super(...args)

    this.state = {}
    this.open = this.open.bind(this)
  }

  open() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div className="recipeBox">
      <Accordion className="accordion">
        <Panel header="Collapsible Group Item #1" eventKey="1">
          Stuff in herre
        </Panel>
        <Panel header="Collapsible Group Item #2" eventKey="2">
          Stuff in herre
        </Panel>
        <Panel header="Collapsible Group Item #3" eventKey="3">
          Stuff in herre
        </Panel>
      </Accordion>
      </div>
    )
  }
}

export default Recipes
