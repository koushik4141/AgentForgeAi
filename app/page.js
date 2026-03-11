'use client';
import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Platform from '../components/Platform';
import Projects from '../components/Projects';
import CTA from '../components/CTA';

export default function HomePage() {
    return (
        <>
            <Hero />
            <TrustBar />
            <Platform />
            <Projects />
            <CTA />
        </>
    );
}
