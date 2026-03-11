import React from 'react';
import NetworkCanvas from './NetworkCanvas';
import { useLead } from './LeadContext';
import Link from 'next/link';

export default function Hero() {
    const { openPopup } = useLead();
    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <NetworkCanvas />
                <div className="hero-glow glow-1"></div>
                <div className="hero-glow glow-2"></div>
                <div className="hero-glow glow-3"></div>
            </div>

            <div className="hero-container">
                <div className="hero-left">
                    <div className="badge">
                        <span className="badge-dot"></span>
                        <span>AI-Powered Business Automation</span>
                    </div>
                    <h1 className="hero-headline">
                        AI Agents That<br />
                        <span className="gradient-text">Run Your Business</span>
                    </h1>
                    <p className="hero-sub">
                        Launch powerful websites, WhatsApp automation, and AI agents that capture leads and respond to customers
                        <strong> 24/7.</strong>
                    </p>
                    <div className="hero-actions">
                        <button key="hero-cta" onClick={() => openPopup('cta')} className="btn-primary btn-glow">
                            <span>Start Free Demo</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <Link href="/how-it-works" className="btn-ghost">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M6.5 5.5L10.5 8l-4 2.5V5.5Z" fill="currentColor" />
                            </svg>
                            <span>See How It Works</span>
                        </Link>
                    </div>
                    <div className="hero-social-proof">
                        <div className="proof-avatars">
                            <div className="avatar" style={{ background: 'linear-gradient(135deg,#f43f5e,#fb923c)' }}>A</div>
                            <div className="avatar" style={{ background: 'linear-gradient(135deg,#8b5cf6,#6366f1)' }}>R</div>
                            <div className="avatar" style={{ background: 'linear-gradient(135deg,#06b6d4,#3b82f6)' }}>M</div>
                            <div className="avatar" style={{ background: 'linear-gradient(135deg,#10b981,#06b6d4)' }}>S</div>
                        </div>
                        <div className="proof-text">
                            <span className="proof-num">100+</span> Businesses automated this month
                        </div>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="dashboard-mockup">
                        <div className="mockup-header">
                            <div className="mockup-dots">
                                <span style={{ background: '#ff5f57' }}></span>
                                <span style={{ background: '#ffbd2e' }}></span>
                                <span style={{ background: '#28c840' }}></span>
                            </div>
                            <span className="mockup-title">AgentForge Dashboard</span>
                        </div>
                        <div className="mockup-body">
                            <div className="mockup-panel chat-panel">
                                <div className="panel-label">AI Chat Agent</div>
                                <div className="chat-msg ai-msg">
                                    <div className="chat-avatar">AI</div>
                                    <div className="chat-bubble">Hi! How can I help you today? 👋</div>
                                </div>
                                <div className="chat-msg user-msg">
                                    <div className="chat-bubble">I need help with pricing</div>
                                </div>
                                <div className="chat-msg ai-msg">
                                    <div className="chat-avatar">AI</div>
                                    <div className="chat-bubble typing"><span></span><span></span><span></span></div>
                                </div>
                            </div>
                            <div className="mockup-panel analytics-panel">
                                <div className="panel-label">Live Analytics</div>
                                <div className="analytics-bars">
                                    {[45, 70, 55, 90, 60, 80].map((h, i) => (
                                        <div key={i} className="bar-col">
                                            <div className={`bar-fill ${h === 90 ? 'highlight' : ''}`} style={{ height: `${h}%` }}></div>
                                            <span>{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i]}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="analytics-stat">+47% <span>this week</span></div>
                            </div>
                            <div className="mockup-panel workflow-panel">
                                <div className="panel-label">Automation Flow</div>
                                <div className="workflow-nodes">
                                    <div className="wf-node active">Lead In</div>
                                    <div className="wf-arrow">→</div>
                                    <div className="wf-node">AI Reply</div>
                                    <div className="wf-arrow">→</div>
                                    <div className="wf-node pulse">Book</div>
                                </div>
                            </div>
                        </div>
                        <div className="float-card float-1">
                            <div className="float-icon">🎯</div>
                            <div className="float-text"><strong>New Lead!</strong><span>Ravi K. – Mumbai</span></div>
                        </div>
                        <div className="float-card float-2">
                            <div className="float-icon">✅</div>
                            <div className="float-text"><strong>Booked</strong><span>Appointment confirmed</span></div>
                        </div>
                        <div className="float-card float-3">
                            <div className="float-icon">⚡</div>
                            <div className="float-text"><strong>24/7 Active</strong><span>AI Agent running</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
