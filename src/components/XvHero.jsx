// src/xv-mayte/components/XvHero.jsx
import React from 'react';
import '../styles/XvHero.css';

export default function XvHero({ onOpenInvitation }) {
  return (
    <>
      <div className="xv-hero-container">
        <div className="xv-hero-content">
          
          {/* Primer logo (arriba del título principal) */}
          <div className="xv-logo-container top-logo">
            <img src="tiara2.svg" alt="Logo superior" className="xv-hero-logo" />
          </div>

          <span className="xv-subtitle-top">Mis XV Años</span>
          <h1 className="xv-title-name">Mayte</h1>
          <p className="xv-date-text">Sábado • 23 • Octubre • 2026</p>
          
          <button className="xv-open-btn" onClick={onOpenInvitation}>
            Abrir Invitación
          </button>

          {/* Segundo logo (por debajo del botón de abrir invitación) */}
          <div className="xv-logo-container bottom-logo">
            <img src="/logoe.svg" alt="Logo inferior" className="xv-hero-logo" />
          </div>

        </div>
      </div>
    </>
  );
}