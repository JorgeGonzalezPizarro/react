import {createStore , combineReducers} from 'redux';
import {Dishes} from "./reducers/dishes";
import {Comments} from "./reducers/comments";
import {Leaders} from "./reducers/leaders";
import {Promotions} from "./reducers/promotions";

export const ConfigureStore = () =>{
    return createStore(
        combineReducers({
            dishes:Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        })
);
};

