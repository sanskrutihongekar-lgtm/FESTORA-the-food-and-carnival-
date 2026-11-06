import Link from 'next/link'
import { Calendar, MapPin, Users, Utensils, ShoppingBag, Music, Trophy, Camera } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-carnival-gradient text-white">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <p className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider uppercase bg-white/20 rounded-full backdrop-blur">
            12 – 15 January 2027 • Belagavi
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 drop-shadow-lg">
            FESTORA 2027
          </h1>
          <p className="text-xl md:text-2xl font-medium text-yellow-100 mb-2">
            The Grand Food & Carnival Festival
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            One Festival. Endless Experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary bg-white text-festora-crimson hover:bg-yellow-50 text-base px-8 py-4">
              Book Your Pass
            </Link>
            <Link href="/schedule" className="btn-secondary border-white text-white hover:bg-white/10 text-base px-8 py-4">
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-festora-crimson" />
              </div>
              <div>
                <p className="font-bold text-festora-slate">12 – 15 Jan 2027</p>
                <p className="text-sm text-gray-500">10 AM – 10 PM Daily</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-festora-gold" />
              </div>
              <div>
                <p className="font-bold text-festora-slate">CPED Ground</p>
                <p className="text-sm text-gray-500">Club Road, Belagavi</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-festora-slate">50 Stalls + Competitions</p>
                <p className="text-sm text-gray-500">Food • Shopping • Fun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title mb-4">Welcome to the Festival</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              FESTORA 2027 brings together delicious flavours, exciting shopping experiences, and unlimited fun under one roof. 
              Featuring 50 exclusive stalls, live chef demonstrations, cooking competitions for kids and adults, interactive games, 
              photo booths, live music, and dance performances.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Utensils, title: '25 Food Stalls', desc: 'Street food to gourmet delights from across India' },
              { icon: ShoppingBag, title: '25 Shopping Stalls', desc: 'Crafts, lifestyle, local products & more' },
              { icon: Trophy, title: 'Cooking Competitions', desc: 'Little MasterChef & Ultimate Chef Duo challenges' },
              { icon: Music, title: 'Live Entertainment', desc: 'Bands, dance, DJ nights & cultural showcases' },
            ].map((item) => (
              <div key={item.title} className="card text-center hover:shadow-lg transition">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-red-100 to-amber-100 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-festora-crimson" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">8 Vibrant Zones</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Zone A', title: 'Food Street', emoji: '🍜' },
              { name: 'Zone B', title: 'Shopping Boulevard', emoji: '🛍️' },
              { name: 'Zone C', title: 'Carnival Arena', emoji: '🎡' },
              { name: 'Zone D', title: 'Cooking Studio', emoji: '👨‍🍳' },
              { name: 'Zone E', title: 'Competition Arena', emoji: '🏆' },
              { name: 'Zone F', title: 'Entertainment Stage', emoji: '🎤' },
              { name: 'Zone G', title: 'Picture Perfect', emoji: '📸' },
              { name: 'Zone H', title: 'Rest & Dine', emoji: '☕' },
            ].map((z) => (
              <div key={z.name} className="rounded-xl bg-festora-cream border border-orange-100 p-4 text-center hover:border-festora-gold transition">
                <div className="text-3xl mb-2">{z.emoji}</div>
                <p className="text-xs font-bold text-festora-crimson">{z.name}</p>
                <p className="font-semibold text-sm">{z.title}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/venue" className="btn-secondary">Explore Venue Map</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-carnival-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready for Endless Experiences?</h2>
          <p className="text-lg text-yellow-100 mb-8">
            Adult tickets from ₹50 • Family Pass ₹120 • Season Pass ₹150
          </p>
          <Link href="/register" className="inline-flex items-center gap-2 bg-white text-festora-crimson font-bold px-8 py-4 rounded-full shadow-xl hover:bg-yellow-50 transition">
            Register Now
          </Link>
        </div>
      </section>
    </>
  )
}
