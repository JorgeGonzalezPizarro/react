import {COMMENTS} from '../../shared/Comments';
import * as ActionTypes from '../ActionTypes/Comments/Actions'

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return state.concat(
                {
                    id: state.length,
                    date: new Date().toISOString(),
                    ...action.payload
                }
            );
        case ActionTypes.REMOVE_COMMENT:
            console.log(action.payload , "asdasd");
            return state.filter((comment) => comment.id !== action.payload.commentId);
        default :
            return state;
    }
};