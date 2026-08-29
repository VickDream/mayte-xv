// src/xv-mayte/components/XvWelcome.jsx
import React, { useRef } from 'react';
import '../styles/XvWelcome.css'; // Crearemos este archivo de estilos rápido

export default function XvWelcome({ onOpen }) {
  const audioRef = useRef(null);

  const handleOpenClick = () => {
    // Reproducimos el audio justo al hacer clic para evitar bloqueos del navegador
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(error => {
        console.log("Audio autoplay bloqueado:", error);
      });
    }
    // Notificamos al componente padre que ya se abrió la invitación
    onOpen(audioRef);
  };

  return (
    <div className="xv-welcome-overlay">
      {/* Archivo de audio (asegúrate de tener tu canción en public/audio/cancion.mp3) */}
      <audio ref={audioRef} src="/audio/mayte_xv.mp3" loop preload="auto" />

      <div className="xv-welcome-card">
        <span className="mini-subtitle">Mis XV Años</span>
        <h1 className="debut-name">Mayte</h1>
        <p className="invitation-intro">Tienes una invitación muy especial</p>
        <button className="xv-map-btn xv-open-main-btn" onClick={handleOpenClick}>
          Abrir Invitación
        </button>
      </div>
    </div>
  );
}