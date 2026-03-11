'use client';
import React from 'react';

export default function Platform() {
    return (
        <section className="platform" id="platform">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-tag">Platform</div>
                    <h2 className="section-title">The <span className="gradient-text">AgentForge AI</span> Platform</h2>
                    <p className="section-sub">Four powerful modules working together to automate your entire business pipeline.</p>
                </div>
                <div className="platform-grid">

                    <div className="platform-card">
                        <div className="card-icon-wrap" style={{ '--c1': '#6366f1', '--c2': '#818cf8' }}>
                            <svg viewBox="0 0 40 40" fill="none">
                                <rect x="6" y="6" width="28" height="4" rx="2" fill="url(#ic1)" />
                                <rect x="6" y="13" width="18" height="3" rx="1.5" fill="url(#ic1)" opacity=".7" />
                                <rect x="6" y="19" width="22" height="3" rx="1.5" fill="url(#ic1)" opacity=".5" />
                                <rect x="6" y="25" width="14" height="3" rx="1.5" fill="url(#ic1)" opacity=".3" />
                                <rect x="6" y="31" width="28" height="3" rx="1.5" fill="url(#ic1)" opacity=".6" />
                                <defs>
                                    <linearGradient id="ic1" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6366f1" />
                                        <stop offset="1" stopColor="#818cf8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="card-number">01</div>
                        <h3>AI Website Builder</h3>
                        <p>Create high-converting business websites in minutes. Fully optimized, SEO-ready, and built for lead generation.</p>
                        <div className="card-ui-preview website-preview">
                            <div className="wp-bar"><span></span><span></span><span></span></div>
                            <div className="wp-hero">
                                <div className="wp-line wp-h1"></div>
                                <div className="wp-line wp-h2"></div>
                                <div className="wp-btn">Launch Site</div>
                            </div>
                        </div>
                    </div>

                    <div className="platform-card featured">
                        <div className="card-badge">Most Popular</div>
                        <div className="card-icon-wrap" style={{ '--c1': '#10b981', '--c2': '#06d6a0' }}>
                            <svg viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="20" r="14" stroke="url(#ic2)" strokeWidth="2" />
                                <path d="M14 22 Q20 14 26 22" stroke="url(#ic2)" strokeWidth="2" fill="none" strokeLinecap="round" />
                                <circle cx="20" cy="25" r="3" fill="url(#ic2)" />
                                <defs>
                                    <linearGradient id="ic2" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#10b981" />
                                        <stop offset="1" stopColor="#06d6a0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="card-number">02</div>
                        <h3>WhatsApp Automation Engine</h3>
                        <p>Automate customer conversations and bookings instantly. Reply, qualify, and convert leads while you sleep.</p>
                        <div className="card-ui-preview whatsapp-preview">
                            <div className="wa-header">
                                <div className="wa-avatar">W</div>
                                <div className="wa-name">AgentForge Bot</div>
                                <div className="wa-status">● Online</div>
                            </div>
                            <div className="wa-msg bot">Hello! How can I help? 👋</div>
                            <div className="wa-msg user">Book appointment</div>
                            <div className="wa-msg bot">Sure! Choose a date 📅</div>
                        </div>
                    </div>

                    <div className="platform-card">
                        <div className="card-icon-wrap" style={{ '--c1': '#f59e0b', '--c2': '#fbbf24' }}>
                            <svg viewBox="0 0 40 40" fill="none">
                                <circle cx="20" cy="14" r="6" stroke="url(#ic3)" strokeWidth="2" />
                                <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="url(#ic3)" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="28" cy="24" r="4" fill="url(#ic3)" opacity=".9" />
                                <path d="M26 24h4M28 22v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="ic3" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#f59e0b" />
                                        <stop offset="1" stopColor="#fbbf24" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="card-number">03</div>
                        <h3>AI Customer Support Agent</h3>
                        <p>An AI assistant that responds to customers 24/7. Handles FAQs, complaints, and handoffs to humans seamlessly.</p>
                        <div className="card-ui-preview support-preview">
                            <div className="sp-row"><div className="sp-dot green"></div><span>247 tickets resolved today</span></div>
                            <div className="sp-row"><div className="sp-dot blue"></div><span>Avg. response: 0.3s</span></div>
                            <div className="sp-row"><div className="sp-dot purple"></div><span>98.4% satisfaction rate</span></div>
                        </div>
                    </div>

                    <div className="platform-card">
                        <div className="card-icon-wrap" style={{ '--c1': '#ec4899', '--c2': '#f472b6' }}>
                            <svg viewBox="0 0 40 40" fill="none">
                                <rect x="6" y="10" width="12" height="8" rx="2" stroke="url(#ic4)" strokeWidth="1.8" />
                                <rect x="22" y="10" width="12" height="8" rx="2" stroke="url(#ic4)" strokeWidth="1.8" />
                                <rect x="14" y="24" width="12" height="8" rx="2" fill="url(#ic4)" />
                                <path d="M12 18v3M28 18v3M20 18v3" stroke="url(#ic4)" strokeWidth="1.8" strokeLinecap="round" />
                                <path d="M12 21h16" stroke="url(#ic4)" strokeWidth="1.8" strokeLinecap="round" />
                                <defs>
                                    <linearGradient id="ic4" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#ec4899" />
                                        <stop offset="1" stopColor="#f472b6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="card-number">04</div>
                        <h3>Lead Capture Automation</h3>
                        <p>Automatically capture, qualify, and manage leads. Every visitor becomes an opportunity with intelligent lead routing.</p>
                        <div className="card-ui-preview lead-preview">
                            <div className="lead-item">
                                <div className="lead-dot pulse-green"></div>
                                <div><div className="lead-name">Priya Sharma</div><div className="lead-info">Mumbai · High Intent</div></div>
                                <div className="lead-score">92</div>
                            </div>
                            <div className="lead-item">
                                <div className="lead-dot"></div>
                                <div><div className="lead-name">Amit Patel</div><div className="lead-info">Delhi · Medium Intent</div></div>
                                <div className="lead-score">67</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
