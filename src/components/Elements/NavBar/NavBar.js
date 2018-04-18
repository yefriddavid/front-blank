import React, { Component } from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import MicroIcon from 'react-microvoz-icons';
import microvozLogo from '../../../img/logo-microvoz.png';
import toolbarLogo from '../../../img/logo-toolbar.png';
import ModalPausa from '../../../containers/Modules/ModalPauseContainer';

import './NavBar.css';

const popoverBottom = (
  <ModalPausa />
)
const popoverBottomA = () => (
  <Popover id="popover-positioned-bottom" className="PopOverMenu">
    <ul className="PopOverMenu__list">
      <li className="PopOverMenu__list__item">
        <button onClick = { this.onClick }>close</button>

        <a href="javascript:void(0)" onClick = { this.onClick } className="PopOverMenu__list__link">
          <MicroIcon icon={"break"} color={"#fff"}/>
          <p className="PopOverMenu__list__text">Break</p>
        </a>
      </li>
      <li className="PopOverMenu__list__item">
        <a href="javascript:void(0)" onClick = { ()=>this.onClickC(1) } className="PopOverMenu__list__link">
          <MicroIcon icon={"lunch"} color={"#fff"}/>
          <p className="PopOverMenu__list__text">Lunch</p>
        </a>
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
);

//const NavBar = props => {
class NavBar extends Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick(e){
    alert("ssss")
  }

  render(){
    return (
      <div className="NavBar">
        <div className="NavBar__header">
          <a href="#brand" className="NavBar__header__icon">
            {/* <MicroIcon icon={"logo"} color={"#B3B3B3"}/>
            <p className="NavBar__header__title">TOOLBAR</p> */}
            <img src={microvozLogo} className="MainLogo" alt="microvoz" />
            <img src={toolbarLogo} className="SubLogo" alt="toolbar" />
          </a>
        </div>

        <Button className="NavBar__buttons__btn NavBar__button__discando-btn NavBar__button__discando-btn--rolling">
          <MicroIcon icon={"settings"} color={"#7BB8EF"} size={"20px"} />
        </Button>
        { this.props.withButtons ?
          <div className="NavBar__buttos">
            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={ popoverBottom }>
              <Button className="NavBar__buttons__btn">
                <MicroIcon icon={"pause"} color={"#B3B3B3"}/>
              </Button>
            </OverlayTrigger>
            <a href="#" className="NavBar__buttons__btn">
              <MicroIcon icon={"exit"} color={"#B3B3B3"}/>
            </a>
          </div>
          : null }
      </div>
      )

  }
};

export default NavBar;
