import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import ButtonCmp from '../../Elements/ButtonCmp/ButtonCmp'
import SelectCmp from '../../Elements/SelectCmp/SelectCmp'

import MicroIcon from 'react-microvoz-icons';

import './CallBox.css';

const CallBox = props => {
  let DescriptionElement
  let IconMain //= <MicroIcon icon={"settings"} color={"#7BB8EF"} size={"20px"} />
  let MuteButton
  let CounterElement

  let ElementColor

  if(props.color)
    ElementColor = props.color
  else
    ElementColor = "white"


  if(typeof props.IconId !== "undefined")
    IconMain = <div className="CallBox__status__icon">
                  <MicroIcon icon={ props.IconId } color={ ElementColor } size={"20px"} />
                  {/*<MicroIcon icon={ props.IconId } color={"#7BB8EF"} size={"20px"} />*/}
                </div>

  if(props.showMute === true)
    MuteButton = <button className="CallBox__detail__btn CallBox__detail__btn--active">
                    <MicroIcon icon={"mute"} color={"#fff"} size={"18px"} />
                  </button>
  if(props.hiddenCounter !== true)
    CounterElement = <p style = { {color: ElementColor } } className="CallBox__status__time">00:15</p>


  if(typeof props.description !== "undefined")
    DescriptionElement = <div className="CallBox__detail">
                            <p className="CallBox__status__number">{props.description}</p>
                            {MuteButton}
                        </div>


      return <div>
        <div className="CallBox__status">
          { IconMain }
                <p style = { {color: ElementColor } } className="CallBox__status__label">{ props.labelText }</p>
                { CounterElement }
              </div>
              { DescriptionElement }
            </div>


  return (
    <div className="CallBox">
      {(() => {
        switch (props.callStatus) {
          case 'online':
            return <div className="CallBox__status">
                      <p className="CallBox__status__label">ONLINE</p>
                      <p className="CallBox__status__time">00:15</p>
                    </div>;
          case 'discando':
            return <div className="CallBox__status CallBox__status--discando">
                      <MicroIcon icon={"settings"} color={"#7BB8EF"} size={"20px"} />
                      <p className="CallBox__status__label">DISCANDO...</p>
                      <p className="CallBox__status__time">00:01</p>
                    </div>;
          case 'hablando':
            return <div>
                    <div className="CallBox__status CallBox__status--hablando">
                        <MicroIcon icon={"call-out"} color={"#92F70F"} size={"20px"} />
                        <p className="CallBox__status__label">HABLANDO</p>
                        <p className="CallBox__status__time">00:07</p>
                      </div>
                      <div className="CallBox__detail">
                        <p className="CallBox__status__number">54110413480</p>
                          <button className="CallBox__detail__btn CallBox__detail__btn--active">
                          <MicroIcon icon={"mute"} color={"#fff"} size={"18px"} />
                        </button>
                      </div>
                      {/*}<div className="CallBox__actions">
                        <button className="CallBox__actions__btn CallBox__actions__btn--end">
                  <MicroIcon icon={"call-off"} color={"#fff"} size={"12px"}/>
                          CORTAR
                        </button>
                        <button className="CallBox__actions__btn CallBox__actions__btn--wait">
                          <MicroIcon icon={"call-paused"} color={"#fff"} size={"20px"} />
                          ESPERA
                        </button>
                      </div>*/}
                    </div>;
          case 'espera':
            return <div>
              <div className="CallBox__status">
                <MicroIcon icon={"call-paused"} color={"#CCCCCC"} size={"20px"} />
                <p className="CallBox__status__label">EN ESPERA</p>
                <p className="CallBox__status__time">00:01</p>
              </div>
              <div className="CallBox__detail">
                <p className="CallBox__status__number">54110413480</p>
                <button className="CallBox__detail__btn">
                  <MicroIcon icon={"mute"} color={"#fff"} size={"18px"} />
                </button>
              </div>
              {/*<div className="CallBox__actions">
                <button className="CallBox__actions__btn CallBox__actions__btn--end">
                  <MicroIcon icon={"call-off"} color={"#fff"} size={"12px"} />
                  CORTAR
                        </button>
                <button className="CallBox__actions__btn CallBox__actions__btn--continue">
                  <MicroIcon icon={"continue"} color={"#fff"} size={"20px"} />
                  REANUDAR
                        </button>
              </div>*/}
            </div>;
          case 'finalizada':
            return <div>
                    <div className="CallBox__status">
                      <MicroIcon icon={"call-down"} color={"#CCCCCC"} size={"20px"} />
                      <p className="CallBox__status__label">LLAMADA FINALIZADA</p>
                    </div>
                    <div className="CallBox__detail">
                          <p className="CallBox__status__number">54110413480</p>
                    </div>
                  </div>;
          case 'wrap-up':
            return <div>
              <div className="CallBox__status CallBox__status--wrap-up">
                      <MicroIcon icon={"crono"} color={"#FBB03B"} size={"20px"} />
                      <p className="CallBox__status__label">WRAP UP TIME</p>
                      <p className="CallBox__status__time">-00:17</p>
                    </div>
                    <div className="CallBox__detail">
                      <p className="CallBox__status__number">54110413480</p>
                    </div>
                  </div>;
          default:
            null
        }
      })()}
    </div>
  )
};



export const KeyPad = props => {
  return (
    <div className="CallBox__actions">
            <button className="CallBox__actions__btn CallBox__actions__btn--end">
              <MicroIcon icon={"call-off"} color={"#fff"} size={"12px"}/>
                      CORTAR
                    </button>
                    <button className="CallBox__actions__btn CallBox__actions__btn--wait">
                      <MicroIcon icon={"call-paused"} color={"#fff"} size={"20px"} />
                      ESPERA
                    </button>
    </div>
  )
};





export default CallBox;
