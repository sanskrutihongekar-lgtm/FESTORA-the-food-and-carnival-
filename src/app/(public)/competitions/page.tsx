export default function CompetitionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="section-title text-center mb-12">Cooking Competitions</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card border-2 border-amber-200">
          <div className="text-4xl mb-3">👨‍👧</div>
          <h2 className="text-xl font-bold mb-2">Little MasterChef Duo</h2>
          <p className="text-sm text-gray-500 mb-4">Kids 7–12 yrs • No-fire cooking • 45 mins • 2 per team</p>
          <p className="font-bold text-festora-crimson mb-3">Fee: ₹200 / pair</p>
          <h3 className="font-semibold mb-2">Judging Criteria</h3>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>Creativity – 25</li>
            <li>Presentation – 25</li>
            <li>Taste – 25</li>
            <li>Hygiene – 15</li>
            <li>Teamwork – 10</li>
          </ul>
        </div>
        <div className="card border-2 border-red-200">
          <div className="text-4xl mb-3">👨‍🍳</div>
          <h2 className="text-xl font-bold mb-2">Ultimate Chef Duo</h2>
          <p className="text-sm text-gray-500 mb-4">Adults 18+ • Fire cooking • 60–75 mins • 2 per team</p>
          <p className="font-bold text-festora-crimson mb-3">Fee: ₹500 / pair</p>
          <h3 className="font-semibold mb-2">Judging Criteria</h3>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>Taste – 35</li>
            <li>Creativity – 20</li>
            <li>Presentation – 20</li>
            <li>Hygiene & Safety – 15</li>
            <li>Teamwork – 10</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 card">
        <h2 className="text-xl font-bold mb-4">Live Cooking Demonstrations (3 × 90 mins)</h2>
        <ul className="space-y-3">
          <li><strong>Session 1 – Roots & Recipes:</strong> Jolada rotti, ennegayi, zunka, local delicacies</li>
          <li><strong>Session 2 – The Fusion Kitchen:</strong> Fusion chaat, millet pizza, Indo-Italian snacks</li>
          <li><strong>Session 3 – Sweet Sensations:</strong> Chocolate, cake decoration, dessert plating, no-bake jars</li>
        </ul>
      </div>
    </div>
  )
}
