export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );

        default:
            return initialState;
    }

}

// desde la action de TodoApp voy a enviar el id en el payload
// por eso se hace: todo.id !== action.payload