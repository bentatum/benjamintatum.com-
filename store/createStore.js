import sagas from './sagas'
import reducer from './reducer'
import reduxSaga from 'redux-saga'
import { applyMiddleware, createStore, compose } from 'redux'

const createSagaMiddleware =
  typeof reduxSaga === 'object' ? reduxSaga.default : reduxSaga // huh?
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  (process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default initialState => {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  store.sagaTask = sagaMiddleware.run(sagas)

  return store
}
