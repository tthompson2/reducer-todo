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
                todos: [...state.todos, { item: action.payload, completed: false, id: Date.now() }]
            }
        case 'ADD_CLEAR':
        return {
            ...state,
            todos: state.todos.filter(element => element.completed === false)
        };

        case "TOGGLE_REMOVER":
            return {
                ...state, 
                todos: state.todos.map(element => {
                    if(element.id === action.payload) {
                        return {
                            ...element, completed: !element.completed
                        }
                    }
                    else {
                        return element
                    }
                })
            }
        default: 
          return state;
    }
}