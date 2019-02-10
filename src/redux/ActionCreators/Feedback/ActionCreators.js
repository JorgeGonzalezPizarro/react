import * as ActionTypes from '../../ActionTypes/Feedback/Actions'
import axios from 'axios';
import {initialState} from "../../reducers/feedback";

export const postFeedback = (data) => (dispatch) => {
    dispatch(feedbackLoading());
    dispatch( async () =>{
      return  axios.post("http://localhost:3001/feedback",Object.assign({},data))
            .then((response) => {
               return dispatch(post(response.data))}
            );

    });

};

export const fetchFeedback = () => (dispatch) => {

    dispatch(feedbackLoading());
    dispatch( async () =>{
        return  axios.get("http://localhost:3001/feedback")
            .then((response) => {
                alert(JSON.stringify(response.data))
                return dispatch(fetch(response.data))}
            );

    });

};
export const fetch = (feedback) => (
    {
        type: ActionTypes.FETCH,
        payload: {
            isLoading: false,
            error: null,
            lastFeedback:null,
            feedback: feedback,
            success: null,

        }
    }
);

export const feedbackLoading = () => ({

    type: ActionTypes.LOADING,
    payload: {
        feedback: [],
        error: null,
        lastFeedback:null,
        success: null,
        isLoading: initialState.isLoading,
    }
});


export const post = (feedback) => (
    {
        type: ActionTypes.POST,
        payload: {
            isLoading: false,
            error: null,
            feedback: feedback,
            lastFeedback:null,
            success: null,

        }
    }
);



