import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './ButtonCmp.css';

//const ButtonCmp = props => {
class ButtonCmp extends Component {
  onClick(){
    this.props.onClick()
  }
  render (){
    return (
      <button className="ButtonCmp" onClick = { this.onClick.bind(this) } disabled={ this.props.disabled } style={this.props.style}>
        { this.props.title }
      </button>
    )
  }
}

export default ButtonCmp;
