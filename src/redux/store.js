import { createStore, applyMiddleware, compose } from "redux";
import reducer, { initialState } from './reducers';
import thunk from 'redux-thunk';


const reduxDevTools =
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__) || compose;


const createStoreWithMiddleware = applyMiddleware(
    thunk,
)(createStore);

const store = createStoreWithMiddleware(reducer, initialState, reduxDevTools());

export default store;