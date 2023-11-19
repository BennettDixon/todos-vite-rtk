import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { TodoComponent } from "./todo";
import { todoAdded } from "./todosSlice";

export function Todos(props) {
    const todos = useAppSelector(state => state.todos.todos)
    const dispatch = useAppDispatch()
    return (
        <div>
            {Object.values(todos).map((v) => {
                return <TodoComponent key={`todo-${v.id}`} todo={v} />
            })}
            <button
                onClick={() => dispatch(todoAdded("test"))}
            >
                Add test todo
            </button>
        </div>
    )
}