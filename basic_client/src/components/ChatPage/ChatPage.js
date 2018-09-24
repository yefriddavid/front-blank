import React, { Component } from 'react'
//import FormLogin from "../Elements/FormLogin/FormLogin"

import styles from './ChatPage.css'


const ChatPage = ({connected, onSubmit, onChangeInputMessage, send, receive}) => {
  return (
    <div className="ChatPage">
      <form onSubmit={ onSubmit }>
        <ConnectionStatusControl connected={connected} />
        <HistoryMessages send={send} receive={receive} />
        <br />
        <input onChange = { (e) => onChangeInputMessage(e) } />
        <input type="submit" />
      </form>
    </div>
  )
}

const HistoryMessages = ({ send, receive }) => {
  const { messages: sendMessages } = send
  const { messages: receivedMessages } = receive

  const HistoryDataMessages = sendMessages.concat(receivedMessages)

  return (
    <dl className={styles.ChatPage__HistoryMessages}>
      {HistoryDataMessages.map((item, index) => {
        if(item.type == "in"){
          return (
            <dt key={index}>
              <h5>
                {item.message}
              </h5>
            </dt>
          )
        }else{
          return (
            <dd key={index}>
              <h5>
                {item.message}
              </h5>
            </dd>
          )

        }
      })}
    </dl>
  )
}

const ConnectionStatusControl = ({connected}) => {
  if (connected === true){
    return (
      <div className="ChatPage__ConnectionStatus">
        on-line
      </div>
    )
  }else{
    return (
      <div>
        off-line
      </div>
    )

  }
}

export default ChatPage
