import * as ActionTypes from '../../ActionTypes/Leaders/Actions'
import {initialState} from "../../reducers/dishes";
import axios from 'axios';

export const fetchLeaders = () => (dispatch) => {

    dispatch(leadersLoading());
    dispatch( async () =>{
        return  axios.get("http://localhost:3001/leaders")
            .then((response) => {
                return dispatch(fetch(response.data))}
            );

    });

};

export const leadersLoading = () => ({

    type: ActionTypes.LOADING,
    payload: {
        leaders: [],
        error: null,
        isLoading: initialState.isLoading,
    }
});


export const fetch = (leaders) => (
    {
        type: ActionTypes.FETCH,
        payload: {
            isLoading: false,
            error: null,
            leaders: leaders,

        }
    }
);

export const failed = (error) => ({

    type: ActionTypes.FAILED,
    payload:
        {
            leaders: initialState.dishes,
            isLoading: false,
            error: error
        }

});

