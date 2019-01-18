import { COMMENTS } from '../../shared/Comments';
import * as ActionTypes from '../ActionTypes/Comments/Actions'

export const Comments = (state = COMMENTS , action) => {
    console.log(state);
    const commentId= state.length;
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return state.concat(
                {
                    id:state.length,
                    date:new Date().toISOString(),
                    ...action.payload
                }
            );
        default :
            return state;
    }
};