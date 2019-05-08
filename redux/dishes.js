import * as ActionTypes from './ActionTypes';
//the dishes reducer.
export const dishes = (state = { 
        isLoading: true,//isLoading is true if the data is being loaded from the server site.
        errMess: null,//error message is true if you encounter any error.
        dishes:[]//dishes is the array that contains the details of the dishes.
    }, action) => {
        //will result in a call to the method here, so a switch.
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};