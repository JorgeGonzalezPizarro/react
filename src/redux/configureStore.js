import {createStore} from 'redux';
import {initialState, Reducer} from "./Reducer";

export const ConfigureStore = () => createStore(Reducer, initialState);

