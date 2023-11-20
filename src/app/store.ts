import { configureStore } from '@reduxjs/toolkit'

import todosReducer from '../features/todos/todosSlice'
import filterReducer from '../features/filter/filterSlice'
import themeReducer from '../features/themes/themeSlice'

export const store = configureStore({
    reducer: {
      // Add any other reducers
      todos: todosReducer,
      filter: filterReducer,
      theme: themeReducer
    }
})

// Inferred state type: {todos: TodosState, counter: CounterState}
export type RootState = ReturnType<typeof store.getState>

// Inferred dispatch type: Dispatch & ThunkDispatch<RootState, undefined, UnknownAction>
export type AppDispatch = typeof store.dispatch

export default store