// src/xv-mayte/components/XvGallery.jsx
import React from 'react';
import '../styles/XvGallery.css';

export default function XvGallery() {
  // Puedes reemplazar estas rutas con las imágenes reales de la evolución de Mayte
  const photos = [
    { id: 1, title: 'Un nuevo comienzo', subtitle: 'Bebé', shape: 'circle' },
    { id: 2, title: 'Primeros pasos', subtitle: '1 año', shape: 'square' },
    { id: 3, title: 'Nuestra pequeña', subtitle: 'Infancia', shape: 'square' },
    { id: 4, title: 'Creciendo con alegría', subtitle: 'Niñez', shape: 'square' },
    { id: 5, title: 'Hermosos momentos', subtitle: 'Juventud', shape: 'portrait' },
  ];

  return (
    <>
      <section className="xv-gallery-section">
      <div className="xv-gallery-header">
        <span className="gallery-mini-tag">Mi Historia</span>
        <h2 className="gallery-title">Instantes de mi vida</h2>
        <p className="gallery-subtitle">Un recorrido por los recuerdos más hermosos</p>
      </div>

      <div className="xv-gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className={`xv-photo-card ${photo.shape}`}>
            <div className="photo-frame-inner">
              {/* Aquí irá la etiqueta <img> con tu foto real */}
              <div className="photo-placeholder">
                <span className="photo-number">0{photo.id}</span>
              </div>
            </div>
            <div className="photo-caption">
              <h4>{photo.title}</h4>
              <span>{photo.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}