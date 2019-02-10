import * as ActionTypes from '../../ActionTypes/Dishes/Actions'
import {initialState} from "../../reducers/dishes";
import axios from 'axios';

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading());
    dispatch( async () =>{
      return  axios.get("http://localhost:3001/dishes")
            .then((response) => {
               return dispatch(fetch(response.data))}
            );
       // await dishes.then(async function (data) {
       //   await  fetch(data);
       // });
    });

};

export const dishesLoading = () => ({

    type: ActionTypes.LOADING,
    payload: {
        dishes: [],
        error: null,
        isLoading: initialState.isLoading,
    }
});


export const fetch = (dishes) => (
    {
        type: ActionTypes.FETCH,
        payload: {
            isLoading: false,
            error: null,
            dishes: dishes,

        }
    }
);

export const failed = (error) => ({

    type: ActionTypes.FAILED,
    payload:
        {
            dishes: initialState.dishes,
            isLoading: false,
            error: error
        }

});

//
//
// export const fetchDishes = () => (dispatch) => {
//
//     dispatch(dishesLoading(true));
//
//     setTimeout(() => {
//         dispatch(addDishes(DISHES));
//     }, 2000);
// }
//
// export const dishesLoading = () => ({
//     type: ActionTypes.LOADING
// });
//
// export const dishesFailed = (errmess) => ({
//     type: ActionTypes.FAILED,
//     payload: errmess
// });
//
// export const addDishes = (dishes) => ({
//     type: ActionTypes.FETCH,
//     payload: dishes
// });