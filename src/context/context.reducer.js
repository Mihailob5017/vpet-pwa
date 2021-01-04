// Reducer => a function that takes old state and action and returns new state

// Actions specifies how we want to change the state
const contextReducer = (state, action) => {

    switch (action.type) {
        case 'DELETE_TRANSACTION':
           
            return state.filter(el => el.id !== action.payload)
        case 'ADD_TRANSACTION':

            return [action.payload, ...state];

        default:
            return state;
    }




}

export default contextReducer;