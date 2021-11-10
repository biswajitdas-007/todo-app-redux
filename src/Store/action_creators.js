import { ADD_COUNT, DECREASE_COUNT, ADD_TODO, UPDATE_TODO, TOGGLE_STATUS } from "./actions";
import { v4 as uuid } from "uuid";
export const addCount = (data) => {
    return {type: ADD_COUNT, payload: data}
}

export const decreaseCount = (data) => {
    return {type: DECREASE_COUNT, payload:data}
}

export const addTodo = (data) => {
    return {type: ADD_TODO, payload: {title: data, status: false, id: uuid()}}
}

export const updateTodo = (data) => {
    return { type: UPDATE_TODO, payload: { data } }
}
export const toggleStatus = (data) => {
    return { type: TOGGLE_STATUS, payload: { data } }
}