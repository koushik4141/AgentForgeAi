'use client';
import React from 'react';
import Platform from '../../components/Platform';
import ProductUI from '../../components/ProductUI';
import CTA from '../../components/CTA';

export default function PlatformPage() {
    return (
        <div style={{ paddingTop: '100px' }}>
            <Platform />
            <ProductUI />
            <CTA />
        </div>
    );
}
