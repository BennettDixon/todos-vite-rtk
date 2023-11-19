import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
  }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { todoAdded, todoToggled } = todosSlice.actions

// Export the slice reducer as the default export
export default todosSlice.reducer
