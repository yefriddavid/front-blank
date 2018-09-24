import { createAction } from 'redux-act'

export const Disconnect = createAction('chat disconnect')


export const Connect = createAction('chat connect')
export const ConnectBegin = createAction('chat connect begin')
export const ConnectSuccesfull = createAction('chat connect succesful')
export const ConnectError = createAction('chat connect error')

export const SendPing = createAction('chat send ping')
export const SendPingBegin = createAction('chat send ping ping')
export const SendPingSuccesful = createAction('chat send ping succesfull')
export const SendPingError = createAction('chat send ping error')

export const ReceivePing = createAction('chat receive ping')
export const ReceivePingConfirm = createAction('chat receive ping cofirm')


export const SendMessage = createAction('chat send message')
export const SendMessageBegin = createAction('chat send message begin')
export const SendMessageSuccesfull = createAction('chat send message succesfull')
export const SendMessageError = createAction('chat send message error')

export const ReceiveMessage = createAction('chat received message')
export const ReceiveMessageConfirm = createAction('chat received message confirm')




