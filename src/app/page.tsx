import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">SaveTariff</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/pricing"
                className="text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link 
                href="/dashboard"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center">
          <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg max-w-4xl mx-auto">
            <p className="text-yellow-800 dark:text-yellow-200">
              <strong>Important:</strong> SaveTariff provides informational guidance only and does not constitute legal advice. 
              Always consult with qualified customs brokers or trade attorneys for compliance matters.
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Optimize Tariffs with
            <br />
            <span className="text-primary">AI-Powered Compliance</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            SaveTariff helps exporters, importers, and supply chain teams reduce landed costs 
            while maintaining strict trade compliance. Get expert guidance on tariff optimization, 
            duty engineering, and classification strategies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/pricing"
              className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Free Trial →
            </Link>
            <Link 
              href="/dashboard"
              className="border border-primary text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Try Demo
            </Link>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Calculator</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Deterministic landed cost calculations with duty optimization recommendations
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">📄</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Document Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Upload and analyze trade documents with AI-powered insights
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Compliance First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expert guidance prioritizing legal compliance and audit readiness
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-primary mb-4">SaveTariff</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              AI-powered tariff optimization and trade compliance platform
            </p>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2025 SaveTariff.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
