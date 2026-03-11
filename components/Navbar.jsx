import React from 'react';
import Link from 'next/link';

export default function Navbar({ onCTAClick }) {
    return (
        <nav className="navbar scrolled">
            <div className="nav-container">
                <Link href="/" className="nav-logo">
                    <div className="logo-icon">
                        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="nG1" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#6366f1" />
                                    <stop offset="100%" stopColor="#06b6d4" />
                                </linearGradient>
                                <linearGradient id="nG2" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#4338ca" />
                                    <stop offset="100%" stopColor="#0891b2" />
                                </linearGradient>
                                <filter id="nGlow"><feGaussianBlur stdDeviation="1.2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                            </defs>
                            <circle cx="22" cy="22" r="20" fill="#6366f1" opacity=".1" />
                            <path d="M22 3 L39 13 L39 33 L22 43 L5 33 L5 13 Z" fill="url(#nG2)" opacity=".18" />
                            <path d="M22 3 L39 13 L39 33 L22 43 L5 33 L5 13 Z" fill="none" stroke="url(#nG1)" strokeWidth="1.3" opacity=".8" />
                            <line x1="22" y1="12" x2="11" y2="29" stroke="url(#nG1)" strokeWidth="1" opacity=".5" />
                            <line x1="22" y1="12" x2="33" y2="29" stroke="url(#nG1)" strokeWidth="1" opacity=".5" />
                            <line x1="11" y1="29" x2="33" y2="29" stroke="url(#nG1)" strokeWidth="1" opacity=".5" />
                            <line x1="22" y1="12" x2="22" y2="20" stroke="#22d3ee" strokeWidth=".9" opacity=".7" />
                            <line x1="11" y1="29" x2="20" y2="23" stroke="#22d3ee" strokeWidth=".9" opacity=".7" />
                            <line x1="33" y1="29" x2="24" y2="23" stroke="#22d3ee" strokeWidth=".9" opacity=".7" />
                            <circle cx="22" cy="22" r="3.5" fill="#060613" />
                            <circle cx="22" cy="22" r="3.5" fill="none" stroke="url(#nG1)" strokeWidth="1.1" />
                            <circle cx="22" cy="22" r="1.5" fill="#22d3ee" filter="url(#nGlow)" />
                            <circle cx="22" cy="12" r="2.5" fill="#060613" />
                            <circle cx="22" cy="12" r="2.5" fill="none" stroke="#818cf8" strokeWidth="1" />
                            <circle cx="22" cy="12" r="1.1" fill="#818cf8" filter="url(#nGlow)" />
                            <circle cx="11" cy="29" r="2" fill="#060613" />
                            <circle cx="11" cy="29" r="2" fill="none" stroke="#06b6d4" strokeWidth="1" />
                            <circle cx="11" cy="29" r=".9" fill="#06b6d4" filter="url(#nGlow)" />
                            <circle cx="33" cy="29" r="2" fill="#060613" />
                            <circle cx="33" cy="29" r="2" fill="none" stroke="#06b6d4" strokeWidth="1" />
                            <circle cx="33" cy="29" r=".9" fill="#06b6d4" filter="url(#nGlow)" />
                            <path d="M20.5 6 L22 2 L23.5 6" fill="none" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity=".75" />
                        </svg>
                    </div>
                    <span>AgentForge <span className="logo-accent">AI</span></span>
                </Link>
                <div className="nav-links">
                    <Link href="/platform">Platform</Link>
                    <Link href="/how-it-works">How It Works</Link>
                    <Link href="/results">Results</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/testimonials">Testimonials</Link>
                </div>
                <div className="nav-cta">
                    <button className="btn-primary-sm btn-glow" onClick={onCTAClick}>Start Free Demo</button>
                </div>
            </div>
        </nav>
    );
}
