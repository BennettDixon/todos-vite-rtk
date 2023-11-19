import { Todo } from "./todosSlice"

interface TodoProps {
    todo: Todo
}

export const TodoComponent = (props: TodoProps) => {
    return <p>{props.todo.text}</p>
}