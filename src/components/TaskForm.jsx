import { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const value = text.trim()
    if (!value) {
      setError('Type a task before adding it.')
      return
    }
    onAdd(value)
    setText('')
    setError('')
  }

  return (
    <form onSubmit={submit}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          value={text}
          onChange={(e) => { setText(e.target.value); setError('') }}
          placeholder="What do you need to do?"
          aria-label="New task"
          className="min-w-0 flex-1 rounded-2xl border-2 border-lilac bg-haze px-4 py-3 outline-none placeholder:text-grape/50 focus:border-grape"
        />
        <button
          type="submit"
          className="rounded-2xl bg-grape px-6 py-3 font-bold text-white transition hover:bg-grape-dark active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grape"
        >
          Add Task
        </button>
      </div>
      {error && <p className="mt-2 text-sm font-semibold text-grape-dark" role="alert">{error}</p>}
    </form>
  )
}
