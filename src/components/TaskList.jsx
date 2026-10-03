import TaskItem from './TaskItem'

const emptyText = {
  all: 'No tasks yet. Type one above and press Add Task.',
  done: 'Nothing is marked Done yet.',
  notdone: 'Every task is Done. Nice work!',
}

export default function TaskList({ tasks, onToggle, onDelete, filter }) {
  if (tasks.length === 0) {
    return (
      <p className="mt-5 rounded-2xl border-2 border-dashed border-lilac px-4 py-8 text-center text-grape">
        {emptyText[filter]}
      </p>
    )
  }
  return (
    <ul className="mt-5 space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  )
}
