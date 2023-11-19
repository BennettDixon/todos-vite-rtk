import { Todo } from "../todos/todosSlice";
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

    const filteredAll: Todo[] = filterTodos(todos, Filter.All)
    expect(filteredAll.length).toEqual(2)

    const filteredComplete: Todo[] = filterTodos(todos, Filter.Completed)
    expect(filteredComplete.length).toEqual(1)
    expect(filteredComplete[0]).toEqual(learnViteTodo)

    const filteredActive: Todo[] = filterTodos(todos, Filter.Active)
    expect(filteredActive.length).toEqual(1)
    expect(filteredActive[0]).toEqual(learnRtkTodo)
})

test('filter todos empty list', () => {
    const todos: Todo[] = []
    const filtered = filterTodos(todos, Filter.Completed)
    expect(filtered.length).toEqual(0)
})