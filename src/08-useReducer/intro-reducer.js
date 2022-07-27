const initialState = [{
    id:1,
    todo: 'Recolectar flores', 
    done: false,
}];

// Reducer recibe 2 argumentos state y action(cómo quiero que cambie el estado)
// Retorna un state

const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo') {
        return [ ...state, action.payload ];
        // nunca usar push, este muta el arreglo
    }

    return state;

}

// Uso del reducer

let todos = todoReducer();
console.log(todos);

// Si se quiere modificar el reducer, se debe mandar una acción que le dice
// cómo va a modificarse

const newTodo = {
    id:2,
    todo: 'Recolectar fresas', 
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );
console.log({state: todos});



