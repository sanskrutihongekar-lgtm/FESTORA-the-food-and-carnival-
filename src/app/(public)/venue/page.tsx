export default function VenuePage() {
  const zones = [
    { zone: 'A', name: 'Food Street', desc: '25 food stalls, high-capacity dining, waste bins, handwashing' },
    { zone: 'B', name: 'Shopping Boulevard', desc: '25 retail & lifestyle stalls, craft displays, customer lounge' },
    { zone: 'C', name: 'Carnival Arena', desc: 'Ring Toss, Basketball, Spin & Win, Giant Jenga, fair games' },
    { zone: 'D', name: 'Cooking Studio', desc: '3 Live Cooking Demonstration sessions with projection' },
    { zone: 'E', name: 'Competition Arena', desc: 'No-fire (kids) and fire-safe (adults) kitchen stations' },
    { zone: 'F', name: 'Entertainment Stage', desc: 'Live music, dance, DJ, awards, announcements' },
    { zone: 'G', name: 'Picture Perfect', desc: '3 themed photo corners: Foodie Frame, Belagavi Memories, Carnival Vibes' },
    { zone: 'H', name: 'Rest & Dine', desc: 'Shaded seating, water stations, first-aid, inquiry kiosk' },
  ]
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="section-title text-center mb-4">Venue & Zones</h1>
      <p className="text-center text-gray-600 mb-2">CPED Ground, Club Road, Belagavi, Karnataka 590001</p>
      <p className="text-center text-sm text-gray-500 mb-10">8 dedicated functional zones for seamless circulation and safety</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {zones.map((z) => (
          <div key={z.zone} className="card flex gap-4">
            <div className="w-12 h-12 rounded-full bg-carnival-gradient text-white font-black flex items-center justify-center shrink-0">
              {z.zone}
            </div>
            <div>
              <h3 className="font-bold">Zone {z.zone} – {z.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{z.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
