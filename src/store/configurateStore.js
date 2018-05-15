import { createStore, applyMiddleware, compose } from 'redux'
import combinedReducers from '../reducers/combinedReducers'
import createSagaMiddleware from 'redux-saga'
import sagaMonitor from '../sagas/sagaMonitor'
import rootSaga from '../sagas/index.js'
import { loadState, saveState } from './sessionStorage'
import { routesMiddleware } from '../http/Middlewares/routesMiddleware'
import { composeWithDevTools } from 'redux-devtools-extension'
//import { reduxReactRouter } from 'redux-router-dom'
// import createHistory from '../history/browserHistory'
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})


export default function configureStore(initialState, browserHistory) {

  const sagaMiddleware = createSagaMiddleware({sagaMonitor})
  const persistedState = loadState()
  const store = createStore(
                          combinedReducers,
                          persistedState,
compose(
  applyMiddleware(routesMiddleware),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
  //applyMiddleware(sagaMiddleware),
)
    //                        BrowserRouter({ createHistory })
  );


    /*createStore(
        combinedReducers,
        //persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        //applyMiddleware(socketIoMiddleware)(createStore)(reducer),
        applyMiddleware(sagaMiddleware),
      )*/
  sagaMiddleware.run(rootSaga)

  store.subscribe(() => {
    saveState(store.getState())
  })

  return store
}
