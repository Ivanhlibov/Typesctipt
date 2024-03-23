import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Todo } from '../types'


const initialState: Todo[] = [];

const todoSlice = createSlice({
    name:'todo',
    initialState,
    

    reducers:{
      Addtodo(state, action: PayloadAction <string> ) {
        const newTodo = {id: Date.now(), text: action.payload }
       state.push(newTodo)

     },
     deleteTodo(state, action: PayloadAction <Number> ){
        return state.filter((todo)=> todo.id !== action.payload)

     }
    }
})

export const {Addtodo, deleteTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer