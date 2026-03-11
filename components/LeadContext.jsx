'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const LeadContext = createContext();

export function LeadProvider({ children }) {
    const [popupTrigger, setPopupTrigger] = useState(null);

    const openPopup = (type = 'cta') => {
        setPopupTrigger(type);
    };

    const closePopup = () => {
        setPopupTrigger(null);
    };

    return (
        <LeadContext.Provider value={{ popupTrigger, openPopup, closePopup }}>
            {children}
        </LeadContext.Provider>
    );
}

export const useLead = () => useContext(LeadContext);
