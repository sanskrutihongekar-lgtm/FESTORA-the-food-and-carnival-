const days = [
  { day: 1, date: '12 Jan 2027', title: 'Grand Opening & Food Traditions', items: [
    { time: '10:00 AM', title: 'Carnival Opens' },
    { time: '11:00 AM', title: 'Inauguration & Lamp Lighting' },
    { time: '2:30 PM', title: 'Demo 1: Roots & Recipes' },
    { time: '5:00 PM', title: 'Dance Academies' },
    { time: '8:00 PM', title: 'Live Band: Flavours of Music' },
  ]},
  { day: 2, date: '13 Jan 2027', title: 'Little Chefs & Family Fun', items: [
    { time: '11:30 AM', title: 'Little MasterChef Duo Competition' },
    { time: '3:00 PM', title: 'Demo 2: The Fusion Kitchen' },
    { time: '6:00 PM', title: 'Sufi & Unplugged Night' },
    { time: '9:00 PM', title: 'Kids Prize Distribution' },
  ]},
  { day: 3, date: '14 Jan 2027', title: 'The Ultimate Chef Challenge', items: [
    { time: '12:00 PM', title: 'Ultimate Chef Duo Competition' },
    { time: '3:30 PM', title: 'Demo 3: Sweet Sensations' },
    { time: '6:00 PM', title: 'Belagavi Dance Showcase' },
    { time: '7:30 PM', title: 'Live Bollywood Music' },
  ]},
  { day: 4, date: '15 Jan 2027', title: 'Grand Carnival Finale', items: [
    { time: '12:00 PM', title: 'Stall Voting Begins' },
    { time: '4:00 PM', title: 'Stall Judging' },
    { time: '6:30 PM', title: 'DJ & Carnival Beats' },
    { time: '8:00 PM', title: 'Best Food & Shopping Stall Awards' },
    { time: '9:00 PM', title: 'Grand Finale' },
  ]},
]

export default function SchedulePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title text-center mb-4">Four-Day Event Schedule</h1>
      <p className="text-center text-gray-600 mb-10">Daily 10:00 AM – 10:00 PM IST</p>
      <div className="space-y-8">
        {days.map((d) => (
          <div key={d.day} className="card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-4 border-b border-orange-100">
              <div>
                <span className="text-sm font-bold text-festora-crimson">DAY {d.day}</span>
                <h2 className="text-xl font-bold">{d.title}</h2>
              </div>
              <span className="text-festora-gold font-semibold">{d.date}</span>
            </div>
            <ul className="space-y-3">
              {d.items.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-24 shrink-0 font-mono text-sm font-bold text-festora-crimson">{item.time}</span>
                  <span className="font-medium">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
