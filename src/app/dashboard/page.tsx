import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-primary">
              SaveTariff
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-primary font-medium">
                Dashboard
              </Link>
              <Link href="/dashboard/chat" className="text-foreground hover:text-primary">
                Chat
              </Link>
              <Link href="/dashboard/calculator" className="text-foreground hover:text-primary">
                Calculator
              </Link>
              <Link href="/pricing" className="text-foreground hover:text-primary">
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome to SaveTariff! 🚀
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your AI-powered trade compliance assistant is ready to help optimize your tariff costs.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/dashboard/chat"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Chatting →
            </Link>
            <Link 
              href="/dashboard/calculator"
              className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              Try Calculator
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Messages This Month</h2>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">247</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">of 5,000 used</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary text-xl">💬</span>
              </div>
            </div>
            <div className="mt-4 bg-gray-100 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '5%' }}></div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Documents Uploaded</h2>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">12</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total processed</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary text-xl">📄</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Potential Savings</h2>
                <p className="text-3xl font-bold text-green-600 mt-1">$15,420</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">This quarter</p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xl">💰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Assistant */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary text-lg">🤖</span>
              </div>
              <h3 className="text-lg font-semibold">AI Trade Assistant</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get expert guidance on tariff optimization, classification strategies, and compliance requirements.
            </p>
            <Link 
              href="/dashboard/chat"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              Start Conversation →
            </Link>
          </div>

          {/* Calculator */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary text-lg">🧮</span>
              </div>
              <h3 className="text-lg font-semibold">Landed Cost Calculator</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Calculate duties, taxes, and total landed costs with optimization recommendations.
            </p>
            <Link 
              href="/dashboard/calculator"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              Open Calculator →
            </Link>
          </div>
        </div>

        {/* Recent Activity (Demo) */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Calculated landed cost for HS 8517.12</p>
                    <p className="text-sm text-gray-500">CN → US route • Identified $2,400 savings</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">💬</span>
                  </div>
                  <div>
                    <p className="font-medium">Asked about USMCA qualification requirements</p>
                    <p className="text-sm text-gray-500">Textile products • Rules of origin guidance</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm">📄</span>
                  </div>
                  <div>
                    <p className="font-medium">Uploaded commercial invoice for analysis</p>
                    <p className="text-sm text-gray-500">INV-2024-001.pdf • 2.3 MB</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
