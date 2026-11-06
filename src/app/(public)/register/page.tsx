'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const TICKET_TYPES = [
  { value: 'GENERAL_ENTRY', label: 'Adult Entry Ticket', price: '₹50', desc: 'Single adult entry' },
  { value: 'FAMILY_PASS', label: 'Family Pass (2A + 2K)', price: '₹120', desc: 'Best value for families' },
  { value: 'SEASON_PASS', label: '4-Day Season Pass', price: '₹150', desc: 'Unlimited entry all 4 days' },
  { value: 'LITTLE_MASTERCHEF', label: 'Little MasterChef Duo', price: '₹200', desc: 'Kids 7-12 yrs, pair entry' },
  { value: 'ULTIMATE_CHEF', label: 'Ultimate Chef Duo', price: '₹500', desc: 'Adults 18+, pair entry' },
]

export default function RegisterPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState<any>(null)
  const [form, setForm] = useState({
    type: 'GENERAL_ENTRY',
    fullName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    partnerName: '',
    partnerAge: '',
    numberOfAdults: 1,
    numberOfKids: 0,
    specialRequests: '',
  })

  const isDuo = form.type === 'LITTLE_MASTERCHEF' || form.type === 'ULTIMATE_CHEF'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          age: form.age ? Number(form.age) : undefined,
          partnerAge: form.partnerAge ? Number(form.partnerAge) : undefined,
        }),
      })
      const data = await res.json()
      if (!data.success) {
        setError(data.error || 'Registration failed')
        return
      }
      setSuccess(data)
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <div className="card">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-festora-crimson mb-2">Registration Successful!</h1>
          <p className="text-gray-600 mb-6">Your ticket has been emailed to you.</p>
          <div className="bg-red-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-red-800 font-medium">Registration ID</p>
            <p className="text-2xl font-black text-festora-crimson tracking-wide">{success.registrationId}</p>
            <p className="text-sm mt-2">Ticket: {success.ticketId}</p>
          </div>
          {success.qrCode && (
            <img src={success.qrCode} alt="QR Code" className="mx-auto w-48 h-48 border-4 border-festora-gold rounded-xl mb-6" />
          )}
          <p className="text-sm text-gray-500 mb-6">Amount: ₹{success.amount}</p>
          <button onClick={() => router.push('/')} className="btn-primary w-full">Back to Home</button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="section-title mb-2">Register for FESTORA 2027</h1>
        <p className="text-gray-600">Choose your pass and complete the form. Instant QR ticket via email.</p>
      </div>

      <form onSubmit={handleSubmit} className="card space-y-6">
        {/* Ticket Type */}
        <div>
          <label className="block text-sm font-bold mb-3">Select Ticket Type</label>
          <div className="grid gap-3">
            {TICKET_TYPES.map((t) => (
              <label
                key={t.value}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${
                  form.type === t.value ? 'border-festora-crimson bg-red-50' : 'border-gray-200 hover:border-orange-200'
                }`}
              >
                <input
                  type="radio"
                  name="type"
                  value={t.value}
                  checked={form.type === t.value}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="sr-only"
                />
                <div className="flex-1">
                  <p className="font-bold">{t.label}</p>
                  <p className="text-sm text-gray-500">{t.desc}</p>
                </div>
                <span className="font-black text-festora-crimson">{t.price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Primary details */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name *</label>
            <input
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-festora-gold focus:border-transparent"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              required
              type="email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-festora-gold focus:border-transparent"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone *</label>
            <input
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-festora-gold focus:border-transparent"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <input
              type="number"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-festora-gold focus:border-transparent"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
            />
          </div>
        </div>

        {isDuo && (
          <div className="grid sm:grid-cols-2 gap-4 p-4 bg-amber-50 rounded-xl">
            <p className="sm:col-span-2 font-bold text-amber-900">Partner / Duo Details</p>
            <div>
              <label className="block text-sm font-medium mb-1">Partner Name *</label>
              <input
                required={isDuo}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                value={form.partnerName}
                onChange={(e) => setForm({ ...form, partnerName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Partner Age</label>
              <input
                type="number"
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                value={form.partnerAge}
                onChange={(e) => setForm({ ...form, partnerAge: e.target.value })}
              />
            </div>
          </div>
        )}

        {form.type === 'GENERAL_ENTRY' && (
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Number of Adults</label>
              <input
                type="number"
                min={1}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                value={form.numberOfAdults}
                onChange={(e) => setForm({ ...form, numberOfAdults: Number(e.target.value) })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Number of Kids (&gt;5 yrs)</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
                value={form.numberOfKids}
                onChange={(e) => setForm({ ...form, numberOfKids: Number(e.target.value) })}
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">Special Requests (optional)</label>
          <textarea
            rows={2}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
            value={form.specialRequests}
            onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
          />
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
        )}

        <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-base disabled:opacity-60">
          {loading ? 'Processing...' : 'Confirm & Get Ticket'}
        </button>
        <p className="text-xs text-center text-gray-500">
          By registering you agree to the event terms. Payment is simulated for demo; integrate Razorpay/Stripe for production.
        </p>
      </form>
    </div>
  )
}
