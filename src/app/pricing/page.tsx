import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      description: 'Get started with basic features',
      price: 0,
      interval: null,
      features: [
        '20 messages per day',
        'Basic calculator',
        'Community support',
        'Public knowledge base',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro Monthly',
      description: 'Full access to all features',
      price: 99,
      interval: 'month',
      features: [
        '5,000 messages/month',
        'Document uploads (20MB)',
        'Advanced calculator',
        'Priority support',
        'Private knowledge base',
        'Export capabilities',
      ],
      cta: 'Start Trial',
      popular: true,
    },
    {
      name: 'Pro Quarterly',
      description: 'Save with quarterly billing',
      price: 199,
      interval: '3 months',
      originalPrice: 297,
      features: [
        'Everything in Monthly',
        '33% savings vs monthly',
        'Quarterly strategy reviews',
      ],
      cta: 'Start Trial',
      popular: false,
    },
    {
      name: 'Pro Annual',
      description: 'Best value for committed users',
      price: 499,
      interval: 'year',
      originalPrice: 1188,
      features: [
        'Everything in Monthly',
        '58% savings vs monthly',
        'Annual compliance audit',
        'Custom integrations',
      ],
      cta: 'Start Trial',
      popular: false,
      badge: 'Best Value',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-primary">
              SaveTariff
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/dashboard" className="bg-primary text-white px-4 py-2 rounded-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your trade compliance needs. All Pro plans include the same features.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-6 ${
                  plan.popular
                    ? 'border-primary ring-2 ring-primary scale-105 shadow-xl'
                    : 'border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {plan.badge}
                    </span>
                  </div>
                )}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold">
                        ${plan.price}
                      </span>
                      {plan.interval && (
                        <span className="text-gray-500 ml-1">
                          /{plan.interval}
                        </span>
                      )}
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        Was ${plan.originalPrice}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/dashboard"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'border border-primary text-primary hover:bg-primary/10'
                    }`}
                  >
                    {plan.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                <h3 className="font-semibold mb-2">What's included in the free plan?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  The free plan includes 20 messages per day with our AI assistant and access to the basic calculator.
                </p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                <h3 className="font-semibold mb-2">Can I upgrade or downgrade anytime?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, you can change your plan at any time through your account settings. Changes take effect immediately.
                </p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We offer a 7-day money-back guarantee for new subscriptions. No questions asked.
                </p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border">
                <h3 className="font-semibold mb-2">Is my data secure?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, we use enterprise-grade security and encryption. Your trade data is never shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
