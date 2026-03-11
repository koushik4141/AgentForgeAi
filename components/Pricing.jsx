'use client';
import React from 'react';
import { useLead } from './LeadContext';

export default function Pricing() {
    const { openPopup } = useLead();
    return (
        <section className="section-container" id="pricing">
            <div className="section-header">
                <div className="section-tag">Pricing</div>
                <h2 className="section-title gradient-text">Website Packages</h2>
                <p className="section-sub">Specially designed packages for Interior Designers and small businesses.</p>
            </div>
            <div className="pricing-plans" style={{
                display: 'flex',
                gap: '24px',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                {/* Plan 1 – Basic */}
                <div className="plan-card" style={{
                    background: 'var(--bg2)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '30px',
                    width: '320px',
                    border: '1px solid var(--border2)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease'
                }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#fff' }}>Basic Plan</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>Single Page Website</p>
                    <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '20px 0', color: 'var(--primary)' }}>₹1,999</p>
                    <ul style={{ marginBottom: 'auto', paddingLeft: '0', listStyle: 'none' }}>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> Business Landing Page
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> Mobile Responsive Design
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> Contact Form Integration
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> Social Media Linking
                        </li>
                        <li style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.6 }}>
                            <span style={{ color: '#ef4444' }}>✕</span> Multi-page structure
                        </li>
                    </ul>
                    <button className="btn-primary btn-large" style={{ width: '100%' }} onClick={() => openPopup('cta_basic')}>Get Started</button>
                </div>

                {/* Plan 2 – Standard */}
                <div className="plan-card recommended" style={{
                    background: 'var(--bg2)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '30px',
                    width: '320px',
                    border: '2px solid var(--primary)',
                    boxShadow: '0 0 30px rgba(99,102,241,.4)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    transform: 'scale(1.05)',
                    zIndex: 2,
                    transition: 'all 0.3s ease'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'var(--primary)',
                        padding: '4px 16px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '700'
                    }}>MOST POPULAR</div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#fff' }}>Standard Plan</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>5 Pages Website</p>
                    <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '20px 0', color: 'var(--primary)' }}>₹4,999</p>
                    <ul style={{ marginBottom: 'auto', paddingLeft: '0', listStyle: 'none' }}>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> Complete 5-Page Website
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> Premium Design Templates
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> SEO Optimization Starter
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> WhatsApp Chat Integration
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> Free SSL Certificate
                        </li>
                    </ul>
                    <button className="btn-primary btn-large" style={{ width: '100%', marginTop: '20px' }} onClick={() => openPopup('cta_standard')}>Select Standard</button>
                </div>

                {/* Plan 3 – Premium */}
                <div className="plan-card" style={{
                    background: 'var(--bg2)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '30px',
                    width: '320px',
                    border: '1px solid var(--border2)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease'
                }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: '#fff' }}>Premium Plan</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>Up to 20 Pages + Advanced Features</p>
                    <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: '20px 0', color: 'var(--primary)' }}>₹9,999</p>
                    <ul style={{ marginBottom: 'auto', paddingLeft: '0', listStyle: 'none' }}>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> Full Custom Multi-page Site
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> Advanced Animations & UI
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> Blog or Portfolio Setup
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> E-commerce / Booking Ready
                        </li>
                        <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ color: '#10b981' }}>✓</span> Priority Support (1 Year)
                        </li>
                    </ul>
                    <button className="btn-primary btn-large" style={{ width: '100%', marginTop: '20px' }} onClick={() => openPopup('cta_premium')}>Get Premium</button>
                </div>
            </div>
        </section>
    );
}
