'use client';
import React, { useEffect, useState } from 'react';

const CountUp = ({ end, suffix = '' }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [end]);
    return <span>{count}{suffix}</span>;
};

export default function Results() {
    const stats = [
        { num: 300, suffix: '%', label: 'Faster Response Time', desc: 'AI replies in milliseconds, not hours' },
        { num: 24, suffix: '/7', label: 'Automated Support', desc: 'Never miss a customer again' },
        { num: 5, suffix: 'M+', label: 'Automated Conversations', desc: 'Across all channels combined' },
        { num: 100, suffix: '+', label: 'Businesses Automated', desc: 'And growing every week' },
    ];

    return (
        <section className="results" id="results">
            <div className="results-bg"></div>
            <div className="section-container">
                <div className="section-header">
                    <div className="section-tag">Results</div>
                    <h2 className="section-title">Numbers That <span className="gradient-text">Speak</span></h2>
                </div>
                <div className="results-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="result-card">
                            <div className="result-number">
                                <CountUp end={stat.num} suffix={stat.suffix} />
                            </div>
                            <div className="result-label">{stat.label}</div>
                            <div className="result-desc">{stat.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
