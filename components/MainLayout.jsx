'use client';
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LeadPopup from './LeadPopup';
import WhatsAppFloat from './WhatsAppFloat';
import { LeadProvider, useLead } from './LeadContext';
import { usePathname } from 'next/navigation';

function MainLayoutContent({ children }) {
    const { popupTrigger, openPopup } = useLead();
    const pathname = usePathname();

    // Check if we should hide the main layout (navbar/footer)
    const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/signup');
    const isAdminPage = pathname.startsWith('/admin');
    const hideLayout = isAuthPage || isAdminPage;

    useEffect(() => {
        if (hideLayout) return;

        // Reveal animation logic
        const items = document.querySelectorAll('[data-reveal]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.dataset.delay || '0', 10);
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

        items.forEach(el => observer.observe(el));

        // Timer for popup
        const timer = setTimeout(() => openPopup('timer'), 30000);

        // Scroll progress bar
        const bar = document.createElement('div');
        bar.id = 'scroll-progress-bar';
        bar.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            height: 2px;
            width: 0%;
            background: linear-gradient(90deg, #6366f1, #22d3ee);
            z-index: 9999;
            transition: width .1s linear;
            pointer-events: none;
        `;
        document.body.appendChild(bar);

        const handleScroll = () => {
            const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            bar.style.width = pct + '%';
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
            if (bar.parentNode) bar.parentNode.removeChild(bar);
        };
    }, [pathname, hideLayout]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (hideLayout) {
        return <main>{children}</main>;
    }

    return (
        <>
            <Navbar onCTAClick={() => openPopup('cta')} />
            <LeadPopup />
            <WhatsAppFloat />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default function MainLayout({ children }) {
    return (
        <LeadProvider>
            <MainLayoutContent>{children}</MainLayoutContent>
        </LeadProvider>
    );
}
