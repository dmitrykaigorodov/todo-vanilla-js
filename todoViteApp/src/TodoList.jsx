import { useState } from 'react'
import { useAddTodoItem, useTodoList } from './state.js'

export const TodoItem = ({ todoItem }) => {

  return <div>
    <input type="checkbox"  
      onChange={event => handleTodoItemCheck(event, todoItem.id)}
      checked={todoItem.isDone}>
    </input>
    <label >{todoItem.text}</label>

  </div>
}

export const NewTodoItemForm = () => {
  const addTodoItem = useAddTodoItem()
  const [todoItemText, setTodoItemText] = useState('')

  const handleAddTodoItem = (event) => {
    event.preventDefault()
    addTodoItem(todoItemText)
    setTodoItemText('')
  }

  return <form onSubmit={event => handleAddTodoItem(event)}>
    <input type="checkbox" readOnly/>
    <input id="newTodoItemText" type="text"
      placeholder="What you want to do?"
      onChange={event => setTodoItemText(event.target.value)}
      value={todoItemText}
    />
    <button >Add todo item</button>
  </form>
}
export const TodoList = () => {
  const todoList = useTodoList()
  console.log('TodoList', {todoList})

  return <div>
    <h1>Todo Today!</h1>
    {
      todoList.map(
        todoItem => <TodoItem key={ todoItem.id } todoItem={todoItem} />
      )
    }
    <NewTodoItemForm />
    
  </div>
}