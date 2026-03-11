import React from 'react';

export default function TrustBar() {
    const industries = ['Real Estate', 'Healthcare', 'eCommerce', 'Education', 'Hospitality', 'Finance'];
    return (
        <section className="trust-bar">
            <div className="trust-container">
                <p className="trust-label">Powering businesses across India</p>
                <div className="trust-logos">
                    {industries.map((industry, i) => (
                        <div key={i} className="trust-logo">{industry}</div>
                    ))}
                </div>
            </div>
        </section>
    );
}
