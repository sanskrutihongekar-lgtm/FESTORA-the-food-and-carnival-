import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('/admin/login')

  let stats = { registrations: 0, checkedIn: 0, revenue: 0, stallsOccupied: 0 }
  try {
    const [regCount, checkIns, revenueAgg, occupied] = await Promise.all([
      prisma.registration.count(),
      prisma.ticket.count({ where: { status: 'CHECKED_IN' } }),
      prisma.registration.aggregate({ _sum: { amountPaid: true } }),
      prisma.stall.count({ where: { status: 'OCCUPIED' } }),
    ])
    stats = {
      registrations: regCount,
      checkedIn: checkIns,
      revenue: revenueAgg._sum.amountPaid || 0,
      stallsOccupied: occupied,
    }
  } catch (e) {
    // DB may not be ready
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-festora-slate text-white px-6 py-4 flex justify-between items-center">
        <div className="font-bold text-lg">FESTORA Admin Dashboard</div>
        <div className="text-sm">{(session.user as any)?.email} • {(session.user as any)?.role}</div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-8">Operational Overview</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="card text-center">
            <p className="text-3xl font-black text-festora-crimson">{stats.registrations}</p>
            <p className="text-sm text-gray-500">Total Registrations</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-black text-green-600">{stats.checkedIn}</p>
            <p className="text-sm text-gray-500">Checked In</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-black text-festora-gold">₹{stats.revenue}</p>
            <p className="text-sm text-gray-500">Revenue</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl font-black text-blue-600">{stats.stallsOccupied}/50</p>
            <p className="text-sm text-gray-500">Stalls Occupied</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/scanner" className="card hover:shadow-lg transition text-center py-8">
            <div className="text-3xl mb-2">📷</div>
            <p className="font-bold">QR Scanner / Check-in</p>
          </Link>
          <Link href="/" className="card hover:shadow-lg transition text-center py-8">
            <div className="text-3xl mb-2">🌐</div>
            <p className="font-bold">View Public Site</p>
          </Link>
          <div className="card text-center py-8 opacity-60">
            <div className="text-3xl mb-2">📊</div>
            <p className="font-bold">Full CRUD modules</p>
            <p className="text-xs text-gray-500 mt-1">Extend via Prisma Studio / API</p>
          </div>
        </div>
      </main>
    </div>
  )
}
