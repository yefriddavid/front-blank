import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import NavbarComponent from '../../Elements/Navbar/NavbarComponent'

import './Friendly.css'

export default class Friendly extends Component {
  render() {
    return(
      <div>
       <nav className="navbar navbar-default no-margin">
          <div className="navbar-header fixed-brand">
             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" id="menu-toggle">
              <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
              </button>
             <a className="navbar-brand" href="#"><i className="fa fa-rocket fa-4"></i> Logo Empresa</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav">
                <li className="active">
                   <button className="navbar-toggle collapse in" data-toggle="collapse" id="menu-toggle-2"> <span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                   </button>
                </li>
             </ul>
          </div>
       </nav>
       <div id="wrapper">
         <NavbarComponent />

          <div id="page-content-wrapper">
             <div className="container-fluid xyz">
                <div className="row">
                   <div className="col-lg-12">
                      { this.props.children }
                   </div>
                </div>
             </div>
          </div>

       </div>
     </div>
    )
  }
}

