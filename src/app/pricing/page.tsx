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
      interval:
