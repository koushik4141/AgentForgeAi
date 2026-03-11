'use client';
import React from 'react';

export default function Projects() {
    const demos = [
        {
            title: 'WebClinic',
            category: 'Healthcare & Management',
            image: '/healthcare.png',
            desc: 'A complete medical clinic solution with appointment scheduling, patient records, and automated WhatsApp reminders.',
            url: 'https://webclinc.netlify.app/',
            featured: true
        },
        {
            title: 'Elite Estates',
            category: 'Real Estate Platform',
            image: '/real_estate.png',
            desc: 'Visual property discovery, interactive maps, and AI lead qualification for high-end luxury brokers.',
            url: '#'
        },
        {
            title: 'Nova Store',
            category: 'Premium eCommerce',
            image: '/ecommerce.png',
            desc: 'Lightning-fast shopping experience with smart search, optimized checkout, and seamless inventory sync.',
            url: '#'
        },
        {
            title: 'EduSpark',
            category: 'Learning Management',
            image: '/education.png',
            desc: 'Modern LMS platform with student progression tracking, interactive lessons, and certificate generation.',
            url: '#'
        },
        {
            title: 'Azure Resort',
            category: 'Hospitality & Travel',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
            desc: 'Luxury hotel booking system with availability calendars, room showcases, and 24/7 concierge bot.',
            url: '#'
        },
        {
            title: 'AI CFO',
            category: 'Fintech Dashboard',
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
            desc: 'Intelligent expense monitoring, cash flow forecasting, and AI-powered investment advice for retail users.',
            url: '#'
        },
        {
            title: 'Nexus SaaS',
            category: 'Productivity Application',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            desc: 'A high-performance B2B dashboard with multi-tenant support, analytics, and collaborative workflow tools.',
            url: '#'
        },
        {
            title: 'Studio X',
            category: 'Creative Portfolio',
            image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
            desc: 'Minimalist photography and art portfolio designed to showcase high-resolution work with smooth transitions.',
            url: '#'
        }
    ];

    return (
        <section className="section-container" id="demos">
            <div className="section-header">
                <div className="section-tag">Showcase</div>
                <h2 className="section-title">Industry-Specific <span className="gradient-text">Solutions</span></h2>
                <p className="section-sub">Explore our pre-built high-converting website designs tailored for your niche.</p>
            </div>
            <div className="projects-grid">
                {demos.map((demo, i) => (
                    <div key={i} className={`project-card ${demo.featured ? 'featured-project' : ''}`}>
                        <div className="project-image-wrap">
                            <img
                                src={demo.image}
                                alt={demo.title}
                                className="demo-img"
                            />
                            {demo.featured && (
                                <div className="featured-label">Live Project</div>
                            )}
                            {!demo.featured && (
                                <div className="live-label">Ready to Launch</div>
                            )}
                        </div>
                        <div className="project-content">
                            <div className="project-category">
                                {demo.category}
                            </div>
                            <h3 className="project-title">{demo.title}</h3>
                            <p className="project-desc">
                                {demo.desc}
                            </p>
                            <a 
                                href={demo.url} 
                                target={demo.url === '#' ? '_self' : '_blank'} 
                                rel="noopener noreferrer"
                                className="project-btn"
                            >
                                {demo.url === '#' ? 'Request Preview' : 'View Live Website'} <span>→</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
