export const initialState = {

    item: 'Learn about reducers',
    completed: false,
    id: 3892987589

};

// ADD_TODO
// ADD_CLEAR
// TOGGLE_REMOVER
const todoReducer = (state, action) => {
    switch(action.type){
     case 'ADD_TODO':
       return {
          [...state, {...state, item: action.payload}]
       };
     case 'ADD_CLEAR': 
    }

    default:
        return state;
    
}

