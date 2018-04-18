import React from 'react';
import './PausedView.css';

import MicroIcon from 'react-microvoz-icons';
///import ButtonCmp from '../Elements/ButtonCmp/ButtonCmp'
import ButtonCmp from '../Elements/ButtonCmp/ButtonCmp'

class PausedView extends React.Component {
  state = {
    //timeOff: false,
    timeOff: true,
  }

  render() {
    return(
      <div classNamea={this.state.timeOff ? "PausedView__container PausedView__container--time-off" : "PausedView__container"}>
        <div className="PausedView__header">
          <div className="PausedView__header__item">
            <MicroIcon icon={"toilette"} color={"#FFF"} size={"40px"} />
            <span className="PausedView__header__title">Toilette</span>
          </div>
        <div className="PausedView__header__item">
            <span className="PausedView__header__subtitle">Resta</span>
            <span className="PausedView__header__time">00:01:58</span>
          </div>
        </div>
        <div className="PausedView__content">
          { this.state.timeOff ?
            <form action="" className="PausedView__form">
              <label className="PausedView__form__label" htmlFor="password">Contraseña del supervisor</label>
              <input className="PausedView__form__input" type="password" id="password" />
              <ButtonCmp title="Continuar" />
            </form>
            :
            <form action="" className="PausedView__form">
              <label className="PausedView__form__label" htmlFor="user">Usuario</label>
              <input className="PausedView__form__input" type="text" id="user" />
              <label className="PausedView__form__label" htmlFor="password">Contraseña</label>
              <input className="PausedView__form__input" type="password" id="password" />
              <ButtonCmp title="Ingresar" style={{ width: "100px"}} />
            </form>
          }
        </div>
      </div>
    );
  }
}

export default PausedView;
