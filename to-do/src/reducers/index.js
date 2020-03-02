export const initialState = {
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }],

};

// Actions

// ADD_TODO
// ADD_CLEAR
// TOGGLE_REMOVER

export function todoReducer(state, action) {

    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'ADD_CLEAR':
        return {...state, id: Date.now()};

        case "TOGGLE_REMOVER":
            return {...state, editing: true};
        default: 
          return state;
    }

}


