import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Todo, TodoState } from "../todos/todosSlice"

export enum Filter {
    All = 'ALL',
    Completed = 'COMPLETED',
    Active = 'ACTIVE'
}

export const filterTodos = (todoState: TodoState, filter: FilterState): Todo[] => {
    const todos = Object.values(todoState.todos)
    return todos.filter(t => {
        switch (filter.filter) {
            case Filter.All:
                return t
            case Filter.Completed:
                if (t.completed) {
                    return t
                }
                break
            case Filter.Active:
                if (!t.completed) {
                    return t
                }
                break
            default:
                break
        }
    })
}

// make an object incase we want to make more complex filtering in the future
export interface FilterState {
    filter: Filter
}

const initialState: FilterState = {
    filter: Filter.All
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterChanged: (state, action: PayloadAction<Filter>) => {
            state.filter = action.payload
        }
    }
})

export const { filterChanged } = filterSlice.actions

export default filterSlice.reducer