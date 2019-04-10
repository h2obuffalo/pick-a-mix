import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducers';
import {initialState as playersInitialState } from './reducers/players';
import {initialState as loadedInitialState }  from './reducers/loaded';
import thunk from 'redux-thunk';

const initialState = {
    players: playersInitialState,
    loaded: loadedInitialState,
}

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ || compose;


const createStoreWithMiddleware = applyMiddleware(
    thunk,
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState, reduxDevTools());

export default store;