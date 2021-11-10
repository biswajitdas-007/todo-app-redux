import { createStore } from "redux";
import { reducerFn } from "./reducer";
// class Store{
//     constructor(reducerFn, initialState) {
//         this.reducer = reducerFn;
//         this.state = initialState;
//     }
//     getState() {
//         return this.state;
//     }
//     dispatch(action) {
//       this.state = this.reducer(this.state, action)
//     }
// }

const initialState = {
    counter: 0,
    todos:[],
}

// const store = new Store(reducerFn, initialState);

export const store = createStore(reducerFn, initialState)

// store.dispatch({ type: "ADD_TODO", payload: { id: 1, status: false, title: "Learn React" } });
// store.dispatch({ type: "ADD_TODO", payload: { id: 2, status: false, title: "Learn HTML" } });
//console.log(store.getState())