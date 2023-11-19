import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export interface Todo {
    id: string,
    text: string,
    completed: boolean
}

export interface TodoState {
    todos: {[id: string]: Todo}
}

const initialState: TodoState = {
    todos: {
        "1": {id: "1", text: "hello", completed: false}
    }
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // createSlice uses createReducer which uses immer internally
    // note that the state object is of type WriteableDraft<TodoState>
    // reference: https://redux-toolkit.js.org/usage/immer-reducers#redux-toolkit-and-immer
    todoAdded: (state, action: PayloadAction<string>) => {
        const newTodo: Todo = {
            id: uuidv4(),
            text: action.payload,
            completed: false
        }
        state.todos[newTodo.id] = newTodo
    },
    // similarly we can mutate objects directly here as well
    todoToggled: (state, action: PayloadAction<string>) => {
        Object.values(state.todos).forEach(todo => {
            if (todo.id === action.payload) {
                todo.completed = !todo.completed
            }
        })
    }
  }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { todoAdded, todoToggled } = todosSlice.actions

// Export the slice reducer as the default export
export default todosSlice.reducer
