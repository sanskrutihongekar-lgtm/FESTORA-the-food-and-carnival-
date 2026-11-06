export default function PerformersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="section-title text-center mb-8">Live Performers</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {['Flavours of Music Band', 'Sufi Soul Collective', 'Belagavi Dance Ensemble', 'Carnival DJ Crew'].map((n) => (
          <div key={n} className="card text-center">
            <div className="text-3xl mb-2">🎤</div>
            <h3 className="font-bold">{n}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
