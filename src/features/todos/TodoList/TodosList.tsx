import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { FilterEnum, filterChanged, memoizedFilterTodos } from "../../filter/filterSlice";
import { TodoComponent } from "../TodoComponent/TodoComponent";
import { Todo, todoAdded } from "../todosSlice";
import * as S from './styles'

export const TodosList = (props) => {
    const filteredTodos: Todo[] = useAppSelector(memoizedFilterTodos)
    const activeFilter: FilterEnum = useAppSelector((state: RootState) => state.filter.filter)
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
    console.log("activeFilter: ", activeFilter)
    return (
        <S.PrimaryContainer>
            <h2>Todo list: </h2>

            <S.FilterContainer>
                <S.Filter 
                    onClick={() => dispatch(filterChanged(FilterEnum.All))}
                    $isActive={activeFilter === FilterEnum.All}
                >
                    All
                </S.Filter>
                <S.Filter 
                    onClick={() => dispatch(filterChanged(FilterEnum.Completed))}
                    $isActive={activeFilter === FilterEnum.Completed}
                >
                    Completed
                </S.Filter>
                <S.Filter 
                    onClick={() => dispatch(filterChanged(FilterEnum.Active))}
                    $isActive={activeFilter === FilterEnum.Active}
                >
                    Active
                </S.Filter>
            </S.FilterContainer>

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
        </S.PrimaryContainer>
    )
}