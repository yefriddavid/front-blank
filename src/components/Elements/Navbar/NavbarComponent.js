import React, { Component } from 'react'
import {
  NavLink
} from 'react-router-dom'

import './Navbar.css'


class Navbar extends Component {
  render() {
    //const { username, password } = this.state || { username: "", password: "" }

    return (
        <div id="sidebar-wrapper">
           <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
              <li className="active">
                <NavLink to="/app/home"><span className="fa-stack fa-lg pull-left"><i className="fa fa-dashboard fa-stack-1x "></i></span> Dashboard</NavLink>
                   <ul className="nav-pills nav-stacked" style={{"listStyleType":"none"}}>
                     <li><NavLink to="/app/users">Usuarios</NavLink></li>
                     <li><NavLink to="/app/profiles">Perfiles</NavLink></li>
                 </ul>
              </li>
              <li>
                 <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-flag fa-stack-1x "></i></span>Shortcut</a>
                 <ul className="nav-pills nav-stacked" style={{"listStyleType":"none"}}>
                    <li><a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-flag fa-stack-1x "></i></span>link1</a></li>
                    <li><a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-flag fa-stack-1x "></i></span>link2</a></li>
                 </ul>
              </li>
              <li>
                <a href="#">
                  <span className="fa-stack fa-lg pull-left"><i className="fa fa-cloud-download fa-stack-1x "></i></span>Overview
                </a>
              </li>
              <li>
                 <a href="#"> <span className="fa-stack fa-lg pull-left"><i className="fa fa-cart-plus fa-stack-1x "></i></span>Events</a>
              </li>
              <li>
                 <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-youtube-play fa-stack-1x "></i></span>About</a>
              </li>
              <li>
                 <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-wrench fa-stack-1x "></i></span>Services</a>
              </li>
              <li>
                 <a href="#"><span className="fa-stack fa-lg pull-left"><i className="fa fa-server fa-stack-1x "></i></span>Contact</a>
              </li>
           </ul>
        </div>
    )
  }
}

export default Navbar
