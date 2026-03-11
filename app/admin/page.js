'use client';
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const [leads, setLeads] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const res = await fetch('/api/auth/me');
            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
                fetchLeads();
            } else {
                router.push('/login');
            }
        } catch (err) {
            router.push('/login');
        } finally {
            setLoading(false);
        }
    };

    const fetchLeads = async () => {
        const res = await fetch('/api/admin/leads');
        if (res.ok) {
            const data = await res.json();
            setLeads(data);
        }
    };

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/login');
    };

    const exportCSV = () => {
        const headers = ['Name', 'Email', 'Phone', 'Website Type', 'Date'];
        const rows = leads.map(l => [l.name, l.email, l.phone, l.websiteType, new Date(l.createdAt).toLocaleString()]);
        const content = [headers, ...rows].map(r => r.join(',')).join('\n');
        const blob = new Blob([content], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'leads.csv';
        a.click();
    };

    if (loading) {
        return (
            <div style={{ background: '#060613', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <div className="loader">Loading Dashboard...</div>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div style={{ background: '#060613', minHeight: '100vh', padding: '40px', color: '#fff', fontFamily: 'Inter' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <div>
                        <h1 style={{ marginBottom: '4px' }}>Dashboard</h1>
                        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Welcome back, <span style={{ color: '#22d3ee', fontWeight: 'bold' }}>{user?.name}</span></p>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button onClick={exportCSV} className="btn-secondary" style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', cursor: 'pointer' }}>Export CSV</button>
                        <button onClick={handleLogout} className="btn-primary" style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Logout</button>
                    </div>
                </div>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#0d0d20', borderRadius: '12px', overflow: 'hidden' }}>
                    <thead>
                        <tr style={{ background: 'rgba(255,255,255,.05)', textAlign: 'left' }}>
                            <th style={{ padding: '16px' }}>Name</th>
                            <th style={{ padding: '16px' }}>Email</th>
                            <th style={{ padding: '16px' }}>Phone</th>
                            <th style={{ padding: '16px' }}>Website Type</th>
                            <th style={{ padding: '16px' }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.map((lead, i) => (
                            <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,.05)' }}>
                                <td style={{ padding: '16px' }}>{lead.name}</td>
                                <td style={{ padding: '16px' }}>{lead.email}</td>
                                <td style={{ padding: '16px' }}>{lead.phone}</td>
                                <td style={{ padding: '16px' }}>{lead.websiteType}</td>
                                <td style={{ padding: '16px' }}>{new Date(lead.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                        {leads.length === 0 && (
                            <tr>
                                <td colSpan="5" style={{ padding: '40px', textAlign: 'center', color: '#666' }}>No leads found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
