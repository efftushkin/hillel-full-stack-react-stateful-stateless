/**
 * TaskList - Stateless Component
 * This component receives data via props and focuses on presentation.
 * It does not manage any internal state - it only displays what it receives.
 */
function TaskList({ tasks, onToggle, onDelete }) {
  // If no tasks exist, display a message
  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <p className="empty-message">No tasks yet. Add one to get started!</p>
      </div>
    )
  }

  return (
    <div className="task-list">
      <h3>Task List (Stateless Component)</h3>
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="task-checkbox"
              />
              <span className="task-text">{task.text}</span>
            </div>
            <button
              onClick={() => onDelete(task.id)}
              className="delete-button"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
