import React, { Component } from 'react'
//import { bindActionCreators } from 'redux'
//import * as asteriskActions from '../../actions/asterisk'
import { connect } from 'react-redux'
//import ModalPausa from '../../components/Elements/ModalPausa/ModalPausa'
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import MicroIcon from 'react-microvoz-icons';
import { NavLink } from 'react-router-dom'


class ModalPauseContainer extends Component {

  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick(e){
    //alert("ssss")
  }
  render() {
    return (
      <Popover id="popover-positioned-bottom" className="PopOverMenu">
        <ul className="PopOverMenu__list">
          <li className="PopOverMenu__list__item">
            <a href="#" onClick={ this.onClick } className="PopOverMenu__list__link">
              <MicroIcon icon={"break"} color={"#fff"}/>
              <p className="PopOverMenu__list__text">Break</p>
            </a>
          </li>
          <li className="PopOverMenu__list__item">
            <NavLink to='/y/pause/2' className="PopOverMenu__list__link">
              <MicroIcon icon={"lunch"} color={"#fff"}/>
              <p className="PopOverMenu__list__text">Lunch</p>
            </NavLink>
          </li>
          <li className="PopOverMenu__list__item">
            <a href="#" className="PopOverMenu__list__link">
              <MicroIcon icon={"study"} color={"#fff"}/>
              <p className="PopOverMenu__list__text">Capacitación</p>
            </a>
          </li>
          <li className="PopOverMenu__list__item">
            <a href="#" className="PopOverMenu__list__link">
              <MicroIcon icon={"meeting"} color={"#fff"}/>
              <p className="PopOverMenu__list__text">Reunión</p>
            </a>
          </li>
          <li className="PopOverMenu__list__item">
            <a href="#" className="PopOverMenu__list__link">
              <MicroIcon icon={"toilette"} color={"#fff"}/>
              <p className="PopOverMenu__list__text">Toilette</p>
            </a>
          </li>
          <li className="PopOverMenu__list__item">
            <a href="#" className="PopOverMenu__list__link">
              <MicroIcon icon={"mechanic"} color={"#fff"}/>
              <p className="PopOverMenu__list__text">Falla técnica</p>
            </a>
          </li>
        </ul>
      </Popover>
    )
  }
}



const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      //auth: bindActionCreators(authActions, dispatch),
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalPauseContainer)

