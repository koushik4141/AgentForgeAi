'use client';
import React from 'react';

export default function ProductUI() {
    return (
        <section className="product-ui" id="product">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-tag">Product</div>
                    <h2 className="section-title">Designed For <span className="gradient-text">Modern Businesses</span></h2>
                    <p className="section-sub">Every interface built for clarity, speed, and conversion.</p>
                </div>
                <div className="product-grid">

                    <div className="product-card large">
                        <div className="product-card-label">AI Dashboard</div>
                        <div className="product-ui-mockup dashboard-full">
                            <div className="df-sidebar">
                                <div className="df-nav-item active">🏠</div>
                                <div className="df-nav-item">💬</div>
                                <div className="df-nav-item">📊</div>
                                <div className="df-nav-item">⚙️</div>
                            </div>
                            <div className="df-main">
                                <div className="df-stats">
                                    <div className="df-stat-box" style={{ '--c': '#6366f1' }}>
                                        <div className="df-stat-num">2.4K</div>
                                        <div className="df-stat-label">Leads</div>
                                    </div>
                                    <div className="df-stat-box" style={{ '--c': '#06b6d4' }}>
                                        <div className="df-stat-num">98%</div>
                                        <div className="df-stat-label">Uptime</div>
                                    </div>
                                    <div className="df-stat-box" style={{ '--c': '#10b981' }}>
                                        <div className="df-stat-num">5.1K</div>
                                        <div className="df-stat-label">Messages</div>
                                    </div>
                                </div>
                                <div className="df-chart-area">
                                    {[60, 80, 45, 95, 70, 85, 55].map((h, i) => (
                                        <div key={i} className="df-chart-bar" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-card-label">Chat Interface</div>
                        <div className="product-ui-mockup chat-full">
                            <div className="cf-msg bot">How can I help you today?</div>
                            <div className="cf-msg user">Tell me about your services</div>
                            <div className="cf-msg bot">We offer AI-powered automation for websites, WhatsApp, and customer support. Want to see a demo? 🚀</div>
                            <div className="cf-input">
                                <div className="cf-input-bar">Type a message...</div>
                                <div className="cf-send">→</div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-card-label">Automation Builder</div>
                        <div className="product-ui-mockup builder-full">
                            <div className="bf-step">
                                <div className="bf-icon" style={{ background: 'rgba(99,102,241,.2)', color: '#818cf8' }}>⚡</div>
                                <div className="bf-text">Trigger: New Message</div>
                                <div className="bf-check">✓</div>
                            </div>
                            <div className="bf-arrow">↓</div>
                            <div className="bf-step">
                                <div className="bf-icon" style={{ background: 'rgba(6,182,212,.2)', color: '#22d3ee' }}>🤖</div>
                                <div className="bf-text">AI: Classify Intent</div>
                                <div className="bf-check">✓</div>
                            </div>
                            <div className="bf-arrow">↓</div>
                            <div className="bf-step active">
                                <div className="bf-icon" style={{ background: 'rgba(16,185,129,.2)', color: '#34d399' }}>📅</div>
                                <div className="bf-text">Action: Book Slot</div>
                                <div className="bf-check">⟳</div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-card-label">Analytics Panel</div>
                        <div className="product-ui-mockup analytics-full">
                            {[
                                { label: 'Conversion Rate', val: '74%', color: '#6366f1', w: '74%' },
                                { label: 'Response Rate', val: '92%', color: '#06b6d4', w: '92%' },
                                { label: 'Lead Quality', val: '61%', color: '#10b981', w: '61%' },
                                { label: 'Satisfaction', val: '98%', color: '#f59e0b', w: '98%' },
                            ].map((row, i) => (
                                <div key={i} className="af-row">
                                    <div className="af-label">{row.label}</div>
                                    <div className="af-bar"><div className="af-fill" style={{ width: row.w, background: row.color }}></div></div>
                                    <div className="af-val">{row.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
