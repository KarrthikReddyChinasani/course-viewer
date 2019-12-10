import { createStore, applyMiddleware } from "redux";
import coursesReducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import watchAll from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(coursesReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAll)

export default store;