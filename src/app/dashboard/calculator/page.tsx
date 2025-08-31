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
- Route: ${formData.origin} → ${formData.dest
