import React from 'react';

export default function Testimonials() {
    const list = [
        {
            stars: '★★★★★',
            text: '"AgentForge completely transformed our lead generation. We went from manually replying to hundreds of WhatsApp messages to having it done automatically. Our bookings increased 3x in the first month."',
            author: 'Ravi Mehta',
            role: 'Real Estate Agency, Mumbai',
            initial: 'R',
            color: '#6366f1'
        },
        {
            stars: '★★★★★',
            text: '"The WhatsApp automation is a game-changer. Our AI agent handles 200+ customer queries every day without any human intervention. Our team can now focus on closing deals instead of answering the same questions."',
            author: 'Priya Kapoor',
            role: 'Healthcare Clinic, Delhi',
            initial: 'P',
            color: '#10b981',
            featured: true
        },
        {
            stars: '★★★★★',
            text: '"We were skeptical at first, but within 2 weeks, we could see the difference. The lead capture automation is incredibly smart — it qualifies leads before we even talk to them. Highly recommended!"',
            author: 'Arjun Singh',
            role: 'eCommerce Store, Bangalore',
            initial: 'A',
            color: '#f59e0b'
        }
    ];

    return (
        <section className="testimonials" id="testimonials">
            <div className="section-container">
                <div className="section-header">
                    <div className="section-tag">Testimonials</div>
                    <h2 className="section-title">Loved By <span className="gradient-text">Business Owners</span></h2>
                </div>
                <div className="testimonials-grid">
                    {list.map((t, i) => (
                        <div key={i} className={`testimonial-card ${t.featured ? 'featured' : ''}`}>
                            <div className="stars">{t.stars}</div>
                            <p>{t.text}</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar" style={{ background: t.color }}>{t.initial}</div>
                                <div>
                                    <strong>{t.author}</strong>
                                    <span>{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
