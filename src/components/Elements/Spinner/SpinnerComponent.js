import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'

import './Spinner.css'


class Navbar extends Component {
  render() {
    return (
      <div class="spinner-container">
        <div class="spinner"></div>
      </div>
    )
  }
}

export default Navbar
