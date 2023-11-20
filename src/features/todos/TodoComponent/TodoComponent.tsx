import { useAppDispatch } from "../../../app/hooks"
import { Todo, todoToggled } from "../todosSlice"

import * as S from './styles'

interface TodoProps {
    todo: Todo
}

export const TodoComponent = (props: TodoProps) => {
    const dispatch = useAppDispatch()
    return (
        <S.StyledTodo onClick={() => dispatch(todoToggled(props.todo.id))}>
            {props.todo.text}, completed: {props.todo.completed.toString()}
        </S.StyledTodo>
    )
}