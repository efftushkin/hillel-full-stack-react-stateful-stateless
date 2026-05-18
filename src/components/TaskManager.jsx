import { useState } from 'react'
import TaskList from './TaskList'
import './TaskManager.css'

/**
 * TaskManager - Stateful Component
 * This component manages state using the useState hook.
 * It handles task creation, deletion, and toggling task completion.
 */
function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React basics', completed: true },
    { id: 2, text: 'Understand stateful components', completed: false },
    { id: 3, text: 'Understand stateless components', completed: false },
  ])
  const [inputValue, setInputValue] = useState('')

  // Add a new task
  const addTask = () => {
    if (inputValue.trim() === '') return

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setInputValue('')
  }

  // Delete a task by id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className="task-manager">
      <h2>Task Manager (Stateful Component)</h2>
      
      <div className="task-input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task..."
          className="task-input"
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>

      <div className="task-stats">
        <p>Total tasks: {tasks.length}</p>
        <p>Completed: {tasks.filter((t) => t.completed).length}</p>
        <p>Pending: {tasks.filter((t) => !t.completed).length}</p>
      </div>

      {/* Passing data and functions to the stateless component via props */}
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  )
}

export default TaskManager
