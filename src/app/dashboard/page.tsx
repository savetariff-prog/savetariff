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
            <p className="text-gray-600 dark:text-gray-400 mb-4
