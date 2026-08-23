// src/App.jsx
import React, { useState, useRef } from 'react';
import XvHero from './components/XvHero';
import XvStoryScroll from './components/XvStoryScroll';
import './App.css';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const handleOpenInvitation = () => {
    // Reproducimos el audio global que vive a salvo en el App.jsx
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(() => {
        console.log("¡Música iniciada correctamente!");
      }).catch(error => {
        console.log("Reproducción bloqueada:", error);
      });
    }
    setIsOpen(true);
  };

  return (
    <div className="App">
      {/* El audio vive aquí permanentemente para que no se desmonte */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/mayte_xv.mp3" type="audio/mpeg" />
      </audio>

      {!isOpen ? (
        <XvHero onOpenInvitation={handleOpenInvitation} />
      ) : (
        <div className="xv-main-invitation">
          <XvStoryScroll audioRef={audioRef} />
        </div>
      )}
    </div>
  );
}