import { useState } from "react"




export default function ToDoList() {
    const [todos, setTodos] = useState<string[]>([])
    const [newTodo, setNewTodo] = useState("")

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo] )
            setNewTodo("")
        }
        const inputEl = document.querySelector('input[type="text"]') as HTMLInputElement
        inputEl.value = ''
        inputEl.focus()
    }

    const removeTodo = (index: number) => {
        const updatedTodos = [...todos]
        updatedTodos.splice(index, 1)
        setTodos(updatedTodos)
    }
    return (
        <>
            <h1>Simple To Do List</h1>
            <input type="text" onChange={e => setNewTodo(e.target.value)} />
            <div>
            <button className="add-btn" onClick={addTodo}>Add</button>
            </div>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button className="delete-btn" onClick={() => removeTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
        </>
    )
}