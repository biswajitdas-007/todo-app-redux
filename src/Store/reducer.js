import { ADD_COUNT, DECREASE_COUNT, ADD_TODO, UPDATE_TODO, TOGGLE_STATUS  } from "./actions";

//reducer function
export const reducerFn = (state, { type, payload }) => {
    console.log("state: ", state)
    console.log("Payload: ", payload)
    switch (type) {
        case ADD_COUNT: return {
            ...state,
            counter: state.counter + payload,
        };
        case DECREASE_COUNT : return {
            ...state,
            counter: state.counter - payload,
        };
        case ADD_TODO: return {
            ...state,
            todos: [...state.todos, { ...payload }]
        }
        case UPDATE_TODO: return {
            state,
            todos: state.todos.filter((e) => {
                return e.id !== payload.data.id
            })
        }
        case TOGGLE_STATUS: return {
            state,
            todos: state.todos.map((e) => {
                if (e.id === payload.data.id) {
                    e.status = !e.status;
                    return e;
                } else {
                    return e;
                }
            })
        }
        default: return {
            ...state
        };
    }
}
