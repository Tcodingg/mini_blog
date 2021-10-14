import * as actions from "./actionTypes";
const reducer = (state = [], action) => {
   switch (action.type) {
      case actions.GET_POST:
         return action.payload;

      default:
         return state;
   }
};

export default reducer;
