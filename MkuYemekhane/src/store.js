import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'mrtcnme@mkuyemekhane',
  storage: storage,
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, reducers)
const sagaMiddleware = createSagaMiddleware();
const pstore =  createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default () => {
  const store = pstore;
  const persistor = persistStore(store);
  return { store, persistor }
}