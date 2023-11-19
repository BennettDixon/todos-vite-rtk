import { Todo, TodoState } from "../todos/todosSlice";
import { Filter, filterTodos } from "./filterSlice";

test('filter todos simple filter logic', () => {
    const learnViteTodo: Todo = {
        id: "1",
        text: "Learn more about Vite",
        completed: true
    }
    const learnRtkTodo: Todo = {
        id: "0",
        text: "Learn RTK",
        completed: false
    }
    const todos: Todo[] = [learnViteTodo, learnRtkTodo]

    const todoState: TodoState = {
        todos
    }
    
    const filteredAll: Todo[] = filterTodos(todoState, { filter: Filter.All })
    expect(filteredAll.length).toEqual(2)

    const filteredComplete: Todo[] = filterTodos(todoState, { filter: Filter.Completed })
    expect(filteredComplete.length).toEqual(1)
    expect(filteredComplete[0]).toEqual(learnViteTodo)

    const filteredActive: Todo[] = filterTodos(todoState, { filter: Filter.Active })
    expect(filteredActive.length).toEqual(1)
    expect(filteredActive[0]).toEqual(learnRtkTodo)
})

test('filter todos empty list', () => {
    const todos: Todo[] = []
    const todoState: TodoState = {
        todos
    }
    const filtered = filterTodos(todoState, { filter: Filter.Completed })
    expect(filtered.length).toEqual(0)
})