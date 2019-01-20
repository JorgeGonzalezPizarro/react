import {createStore , combineReducers , applyMiddleware} from 'redux';
import {Dishes} from "./reducers/dishes";
import {Comments} from "./reducers/comments";
import {Leaders} from "./reducers/leaders";
import {Promotions} from "./reducers/promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () =>{
    return createStore(
        combineReducers({
            dishes:Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        }),
        applyMiddleware(logger, thunk)
);
};

