import * as ActionTypes from "../ActionTypes/Feedback/Actions";


 export const initialState = {
     isLoading: true,
     error: null,
     lastFeedback:null,
     feedback: [],
     success: null,
};
export const Feedback = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.POST:
           return { ...state.feedback ,...{
                   id: state.length,
                   ...action.payload,
                   lastFeedback: action.payload.feedback
               }};


        case ActionTypes.LOADING:
            return {...state.feedback,...action.payload}


        case ActionTypes.FETCH:
            return {...state.feedback, ...action.payload};


        default:
            return state;
    }
};