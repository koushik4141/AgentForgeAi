import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#" className="nav-logo">
                            <div className="logo-icon">
                                <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="fG1" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#6366f1" />
                                            <stop offset="100%" stopColor="#06b6d4" />
                                        </linearGradient>
                                        <linearGradient id="fG2" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" stopColor="#4338ca" />
                                            <stop offset="100%" stopColor="#0891b2" />
                                        </linearGradient>
                                        <filter id="fGlow">
                                            <feGaussianBlur stdDeviation="1.2" result="b" />
                                            <feMerge>
                                                <feMergeNode in="b" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    <circle cx="22" cy="22" r="20" fill="#6366f1" opacity=".1" />
                                    <path d="M22 3 L39 13 L39 33 L22 43 L5 33 L5 13 Z" fill="url(#fG2)" opacity=".18" />
                                    <path d="M22 3 L39 13 L39 33 L22 43 L5 33 L5 13 Z" fill="none" stroke="url(#fG1)" strokeWidth="1.3" opacity=".8" />
                                    <line x1="22" y1="12" x2="11" y2="29" stroke="url(#fG1)" strokeWidth="1" opacity=".5" />
                                    <line x1="22" y1="12" x2="33" y2="29" stroke="url(#fG1)" strokeWidth="1" opacity=".5" />
                                    <line x1="11" y1="29" x2="33" y2="29" stroke="url(#fG1)" strokeWidth="1" opacity=".5" />
                                    <line x1="22" y1="12" x2="22" y2="20" stroke="#22d3ee" strokeWidth=".9" opacity=".7" />
                                    <line x1="11" y1="29" x2="20" y2="23" stroke="#22d3ee" strokeWidth=".9" opacity=".7" />
                                    <line x1="33" y1="29" x2="24" y2="23" stroke="#22d3ee" strokeWidth=".9" opacity=".7" />
                                    <circle cx="22" cy="22" r="3.5" fill="#060613" />
                                    <circle cx="22" cy="22" r="3.5" fill="none" stroke="url(#fG1)" strokeWidth="1.1" />
                                    <circle cx="22" cy="22" r="1.5" fill="#22d3ee" filter="url(#fGlow)" />
                                    <circle cx="22" cy="12" r="2.5" fill="#060613" />
                                    <circle cx="22" cy="12" r="2.5" fill="none" stroke="#818cf8" strokeWidth="1" />
                                    <circle cx="22" cy="12" r="1.1" fill="#818cf8" filter="url(#fGlow)" />
                                    <circle cx="11" cy="29" r="2" fill="#060613" />
                                    <circle cx="11" cy="29" r="2" fill="none" stroke="#06b6d4" strokeWidth="1" />
                                    <circle cx="11" cy="29" r=".9" fill="#06b6d4" filter="url(#fGlow)" />
                                    <circle cx="33" cy="29" r="2" fill="#060613" />
                                    <circle cx="33" cy="29" r="2" fill="none" stroke="#06b6d4" strokeWidth="1" />
                                    <circle cx="33" cy="29" r=".9" fill="#06b6d4" filter="url(#fGlow)" />
                                    <path d="M20.5 6 L22 2 L23.5 6" fill="none" stroke="#22d3ee" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity=".75" />
                                </svg>
                            </div>
                            <span>AgentForge <span className="logo-accent">AI</span></span>
                        </a>
                        <p className="footer-tagline">The AI platform that runs your business 24/7 — so you don't have to.</p>
                        <div className="footer-socials">
                            {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map(social => (
                                <a key={social} href="#" className="social-icon" aria-label={social}>
                                    {/* SVG icons would go here */}
                                    <div style={{ fontSize: '0.8rem' }}>{social.charAt(0)}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h5>Product</h5>
                            <ul>
                                <li><a href="#platform">AI Website Builder</a></li>
                                <li><a href="#platform">WhatsApp Automation</a></li>
                                <li><a href="#platform">Customer Support AI</a></li>
                                <li><a href="#platform">Lead Capture</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5>Industries</h5>
                            <ul>
                                <li><a href="#">Real Estate</a></li>
                                <li><a href="#">Healthcare</a></li>
                                <li><a href="#">eCommerce</a></li>
                                <li><a href="#">Education</a></li>
                                <li><a href="#">Hospitality</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5>Resources</h5>
                            <ul>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Case Studies</a></li>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">API Reference</a></li>
                                <li><a href="#">Changelog</a></li>
                            </ul>
                        </div>
                        <div className="footer-col" id="contact">
                            <h5>Contact</h5>
                            <ul>
                                <li><a href="mailto:hello@agentforge.ai">hello@agentforge.ai</a></li>
                                <li><a href="tel:+919133983607">+91 91339 83607</a></li>
                                <li>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: '8px 0' }}>
                                        Puttenahalli, JP Nagar 7th Phase, J. P. Nagar<br />
                                        Bengaluru, Karnataka 560078
                                    </p>
                                </li>
                                <li><a href="#demo">Book a Demo</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 AgentForge AI. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
