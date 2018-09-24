import React, { Component } from 'react'
//import FormLogin from "../Elements/FormLogin/FormLogin"

import styles from './ChatPage.css'


const ChatPage = ({connected, onSubmit, onChangeInputMessage}) => {
  return (
    <div className="ChatPage">
      <form onSubmit={ onSubmit }>
        <ConnectionStatusControl connected={connected} />
        <HistoryMessages />
        <br />
        <input onChange = { (e) => onChangeInputMessage(e) } />
        <input type="submit" />
      </form>
    </div>
  )
}


const HistoryMessages = () => {
  //console.log(styles)
  return (
    <div className={styles.ChatPage__HistoryMessages}>


    </div>
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
