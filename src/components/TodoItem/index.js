// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails,deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
            deleteTodo(id)
  }

  return (
    <li className="item-container">
      <p className="text">{title}</p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
