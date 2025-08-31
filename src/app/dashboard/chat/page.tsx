'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      role: 'assistant' as const,
      content: 'Hello! I\'m your SaveTariff AI assistant. I specialize in tariff optimization, trade compliance, and duty calculations. How can I help you today?',
      timestamp: new Date(),
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: input,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response (in real app, this would call the API)
    setTimeout(() => {
      const responses = [
        "For tariff optimization on electronics from China to the US, I'd recommend exploring these strategies:\n\n✅ **Compliant pathways:**\n• Consider supply chain diversification to Vietnam or Mexico for USMCA benefits\n• Evaluate product redesign to qualify for lower HS classification\n• Implement duty drawback programs for re-exports\n\n⚠️ **Watch-outs:**\n• Ensure proper country of origin documentation\n• Review Section 301 tariff applicability\n• Consider anti-dumping duties on specific products\n\nWould you like me to calculate specific landed costs for your products?",
        
        "I can help you with USMCA qualification requirements. Here's what you need to know:\n\n✅ **Key Requirements:**\n• Meet regional value content thresholds (62.5% net cost method)\n• Maintain proper books and records for 5 years\n• Obtain valid Certificate of Origin\n• Ensure all materials meet rules of origin\n\n📋 **Documentation needed:**\n• Bill of materials with supplier details\n• Cost breakdown by country\n• Manufacturing process documentation\n\nWhat specific product category are you working with?",

        "For HS code classification optimization:\n\n✅ **Best practices:**\n• Review product specifications against HTS notes\n• Consider engineering changes for better classification\n• Document technical rationale for audit purposes\n• File binding ruling requests for certainty\n\n⚠️ **Important considerations:**\n• Classification must reflect actual product characteristics\n• Cannot modify solely for tariff avoidance\n• Maintain consistent classification across shipments\n\nDo you have a specific product you'd like help classifying?"
      ]
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: randomResponse,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 2000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-border bg-white dark:bg-gray-900 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-primary">
              SaveTariff
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-foreground hover:text-primary">
                Dashboard
              </Link>
              <Link href="/dashboard/chat" className="text-primary font-medium">
                Chat
              </Link>
              <Link href="/dashboard/calculator" className="text-foreground hover:text-primary">
                Calculator
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Chat Header */}
      <div className="border-b border-border p-4 bg-white dark:bg-gray-900 flex-shrink-0">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-primary">🤖</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold">SaveTariff AI Assistant</h1>
              <p className="text-sm text-gray-500">Specialized in trade compliance and tariff optimization</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
              ● Online
            </span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-3xl rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="whitespace-pre-wrap">{message.content}</div>
                
                {message.role === 'assistant' && (
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-xs text-gray-500">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => copyToClipboard(message.content)}
                        className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        Copy
                      </button>
                      <button className="text-xs text-gray-500 hover:text-green-600">
                        👍
                      </button>
                      <button className="text-xs text-gray-500 hover:text-red-600">
                        👎
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="text-sm text-gray-500">AI is thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-border p-4 bg-white dark:bg-gray-900 flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          <div className="mb-2 text-xs text-gray-500">
            💡 Try asking: "How can I reduce tariffs on electronics from China?" or "Calculate landed cost for HS 8517.12"
          </div>
          
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about tariff optimization, trade compliance, or duty calculations..."
              disabled={isLoading}
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-foreground"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Send →
            </button>
          </form>
          
          <div className="mt-2 text-xs text-gray-500 text-center">
            SaveTariff provides informational guidance only. Always consult qualified customs brokers for compliance matters.
          </div>
        </div>
      </div>
    </div>
  )
}
