import { useAppDispatch } from "../../app/hooks"
import { Todo, todoToggled } from "./todosSlice"

interface TodoProps {
    todo: Todo
}

export const TodoComponent = (props: TodoProps) => {
    const dispatch = useAppDispatch()
    return (
        <p onClick={() => dispatch(todoToggled(props.todo.id))}>
            {props.todo.text}, completed: {props.todo.completed.toString()}
        </p>
    )
}