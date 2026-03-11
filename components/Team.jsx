import React from 'react';

export default function Team() {
    const team = [
        {
            name: 'Koushik',
            role: 'BTech AI Engineer Specialist',
            image: '/koushik.jpg',
            desc: 'Expert in designing and deploying intelligent AI agents that automate business workflows and customer interactions.'
        },
        {
            name: 'Keshava',
            role: 'BTech Full Stack Developer',
            image: '/keshava.jpg',
            desc: 'Specialist in building robust, scalable web applications with a focus on seamless user experience and high performance.'
        }
    ];

    return (
        <section className="section-container" id="team">
            <div className="section-header">
                <div className="section-tag">Our Experts</div>
                <h2 className="section-title gradient-text">Meet the Visionaries</h2>
                <p className="section-sub">The technical expertise behind AgentForge AI's automation platform.</p>
            </div>
            <div className="team-grid" style={{
                display: 'flex',
                gap: '40px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '40px'
            }}>
                {team.map((member, i) => (
                    <div key={i} className="team-card" style={{
                        background: 'var(--bg2)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '30px',
                        width: '350px',
                        border: '1px solid var(--border2)',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            marginBottom: '20px',
                            border: '4px solid var(--primary)',
                            boxShadow: '0 0 20px rgba(99,102,241,0.3)'
                        }}>
                            <img
                                src={member.image}
                                alt={member.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <h3 style={{ fontSize: '1.6rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{member.name}</h3>
                        <p style={{
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            color: 'var(--primary)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '15px'
                        }}>{member.role}</p>
                        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{member.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
