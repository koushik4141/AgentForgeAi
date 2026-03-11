'use client';
import React from 'react';
import Results from '../../components/Results';
import Projects from '../../components/Projects';
import CTA from '../../components/CTA';

export default function ResultsPage() {
    return (
        <div style={{ paddingTop: '100px' }}>
            <Results />
            <Projects />
            <CTA />
        </div>
    );
}
