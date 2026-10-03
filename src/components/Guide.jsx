const steps = [
  ['Add a task', 'Type your task in the box, then press the Add Task button or the Enter key.'],
  ['Mark a task Done or Not Done', 'Press Mark Done on a task. Its badge changes to Done. Press Mark Not Done to switch it back.'],
  ['Delete a task', 'Press Delete on the task you want to remove. Use Clear done or Reset list to remove many at once.'],
]

export default function Guide() {
  return (
    <section className="mt-6 rounded-3xl bg-lilac/60 p-6 sm:p-8">
      <h2 className="text-2xl font-extrabold">How to use this list</h2>
      <ol className="mt-4 space-y-4">
        {steps.map(([title, body], i) => (
          <li key={title} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-grape font-bold text-white">
              {i + 1}
            </span>
            <div>
              <h3 className="font-bold">{title}</h3>
              <p className="text-ink/80">{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
