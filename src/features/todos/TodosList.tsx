import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Filter, filterChanged, filterTodos } from "../filter/filterSlice";
import { TodoComponent } from "./TodoComponent";
import { todoAdded } from "./todosSlice";

export const TodosList = (props) => {
    const todos = useAppSelector(state => state.todos.todos)
    const filter = useAppSelector(state => state.filter.filter)
    const filteredTodos = filterTodos(Object.values(todos), filter)
    const dispatch = useAppDispatch()
    return (
        <div>
            {filteredTodos.map((v) => {
                return <TodoComponent key={`todo-${v.id}`} todo={v} />
            })}
            <button
                onClick={() => dispatch(todoAdded("test"))}
            >
                Add test todo
            </button>
            <div>
                <a 
                    href="#"
                    onClick={() => dispatch(filterChanged(Filter.All))}
                >
                    All
                </a>
                <a 
                    href="#"
                    onClick={() => dispatch(filterChanged(Filter.Completed))}
                >
                    Completed
                </a>
                <a 
                    href="#"
                    onClick={() => dispatch(filterChanged(Filter.Active))}
                >
                    Active
                </a>
            </div>
        </div>
    )
}