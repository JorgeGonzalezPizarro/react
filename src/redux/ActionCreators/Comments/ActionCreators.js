import * as ActionTypes from '../../ActionTypes/Comments/Actions'

export const addComments = (dishId,rating,author,comment) => ({

   type : ActionTypes.ADD_COMMENTS,
   payload : {
       dishId,
       rating,
       author,
       comment
   }
});