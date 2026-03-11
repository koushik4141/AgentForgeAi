'use client';
import React, { useState, useEffect } from 'react';
import { useLead } from './LeadContext';

export default function LeadPopup() {
    const { popupTrigger, closePopup } = useLead();
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        websiteType: 'Business Website',
        purpose: ''
    });

    useEffect(() => {
        if (popupTrigger && !open && !submitted) {
            setOpen(true);
        }
    }, [popupTrigger, open, submitted]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleClose = () => {
        setOpen(false);
        closePopup();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setSubmitted(true);
                setOpen(false);
                closePopup();
                alert('Success! We will contact you shortly to start your website.');
            } else {
                const err = await res.json();
                alert('Error: ' + (err.error || 'Submission failed'));
            }
        } catch (err) {
            console.error(err);
            alert('Submission failed. Please check your connection.');
        }
    };

    if (!open) return null;

    return (
        <div className="lead-popup-overlay" onClick={handleClose}>
            <div className="lead-popup" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={handleClose}>&times;</button>
                <div className="popup-header">
                    <h2>Launch Your <span className="gradient-text">AI Website</span></h2>
                    <p>Enter your details below and our team will build your custom website.</p>
                </div>
                <form onSubmit={handleSubmit} className="lead-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Industry / Website Type</label>
                        <select name="websiteType" value={form.websiteType} onChange={handleChange}>
                            <option>Business Website</option>
                            <option>Health Clinic / Dental</option>
                            <option>Real Estate</option>
                            <option>E-commerce Shop</option>
                            <option>Personal Portfolio</option>
                            <option>Restaurant / Cafe</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Purpose of Website</label>
                        <textarea 
                            name="purpose" 
                            rows="3" 
                            placeholder="Briefly describe what you want to achieve (e.g., I want to book appointments for my clinic)" 
                            value={form.purpose} 
                            onChange={handleChange} 
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-primary btn-full">Build My Website Now</button>
                    <p className="form-footer">No credit card required. Free demo included.</p>
                </form>
            </div>
        </div>
    );
}
