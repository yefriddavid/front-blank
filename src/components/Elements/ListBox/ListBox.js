import React, { Component } from 'react';
//import MicroIcon from 'react-microvoz-icons';

import './ListBox.css'

const ListBox = props => {
  return (
    <ul className="ListBox">
      {props.children}
    </ul>
  )
};

export const BodyItem = props => {
  return (
    <li className="ListBox__BodyItem">
      {props.children}
    </li>
  )
}


export const BasicItem = props => {
  return (
    <li className="ListBox__BasicItem">
      {props.children}
    </li>
  )
}

export default ListBox
