import React, { Component } from 'react'
import './Guest.css'

export default class Guest extends Component {
  render() {
    return(
      <div className="Guest">
        {this.props.children}
      </div>
    )
  }
}

