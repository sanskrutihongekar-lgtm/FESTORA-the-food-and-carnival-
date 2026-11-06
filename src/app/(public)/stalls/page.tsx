export default function StallsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="section-title text-center mb-8">Food & Shopping Stalls</h1>
      <p className="text-center text-gray-600 mb-10">50 exclusive stalls – 25 Food + 25 Shopping</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="font-bold text-xl mb-2">Zone A – Food Street</h2>
          <p className="text-gray-600">25 food stalls featuring street food to gourmet. High-capacity dining, waste management, handwashing units.</p>
        </div>
        <div className="card">
          <h2 className="font-bold text-xl mb-2">Zone B – Shopping Boulevard</h2>
          <p className="text-gray-600">25 retail & lifestyle stalls, craft displays, customer lounge.</p>
        </div>
      </div>
      <div className="mt-10 card">
        <h3 className="font-bold mb-3">Four-Day Stall Owner Dress Code</h3>
        <ul className="text-sm space-y-1 text-gray-600">
          <li>12 Jan – Traditional Day (Ethnic Kurtas/Sarees)</li>
          <li>13 Jan – Yellow & White Day</li>
          <li>14 Jan – Black & Red Day (with branded aprons)</li>
          <li>15 Jan – Carnival Colour Day (Denim & vibrant accessories)</li>
        </ul>
      </div>
    </div>
  )
}
