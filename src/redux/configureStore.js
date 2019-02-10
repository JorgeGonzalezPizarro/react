import {createStore , combineReducers , applyMiddleware} from 'redux';
import {Dishes} from "./reducers/dishes";
import {Comments} from "./reducers/comments";
import {Leaders} from "./reducers/leaders";
import {Promotions} from "./reducers/promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Feedback} from "./reducers/feedback";

export const ConfigureStore = () =>{
    return createStore(
        combineReducers({
            dishes:Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions,
            feedback: Feedback
        }),
        applyMiddleware(logger, thunk)
);
};

