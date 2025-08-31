'use client'

import { useState } from 'react'
import Link from 'next/link'

const COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'CN', name: 'China' },
  { code: 'DE', name: 'Germany' },
  { code: 'JP', name: 'Japan' },
  { code: 'VN', name: 'Vietnam' },
  { code: 'MX', name: 'Mexico' },
  { code: 'CA', name: 'Canada' },
  { code: 'UK', name: 'United Kingdom' },
]

const INCOTERMS = ['EXW', 'FCA', 'FAS', 'FOB', 'CFR', 'CIF', 'CPT', 'CIP', 'DAP', 'DPU', 'DDP']

export default function CalculatorPage() {
  const [formData, setFormData] = useState({
    hsCode: '',
    origin: '',
    destination: '',
    incoterms: 'FOB',
    customsValue: '',
    quantity: '1',
    weight: '',
  })
  
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCalculate = async () => {
    setIsLoading(true)
    
    // Simulate calculation (in real app, this would call the API)
    setTimeout(() => {
      const customsValue = parseFloat(formData.customsValue)
      const dutyRate = formData.origin === 'CN' ? 25.0 : 6.5 // Simplified logic
      const dutyAmount = customsValue * (dutyRate / 100)
      const vatRate = formData.destination === 'US' ? 0 : 19 // Simplified
      const vatAmount = vatRate > 0 ? (customsValue + dutyAmount) * (vatRate / 100) : 0
      const totalLandedCost = customsValue + dutyAmount + vatAmount

      const mockResult = {
        dutyRate,
        dutyAmount,
        vatRate: vatRate > 0 ? vatRate : null,
        vatAmount: vatAmount > 0 ? vatAmount : null,
        totalLandedCost,
        assumptions: [
          `Duty rate: ${dutyRate}% based on ${formData.origin}-${formData.destination} route`,
          `Customs value basis: ${formData.incoterms}`,
          'Current rates as of calculation date',
          'Excludes freight, insurance, and handling fees',
        ],
        savingsOpportunities: [
          {
            opportunity: 'Explore Free Trade Agreement benefits',
            estimatedSavings: dutyAmount * 0.8,
            complexity: 'Medium',
          },
          {
            opportunity: 'Consider supply chain diversification',
            estimatedSavings: dutyAmount * 0.6,
            complexity: 'High',
          },
          {
            opportunity: 'Optimize valuation methodology',
            estimatedSavings: customsValue * 0.05,
            complexity: 'Low',
          },
        ]
      }

      setResult(mockResult)
      setIsLoading(false)
    }, 2000)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  const copyResultToChat = () => {
    const summary = `Landed Cost Calculation:
- HS Code: ${formData.hsCode}
- Route: ${formData.origin} → ${formData.destination}  
- Duty Rate: ${result.dutyRate}%
- Duty Amount: ${formatCurrency(result.dutyAmount)}
- Total Landed Cost: ${formatCurrency(result.totalLandedCost)}

Key Opportunities:
${result.savingsOpportunities.slice(0, 3).map((opp: any) => 
  `• ${opp.opportunity} (${formatCurrency(opp.estimatedSavings)} potential savings)`
).join('\n')}`

    navigator.clipboard.writeText(summary)
    alert('Results copied to clipboard! You can paste this in the chat for further analysis.')
  }

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
              <Link href="/dashboard" className="text-foreground hover:text-primary">
                Dashboard
              </Link>
              <Link href="/dashboard/chat" className="text-foreground hover:text-primary">
                Chat
              </Link>
              <Link href="/dashboard/calculator" className="text-primary font-medium">
                Calculator
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-primary">🧮</span>
            </div>
            <h1 className="text-2xl font-bold">Landed Cost Calculator</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Calculate duties, taxes, and total landed costs with optimization recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold mb-4">Product & Trade Details</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Enter your product information and trade route
            </p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">HS Code</label>
                  <input
                    type="text"
                    placeholder="e.g., 8517.12"
                    value={formData.hsCode}
                    onChange={(e) => handleInputChange('hsCode', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Incoterms</label>
                  <select
                    value={formData.incoterms}
                    onChange={(e) => handleInputChange('incoterms', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900"
                  >
                    {INCOTERMS.map((term) => (
                      <option key={term} value={term}>{term}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Origin Country</label>
                  <select
                    value={formData.origin}
                    onChange={(e) => handleInputChange('origin', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900"
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Destination</label>
                  <select
                    value={formData.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900"
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Customs Value ($)</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={formData.customsValue}
                    onChange={(e) => handleInputChange('customsValue', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Quantity</label>
                  <input
                    type="number"
                    placeholder="1"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    placeholder="0"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900"
                  />
                </div>
              </div>

              <button
                onClick={handleCalculate}
                disabled={isLoading || !formData.hsCode || !formData.origin || !formData.destination || !formData.customsValue}
                className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Calculating...' : 'Calculate Landed Cost'}
              </button>
            </div>
          </div>

          {/* Results */}
          {result ? (
            <div className="space-y-6">
              {/* Summary Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Calculation Results</h3>
                  <button
                    onClick={copyResultToChat}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm hover:bg-primary/20 transition-colors"
                  >
                    📋 Copy to Chat
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {result.dutyRate}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Duty Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold">
                      {formatCurrency(result.totalLandedCost)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Landed Cost</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Customs Value:</span>
                    <span>{formatCurrency(parseFloat(formData.customsValue))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duty Amount:</span>
                    <span>{formatCurrency(result.dutyAmount)}</span>
                  </div>
                  {result.vatAmount && (
                    <div className="flex justify-between">
                      <span>VAT/Tax ({result.vatRate}%):</span>
                      <span>{formatCurrency(result.vatAmount)}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Savings Opportunities */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="mr-2">💰</span>
                  Optimization Opportunities
                </h3>
                
                <div className="space-y-3">
                  {result.savingsOpportunities.map((opportunity: any, index: number) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <div className="flex-1">
                        <div className="font-medium">{opportunity.opportunity}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Potential savings: {formatCurrency(opportunity.estimatedSavings)}
                        </div>
                        <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs ${
                          opportunity.complexity === 'Low' ? 'bg-green-100 text-green-800' :
                          opportunity.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {opportunity.complexity} Complexity
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assumptions */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-lg font-semibold mb-4">Assumptions & Notes</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  {result.assumptions.map((assumption: string, index: number) => (
                    <li key={index}>• {assumption}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-medium mb-2">Ready to Calculate</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Fill in your product details to get landed cost calculations and optimization recommendations.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
