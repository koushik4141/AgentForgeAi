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
        websiteType: 'Dental Clinic',
    });

    // Auto open based on context trigger
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
                handleClose();
                alert('Thank you! Your request has been received.');
            } else {
                const err = await res.json();
                alert('Error: ' + (err.error || 'Submission failed'));
            }
        } catch (err) {
            console.error(err);
            alert('Network error');
        }
    };

    if (!open) return null;

    return (
        <div className="lead-popup-overlay" onClick={handleClose}>
            <div className="lead-popup" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={handleClose} style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                }}>&times;</button>
                <h2>Get Your Website</h2>
                <form onSubmit={handleSubmit} className="lead-form">
                    <label>
                        Full Name
                        <input type="text" name="name" value={form.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Email Address
                        <input type="email" name="email" value={form.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Contact Number
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
                    </label>
                    <label>
                        Type of Website
                        <select name="websiteType" value={form.websiteType} onChange={handleChange}>
                            <option>Dental Clinic</option>
                            <option>Medical Clinic</option>
                            <option>Real Estate</option>
                            <option>Gym</option>
                            <option>Restaurant</option>
                            <option>Business Website</option>
                            <option>Other</option>
                        </select>
                    </label>
                    <button type="submit" className="btn-primary btn-large">Get My Website</button>
                </form>
            </div>
        </div>
    );
}
