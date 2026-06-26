import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Star, Building2 } from 'lucide-react'
import Button from '../components/Button'

const plans = [
    {
        name: 'Free',
        icon: Zap,
        price: '$0',
        period: 'forever',
        desc: 'Perfect for exploring public repos',
        features: [
            '5 analyses per month',
            'Basic project summary',
            'Technology detection',
            'Community support',
        ],
        cta: 'Get Started',
        popular: false,
    },
    {
        name: 'Pro',
        icon: Star,
        price: '$19',
        period: 'per month',
        desc: 'For developers who ship fast',
        features: [
            'Unlimited analyses',
            'Advanced architecture reports',
            'Security scanning',
            'AI Chat (unlimited)',
            'Auto documentation',
            'Priority support',
            'API access',
        ],
        cta: 'Start Pro Trial',
        popular: true,
    },
    {
        name: 'Enterprise',
        icon: Building2,
        price: 'Custom',
        period: 'contact us',
        desc: 'For teams and organizations',
        features: [
            'Everything in Pro',
            'Private repository support',
            'Team management',
            'SSO / SAML',
            'Custom integrations',
            'Dedicated account manager',
            'SLA guarantees',
        ],
        cta: 'Contact Sales',
        popular: false,
    },
]

export default function Pricing() {
    const [annual, setAnnual] = useState(false)

    return (
        <div className="container py-16 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-14"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple Pricing</h1>
                <p className="text-gray-500 text-lg mb-8">Choose the plan that fits your workflow</p>

                {/* Billing Toggle */}
                <div className="inline-flex items-center gap-3 p-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                    <button
                        onClick={() => setAnnual(false)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!annual ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setAnnual(true)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${annual ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                    >
                        Annual
                        <span className="ml-2 text-xs opacity-70">Save 20%</span>
                    </button>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
                {plans.map((plan, i) => {
                    const Icon = plan.icon
                    return (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative glass-card rounded-2xl p-8 flex flex-col transition-all duration-300 ${plan.popular
                                ? 'border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:shadow-[0_0_60px_rgba(255,255,255,0.12)]'
                                : 'hover-glow'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-xs font-semibold">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4">
                                    <Icon className="w-5 h-5 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                <p className="text-gray-600 text-sm mt-1">{plan.desc}</p>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-white">
                                    {plan.price === 'Custom' ? plan.price : (annual && plan.price !== '$0' ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}` : plan.price)}
                                </span>
                                <span className="text-gray-600 text-sm ml-2">/{plan.period}</span>
                            </div>

                            <ul className="space-y-3 mb-8 flex-1">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm text-gray-400">
                                        <Check className="w-4 h-4 text-white flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.popular ? 'primary' : 'outline'}
                                className="w-full rounded-xl"
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    )
                })}
            </div>

            {/* FAQ tease */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-20"
            >
                <p className="text-gray-600 text-sm">
                    Have questions? <a href="#" className="text-white hover:underline transition-all">Contact our team</a>
                </p>
            </motion.div>
        </div>
    )
}
