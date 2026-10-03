export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li
      className={`flex flex-wrap items-center gap-3 rounded-2xl border-2 px-4 py-3 transition ${
        task.done ? 'border-transparent bg-mist' : 'border-lilac bg-white'
      }`}
    >
      <span
        className={`min-w-0 flex-1 break-words font-semibold ${
          task.done ? 'text-grape/60 line-through' : ''
        }`}
      >
        {task.text}
      </span>

      <span
        className={`rounded-full px-3 py-1 text-xs font-bold ${
          task.done ? 'bg-grape text-white' : 'bg-lilac text-ink'
        }`}
      >
        {task.done ? 'Done' : 'Not Done'}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="rounded-full border-2 border-grape px-3 py-1 text-sm font-bold text-grape transition hover:bg-grape hover:text-white"
        >
          {task.done ? 'Mark Not Done' : 'Mark Done'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.text}`}
          className="rounded-full bg-ink px-3 py-1 text-sm font-bold text-white transition hover:bg-grape-dark"
        >
          Delete
        </button>
      </div>
    </li>
  )
}
