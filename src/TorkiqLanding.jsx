import React, { useEffect } from "react";
import { Check, ArrowRight, Shield, Zap, BarChart3, PlugZap, Factory, Bot, Gauge, CalendarCheck, Mail } from "lucide-react";

// Simple CTA Button component (accepts passthrough props for testing/data-attrs)
const CTAButton = ({ children, ...props }) => (
    <a
        href="#get-started"
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold shadow-md transition hover:shadow-lg bg-teal-700 text-white hover:bg-teal-800 dark:bg-teal-600 dark:text-white"
        {...props}
    >
        {children} <ArrowRight className="h-4 w-4" />
    </a>
);

// Badge
const Badge = ({ children }) => (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground bg-white/70 dark:bg-black/20 backdrop-blur-sm">
        {children}
    </span>
);

export default function TorkiqLanding() {
    // Lightweight runtime sanity checks (acts as basic test cases in the absence of a test runner)
    useEffect(() => {
        try {
            const hasCTADemo = !!document.querySelector('[data-testid="cta-demo"]');
            console.assert(hasCTADemo, "CTA demo button should render");
            const demoEl = document.querySelector('[data-testid="cta-demo"]');
            if (demoEl && typeof demoEl.className === 'string') {
                console.assert(demoEl.className.includes('bg-violet-700'), "Primary CTA should use violet theme");
            }

            const hasWaitlist = !!document.querySelector('[data-testid="btn-waitlist"]');
            console.assert(hasWaitlist, "Waitlist button should render");

            const sectionsExist = ["features", "how", "pricing", "about"].every((id) => !!document.getElementById(id));
            console.assert(sectionsExist, "All key sections should be present (features/how/pricing/about)");
        } catch (e) {
            // no-op: keep the UI resilient
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-teal-50 text-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
            {/* Nav */}
            <header className="sticky top-0 z-30 border-b bg-white/70 backdrop-blur-md dark:bg-slate-950/60">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-violet-700 dark:bg-violet-500" />
                        <div className="leading-tight">
                            <p className="text-lg font-black tracking-tight">torkiq.ai</p>
                            <p className="text-xs text-slate-500">An Everpower Labs innovation</p>
                        </div>
                    </div>
                    <nav className="hidden gap-6 text-sm font-medium md:flex">
                        <a href="#features" className="hover:opacity-80">Features</a>
                        <a href="#how" className="hover:opacity-80">How it works</a>
                        <a href="#pricing" className="hover:opacity-80">Pricing</a>
                        <a href="#about" className="hover:opacity-80">About</a>
                    </nav>
                    <div className="hidden md:block">
                        <CTAButton data-testid="cta-demo">Book a demo</CTAButton>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="pointer-events-none absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-teal-200 to-emerald-200 opacity-60 blur-3xl dark:from-teal-900/40 dark:to-emerald-900/30" />
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-14 md:grid-cols-2 md:pt-24">
                    <div>
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                            <Badge>Built for Xero</Badge>
                            <Badge>QuickBooks integration — coming soon</Badge>
                            <Badge>Made by Everpower Labs</Badge>
                        </div>
                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                            AI Agents for Accountants. <span className="block">Built for Xero.</span>
                        </h1>
                        <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
                            Supercharge your practice with autonomous agents that automate bookkeeping, reconciliations, reporting and compliance—so your team can focus on client advisory.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <CTAButton>Get early access</CTAButton>
                            <a href="#demo" className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 font-semibold text-teal-700 border-teal-200 hover:bg-teal-50 dark:text-teal-300 dark:border-teal-800 dark:hover:bg-slate-900">
                                Watch demo
                            </a>
                        </div>
                        <p className="mt-3 text-xs text-slate-500">Plug & play with Xero in minutes. No long setup. Cancel anytime.</p>
                    </div>
                    <div className="relative">
                        <div className="mx-auto w-full max-w-lg rounded-3xl border bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                            <div className="rounded-2xl border bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800">
                                <div className="mb-3 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Bot className="h-5 w-5" />
                                        <p className="text-sm font-semibold">Agent Run — Reconciler</p>
                                    </div>
                                    <span className="text-xs text-green-600">✓ Completed</span>
                                </div>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> 524 transactions matched</li>
                                    <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> 37 exceptions flagged for review</li>
                                    <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> GST coding reviewed</li>
                                    <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> Variance report generated</li>
                                </ul>
                            </div>
                            <div className="mt-4 rounded-2xl border bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800">
                                <div className="mb-3 flex items-center gap-2">
                                    <BarChart3 className="h-5 w-5" />
                                    <p className="text-sm font-semibold">Auto report — Monthly Pack</p>
                                </div>
                                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                                    <div className="rounded-xl border p-3 dark:border-slate-700">
                                        <p className="font-bold">+$48k</p>
                                        <p className="text-slate-500">Cash flow</p>
                                    </div>
                                    <div className="rounded-xl border p-3 dark:border-slate-700">
                                        <p className="font-bold">97%</p>
                                        <p className="text-slate-500">Auto categorised</p>
                                    </div>
                                    <div className="rounded-xl border p-3 dark:border-slate-700">
                                        <p className="font-bold">1.8h</p>
                                        <p className="text-slate-500">Time saved/job</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-center text-xs text-slate-500">Illustrative UI mockup — not actual product screens.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section className="border-y bg-white py-14 dark:border-slate-800 dark:bg-slate-950">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-2xl font-bold md:text-3xl">The grind is killing margins</h2>
                        <p className="mt-3 text-slate-600 dark:text-slate-300">
                            Even with cloud accounting, practitioners lose hours on reconciliations, coding receipts, compliance checks, and month end packs. torkiq.ai automates the busywork so you can focus on advisory and growth.
                        </p>
                    </div>
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {[
                            { icon: <Zap className="h-5 w-5" />, title: 'Repetitive tasks', desc: 'Bulk coding, chasing documents, exception handling.' },
                            { icon: <Gauge className="h-5 w-5" />, title: 'Slow month end', desc: 'Manual reports, cash flow prep, variance analysis.' },
                            { icon: <Shield className="h-5 w-5" />, title: 'Compliance risk', desc: 'Audit readiness and GST/BAS checks are tedious.' },
                        ].map((f, i) => (
                            <div key={i} className="rounded-2xl border p-6 shadow-sm dark:border-slate-800">
                                <div className="mb-3 inline-flex items-center gap-2 rounded-xl border px-3 py-1 text-xs dark:border-slate-700">
                                    {f.icon} <span className="font-medium">{f.title}</span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-300">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-start gap-10 md:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Your AI agent factory</h2>
                            <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">
                                Deploy purpose built agents trained for accounting workflows. Start with our ready made agents or request bespoke agents tailored to your practice.
                            </p>
                            <ul className="mt-6 space-y-4">
                                {[
                                    { icon: <PlugZap className="h-5 w-5" />, title: 'Seamless Xero integration', desc: 'Connect in minutes with secure OAuth. QuickBooks support coming soon.' },
                                    { icon: <Factory className="h-5 w-5" />, title: 'Multi agent library', desc: 'Reconciler, Categoriser, Compliance Checker, Report Builder, Cashflow Forecaster and more.' },
                                    { icon: <CalendarCheck className="h-5 w-5" />, title: 'Always on automations', desc: 'Agents run on schedules or triggers, with human in the loop for exceptions.' },
                                    { icon: <Shield className="h-5 w-5" />, title: 'Security & compliance', desc: 'Data encrypted at rest and in transit. Role based access. Audit trails.' },
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 rounded-lg border p-2 dark:border-slate-700">{item.icon}</div>
                                        <div>
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-3xl border p-6 shadow-sm dark:border-slate-800">
                            <h3 className="text-lg font-semibold">Popular agents</h3>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                {[
                                    { title: 'Bank Reconciler', bullets: ['Auto match & explain', 'Exception queue', 'Confidence scoring'] },
                                    { title: 'Categoriser', bullets: ['Invoice/receipt OCR', 'Supplier rules', 'GST validation'] },
                                    { title: 'Compliance Checker', bullets: ['BAS/GST checks', 'Audit trails', 'Policy alerts'] },
                                    { title: 'Report Builder', bullets: ['Monthly packs', 'KPIs & trends', 'Cash flow forecasts'] },
                                ].map((card, i) => (
                                    <div key={i} className="rounded-2xl border p-5 dark:border-slate-800">
                                        <p className="font-semibold">{card.title}</p>
                                        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                                            {card.bullets.map((b, j) => (
                                                <li key={j} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> {b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how" className="border-y bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">How it works</h2>
                    <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-4">
                        {[
                            { step: '1', title: 'Connect', desc: 'Securely connect Xero (QuickBooks coming soon).' },
                            { step: '2', title: 'Select agents', desc: 'Pick from our library or request bespoke agents.' },
                            { step: '3', title: 'Automate', desc: 'Run on schedules and triggers with review queues.' },
                            { step: '4', title: 'Scale', desc: 'Add agents as your practice grows.' },
                        ].map((s, i) => (
                            <div key={i} className="rounded-2xl border p-6 text-center shadow-sm dark:border-slate-800">
                                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full border text-sm font-bold dark:border-slate-700">{s.step}</div>
                                <p className="font-semibold">{s.title}</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social proof */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-8 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Built by Everpower Labs</h2>
                            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                                Everpower Labs is a Singapore based technology company specialising in Web3 and AI solutions. From decentralised platforms to intelligent agent systems, we build secure, scalable products used across APAC.
                            </p>
                            <ul className="mt-6 grid gap-3 text-sm text-slate-700 dark:text-slate-200 md:grid-cols-2">
                                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Enterprise grade security and encryption</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Role based access and audit trails</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Human in the loop controls</li>
                                <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Regional data residency options</li>
                            </ul>
                        </div>
                        <div className="rounded-3xl border p-6 text-sm dark:border-slate-800">
                            <p className="font-semibold">Customer spotlight</p>
                            <blockquote className="mt-3 border-l-2 pl-4 text-slate-600 dark:text-slate-300">
                                “With torkiq.ai, we cut reconciliation time by 70% and redirected staff to advisory work. Setup took under an hour.”
                            </blockquote>
                            <p className="mt-2 text-xs text-slate-500">— Beta user, Sydney</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="border-y bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
                <div className="mx-auto max-w-7xl px-6">
                    <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">Simple pricing</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600 dark:text-slate-300">Fair, transparent plans for firms of every size. Cancel anytime.</p>
                    <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
                        {[{
                            name: 'Starter', price: '$99/mo', tagline: 'Solo accountants & testers', features: ['1 user', 'Up to 2 agents', 'Email support']
                        }, {
                            name: 'Professional', price: '$299/mo', tagline: 'Growing practices', features: ['Up to 5 users', 'Up to 5 agents', 'Priority support']
                        }, {
                            name: 'Firm', price: 'Let’s talk', tagline: 'Larger firms & bespoke', features: ['Unlimited users', 'Custom agents', 'SLA & onboarding']
                        }].map((p, i) => (
                            <div key={i} className={`rounded-3xl border p-6 shadow-sm dark:border-slate-800 ${i === 1 ? 'ring-2 ring-teal-600' : ''}`}>
                                <p className="text-sm font-semibold">{p.name}</p>
                                <p className="mt-2 text-3xl font-extrabold">{p.price}</p>
                                <p className="text-sm text-slate-500">{p.tagline}</p>
                                <ul className="mt-4 space-y-2 text-sm">
                                    {p.features.map((f, j) => (
                                        <li key={j} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4" /> {f}</li>
                                    ))}
                                </ul>
                                <div className="mt-6"><CTAButton>Start free trial</CTAButton></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead capture */}
            <section id="get-started" className="py-16">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Get early access</h2>
                    <p className="mt-3 text-slate-600 dark:text-slate-300">Join the waitlist and be the first to try our Xero ready AI agents.</p>
                    <form className="mx-auto mt-6 flex max-w-xl flex-col items-center gap-3 sm:flex-row">
                        <div className="relative w-full">
                            <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input type="email" required placeholder="you@firm.com" className="w-full rounded-2xl border px-10 py-3 outline-none ring-indigo-500/30 focus:ring-4 dark:border-slate-800 dark:bg-slate-900" />
                        </div>
                        <button type="submit" data-testid="btn-waitlist" className="w-full rounded-2xl bg-teal-700 px-5 py-3 font-semibold text-white shadow-md transition hover:shadow-lg dark:bg-teal-600 dark:text-white sm:w-auto">Join waitlist</button>
                    </form>
                    <p className="mt-2 text-xs text-slate-500">We’ll never share your email. Unsubscribe anytime.</p>
                </div>
            </section>

            {/* Footer */}
            <footer id="about" className="border-t bg-white py-12 text-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
                    <div>
                        <p className="text-lg font-black">torkiq.ai</p>
                        <p className="mt-2 max-w-sm text-slate-600 dark:text-slate-300">The AI agent factory for accounting practitioners. Built for Xero. QuickBooks coming soon.</p>
                    </div>
                    <div>
                        <p className="font-semibold">About Everpower Labs</p>
                        <p className="mt-2 max-w-sm text-slate-600 dark:text-slate-300">
                            Everpower Labs is a Singapore based technology company specialising in Web3 and AI solutions. From decentralised platforms to intelligent agent systems, Everpower Labs builds secure, scalable products that help businesses automate and grow with confidence.
                        </p>
                    </div>
                    <div>
                        <p className="font-semibold">Legal</p>
                        <ul className="mt-2 space-y-2 text-slate-600 dark:text-slate-300">
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Terms of Use</a></li>
                            <li><a href="#" className="hover:underline">Security</a></li>
                        </ul>
                        <p className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} torkiq.ai — An Everpower Labs innovation. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
