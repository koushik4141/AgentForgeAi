import './styles.css';
import React from 'react';
import MainLayout from '../components/MainLayout';

export const metadata = {
    title: 'AgentForge AI – AI Agents That Run Your Business',
    description: 'Launch powerful websites, WhatsApp automation, and AI agents that capture leads and respond to customers 24/7.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <MainLayout>
                    {children}
                </MainLayout>
            </body>
        </html>
    );
}
