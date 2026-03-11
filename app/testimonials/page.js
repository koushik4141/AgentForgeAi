'use client';
import React from 'react';
import Testimonials from '../../components/Testimonials';
import Team from '../../components/Team';
import CTA from '../../components/CTA';


export default function TestimonialsPage() {
    return (
        <div style={{ paddingTop: '100px' }}>
            <Testimonials />
            <Team />
            <CTA />
        </div>
    );
}
