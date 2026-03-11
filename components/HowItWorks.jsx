'use client';
import React from 'react';

export default function HowItWorks() {
    const steps = [
        {
            num: '01', title: 'Customer Message', desc: 'Visitor sends a WhatsApp, web chat, or form inquiry.', color: '#6366f1', icon: (
                <svg viewBox="0 0 24 24" fill="none"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Z" fill="currentColor" /></svg>
            )
        },
        {
            num: '02', title: 'AI Agent Replies', desc: 'AI instantly understands context and responds intelligently within milliseconds.', color: '#06b6d4', icon: (
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" /><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            )
        },
        {
            num: '03', title: 'Lead Captured', desc: 'Contact details, intent and qualification score are automatically logged to your CRM.', color: '#10b981', icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M20 8v6M23 11h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            )
        },
        {
            num: '04', title: 'Appointment Booked', desc: 'AI books a slot in your calendar and sends confirmation to both parties.', color: '#f59e0b', icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            )
        },
        {
            num: '05', title: 'Business Notified', desc: 'You get an instant notification. Close the deal. The AI handled everything else.', color: '#ec4899', icon: (
                <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.88 12 19.79 19.79 0 0 1 1.85 3.42 2 2 0 0 1 3.82 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.04a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="1.8" />
                </svg>
            )
        },
    ];

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-tag">Automation Intelligence</div>
                    <h2 className="section-title">See The <span className="gradient-text">AI In Action</span></h2>
                    <p className="section-sub">From first message to booked appointment — fully automated, zero manual effort.</p>
                </div>
                <div className="workflow-diagram">
                    {steps.map((step, i) => (
                        <React.Fragment key={i}>
                            <div className="wf-step">
                                <div className="wf-step-icon" style={{ '--c': step.color }}>{step.icon}</div>
                                <div className="wf-step-num">{step.num}</div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="wf-connector">
                                    <div className="wf-line"></div>
                                    <div className="wf-pulse"></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
