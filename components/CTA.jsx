'use client';
import React from 'react';
import { useLead } from './LeadContext';

export default function CTA() {
    const { openPopup } = useLead();
    return (
        <section className="section-container" id="cta">
            <div className="section-header">
                <div className="section-tag">Ready to Transform</div>
                <h2 className="section-title gradient-text">Launch Your AI-Powered Site Today</h2>
                <p className="section-sub">Get a custom AI-driven website that works 24/7 for your business.</p>
            </div>
            <div className="cta-actions" style={{ textAlign: 'center', marginTop: '32px' }}>
                <button className="btn-primary btn-large" onClick={() => openPopup('cta_bottom')}>Get My Website</button>
            </div>
        </section>
    );
}
