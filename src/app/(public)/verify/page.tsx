'use client'
import { useState } from 'react'

export default function VerifyPage() {
  const [id, setId] = useState('')
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <h1 className="section-title mb-4">Ticket Verification</h1>
      <p className="text-gray-600 mb-6">Enter Registration ID or Ticket ID to verify</p>
      <input
        className="w-full rounded-lg border px-4 py-3 mb-4 text-center font-mono"
        placeholder="FST27-XXXXXX"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <p className="text-sm text-gray-500">Full verification available via the gate scanner or admin dashboard.</p>
    </div>
  )
}
