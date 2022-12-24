import { atom, useAtom, useAtomValue } from 'jotai'

const defaultTodoItems = [
  { id: 1, text: 'Начистить картошку', isDone: false },
  { id: 2, text: 'Купить вино', isDone: false },
  { id: 3, text: 'Помыть посуду', isDone: true },
]
const defaultData = {
  todoItems: defaultTodoItems,
  userName: 'Dmitry'
}

const loadData = () => {
  return localStorage.data ? JSON.parse(localStorage.data) : defaultData
}

export const saveData = (data) => {
  return localStorage.data = JSON.stringify(data) 
}

// const origData = loadData()
// const todoListAtom = atom(origData.todoItems)
// const userNameAtom = atom(origData.userName)

const todoListAtom = atom([])
// const userNameAtom = atom(origData.userName)

export const useTodoList = () => {
  return useAtomValue(todoListAtom)
}

export const useAddTodoItem = () => {
  const [todoList, setTodoList] = useAtom(todoListAtom)

  return (newTodoItemText) => {
    console.log("handleAddTodoItem", { newTodoItemText })
    const newTodoItem = {
      id: todoList.length + 1,
      text: newTodoItemText,
      isDone: false
    }
    const newTodoList = [...todoList, newTodoItem]
    setTodoList(newTodoList)
  }
}

const handleTodoItemCheck = (event, todoItemId) => {
  console.log("handleTodoItemCheck", {event, todoItemId})
  const todoItemIndex = data.todoItems.findIndex((todoItem) => todoItem.id === todoItemId)
  data.todoItems[todoItemIndex].isDone = event.target.checked
  saveData()
}


