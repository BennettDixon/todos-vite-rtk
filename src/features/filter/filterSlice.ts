import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Todo, TodoState } from "../todos/todosSlice"
import { RootState } from "../../app/store"

export enum FilterEnum {
    All = 'ALL',
    Completed = 'COMPLETED',
    Active = 'ACTIVE'
}

export const filterTodos = (todoState: TodoState, filter: FilterState): Todo[] => {
    console.log("filtering todos")
    const todos = Object.values(todoState.todos)
    return todos.filter(t => {
        switch (filter.filter) {
            case FilterEnum.All:
                return t
            case FilterEnum.Completed:
                if (t.completed) {
                    return t
                }
                break
            case FilterEnum.Active:
                if (!t.completed) {
                    return t
                }
                break
            default:
                break
        }
    })
}

export const memoizedFilterTodos = createSelector(
    (state: RootState) => ({ todos: state.todos, filter: state.filter }),
    (selected) => filterTodos(selected.todos, selected.filter)
)

// make an object incase we want to make more complex filtering in the future
export interface FilterState {
    filter: FilterEnum
}

const initialState: FilterState = {
    filter: FilterEnum.All
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterChanged: (state, action: PayloadAction<FilterEnum>) => {
            state.filter = action.payload
        }
    }
})

export const { filterChanged } = filterSlice.actions

export default filterSlice.reducer