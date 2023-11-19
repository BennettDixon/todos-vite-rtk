import { useAppSelector } from "../../app/hooks";

export function Todos(props) {
    const todos = useAppSelector(state => state.todos.todos)
    return (
        <div>
            {Object.values(todos).map((v) => {
                return <p>{v.text}</p>
            })}
        </div>
    )
}