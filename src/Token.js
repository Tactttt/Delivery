import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';
import Store from './Store';

const getToken = () => Store?.getState()?.generalState?.token;
console.log(Store?.getState()?.generalState?.token)
export default getToken;
