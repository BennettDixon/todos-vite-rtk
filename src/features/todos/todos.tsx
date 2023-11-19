import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { todoAdded } from "./todosSlice";

export function Todos(props) {
    const todos = useAppSelector(state => state.todos.todos)
    const dispatch = useAppDispatch()
    return (
        <div>
            {Object.values(todos).map((v) => {
                return <p key={`todo-${v.id}`}>{v.text}</p>
            })}
            <button
                onClick={() => dispatch(todoAdded("test"))}
            >
                Add test todo
            </button>
        </div>
    )
}