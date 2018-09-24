import { put, call, take, fork } from 'redux-saga/effects'
import * as history from '../history/browserHistory'
import * as authActions from '../actions/authActions'
import * as chatActions from '../actions/chatActions'
import { eventChannel } from 'redux-saga'
import io from 'socket.io-client'
import request from 'axios'

function connect() {
  var socket = io('/')
  return new Promise(resolve => {
      socket.on('connect', function() {
        resolve(socket);
      })
  })
}

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on('news', (data) => {
      //alert("news")
      //emit(addUser({ username }));
    })
    socket.on('connectChatSuccesful', (data) => {
      emit(chatActions.ConnectSuccesfull(data))
    })
    socket.on('receiveMessage', (data) => {
      emit(chatActions.ReceiveMessage(data))
    })
    socket.on('hola', (data) => {
      alert("hola")
    })
    socket.on('newReceiveMessage', (data) => {
      emit(chatActions.ReceiveMessage(data))
    })
    socket.on('confirmAddNewMessageReceived', (data) => {
      emit(chatActions.SendMessageSuccesfull())
    })
    socket.on('ping', (data) => {
      emit(chatActions.ReceivePing({  }))
    })
    socket.on('disconnect', e => {
      emit(chatActions.Disconnect())
    });
    return () => {};
  })
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  while (true) {
    //const { payload } = yield take(`${sendMessage}`);
    const { payload } = yield take(chatActions.SendMessage)
    //alert("sss")
    //console.log(payload)
    socket.emit('addNewMessage', { message: payload })
    //yield put(chatActions.SendMessageBegin())
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

export function* connectFlow() {
  while(true){
    try{
      const { payload } = yield take(`${chatActions.Connect}`)

      yield put(chatActions.ConnectBegin())
      const socket = yield call(connect)

      const task = yield fork(handleIO, socket)

      //socket.emit('ping', { username: "sssutsnra" })
      //socket.emit('login', { username: payload.username })

    } catch (e) {

    }
  }
}



export default function* root() {
  yield fork(connectFlow)
}
