import React, { Component } from 'react';
import MicroIcon from 'react-microvoz-icons';

import './UserBox.css';

const UserBox = props => {
  console.log(props)
  return (
    <div className="UserBox">
      <MicroIcon icon={"agent"} color={"#B3B3B3"} size={"22px"}/>
      <div className="UserBox__info">
        { props.withError ?
          <p className="UserBox__username-label">Usuario</p>
          :
          <p className="UserBox__username-label">Usuario <span className="UserBox__username">{props.data.full_name}</span></p>
        }
      </div>
      <div className="UserBox__status">
        { props.withError ?
          <div className="UserBox__status__errors">
            <div>
              <p className="UserBox__number UserBox__number--error">INT 122</p>
              <p className="UserBox__error">ERROR CON CENTRAL TELEFÓNICA</p>
            </div>
            <MicroIcon icon={"warning"} color={"#F4764E"} size={"28px"}/>
          </div>
        :
          <div className="UserBox__status__ok">
            <p className="UserBox__number">INT {props.data.exten}</p>
          </div>
        }
      </div>
    </div>
  )
};

export default UserBox;
