import { useState } from 'react'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Guide from './components/Guide'

export default function App() {
  // React state: the list of tasks and the active filter
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Try marking this task as Done', done: false },
    { id: 2, text: 'Delete this task when you are finished', done: false },
  ])
  const [filter, setFilter] = useState('all')

  const addTask = (text) =>
    setTasks((prev) => [{ id: Date.now(), text, done: false }, ...prev])

  const toggleTask = (id) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id))

  const clearDone = () => setTasks((prev) => prev.filter((t) => !t.done))
  const resetAll = () => setTasks([])

  const doneCount = tasks.filter((t) => t.done).length
  const visible = tasks.filter((t) =>
    filter === 'all' ? true : filter === 'done' ? t.done : !t.done
  )

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:py-14">
      <Header total={tasks.length} done={doneCount} />

      <section className="mt-6 rounded-3xl bg-white p-4 shadow-xl shadow-grape/10 sm:p-6">
        <TaskForm onAdd={addTask} />

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-1 rounded-full bg-mist p-1" role="tablist" aria-label="Filter tasks">
            {[['all', 'All'], ['notdone', 'Not Done'], ['done', 'Done']].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-grape ${
                  filter === key ? 'bg-grape text-white' : 'text-grape hover:bg-lilac/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 text-sm font-semibold">
            <button
              onClick={clearDone}
              disabled={doneCount === 0}
              className="rounded-full px-3 py-1.5 text-grape hover:bg-mist disabled:opacity-40 disabled:hover:bg-transparent"
            >
              Clear done
            </button>
            <button
              onClick={resetAll}
              disabled={tasks.length === 0}
              className="rounded-full px-3 py-1.5 text-grape hover:bg-mist disabled:opacity-40 disabled:hover:bg-transparent"
            >
              Reset list
            </button>
          </div>
        </div>

        <TaskList tasks={visible} onToggle={toggleTask} onDelete={deleteTask} filter={filter} />
      </section>

      <Guide />
    </main>
  )
}
