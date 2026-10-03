export default function Header({ total, done }) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100)
  return (
    <header className="rounded-3xl bg-grape p-6 text-white sm:p-8">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Busante's Task Management Tool</h1>
      <div className="mt-6">
        <div className="flex items-baseline justify-between text-sm font-semibold">
          <span>{done} of {total} done</span>
          <span>{percent}%</span>
        </div>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-grape-dark">
          <div
            className="h-full rounded-full bg-lilac transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </header>
  )
}
