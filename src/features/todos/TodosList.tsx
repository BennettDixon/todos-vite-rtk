import { useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Filter, filterChanged, memoizedFilterTodos } from "../filter/filterSlice";
import { TodoComponent } from "./TodoComponent/TodoComponent";
import { todoAdded } from "./todosSlice";

export const TodosList = (props) => {
    const filteredTodos = useSelector(memoizedFilterTodos)
    const dispatch = useAppDispatch()

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
        const newTodo = formData.get("todoInput")?.valueOf() || ""
        if (newTodo.length > 0) {
            dispatch(todoAdded(newTodo))
        }
        form.reset()
    }

    return (
        <div>
            {filteredTodos.map((v) => {
                return <TodoComponent key={`todo-${v.id}`} todo={v} />
            })}
            <form onSubmit={handleSubmit}>
                <label>
                    Todo input: <input name="todoInput" />
                </label>
                <button
                    type="submit"
                >
                    Add todo
                </button>
            </form>

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