import { createStore, applyMiddleware, compose } from "redux";
import reducer, { initialState } from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers =
     window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;


const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
    );

export default store;
