import React, { Component } from 'react';

import './SelectCmp.css';

const SelectCmp = props => {
    return (
        <select onChange={ props.onChange } className="SelectBox__select">
          <option value= "">Seleccionar...</option>
          {props.campaigns.map(row =>
            <option key = { row.id } value={ row.id }>{ row.name }</option>
          )}
        </select>
    )

}

export default SelectCmp;
