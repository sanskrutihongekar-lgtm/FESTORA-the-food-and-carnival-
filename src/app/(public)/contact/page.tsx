export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="section-title text-center mb-8">SPOC Contact Hub</h1>
      <div className="space-y-4">
        {[
          { cat: 'Food & Shopping Stalls', name: 'Stall Operations Desk', role: 'Stall Manager' },
          { cat: 'Cooking Competitions', name: 'Culinary Competition Team', role: 'Competition Coordinator' },
          { cat: 'Stage & Performers', name: 'Artist Management Desk', role: 'Entertainment Manager' },
          { cat: 'General Entry & Passes', name: 'Visitor Relations Desk', role: 'Registration Head' },
        ].map((s) => (
          <div key={s.cat} className="card flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold text-festora-crimson">{s.cat}</p>
              <p className="font-bold">{s.name}</p>
              <p className="text-sm text-gray-500">{s.role}</p>
            </div>
            <div className="text-sm">
              <p>sanskrutihongekar@gmail.com</p>
              <p>+91 12345 56789</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
