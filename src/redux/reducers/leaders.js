import * as ActionTypes from "../ActionTypes/Leaders/Actions";


 const initialState = {
    isLoading: true,
    leaders: [],
    error: undefined
};
export const Leaders = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH:
            return {...state, ...action.payload};

        case ActionTypes.LOADING:
            return {...state,...action.payload}

        case ActionTypes.FAILED:
            return {...state,...action.payload};

        default:
            return state;
    }
};