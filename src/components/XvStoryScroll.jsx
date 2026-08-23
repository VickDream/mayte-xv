// src/xv-mayte/components/XvStoryScroll.jsx
import React, { useState, useEffect } from 'react';
import '../styles/XvStoryScroll.css';

export default function XvStoryScroll() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Efecto para activar y desactivar el fade-in según la dirección del scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Entra a la pantalla (bajando o subiendo)
          entry.target.classList.add('is-visible');
        } else {
          // Sale de la pantalla (se oculta al subir o bajar)
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: 0.15 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const mapTemploUrl = "https://maps.google.com/?q=Parroquia+de+la+Resurreccion+de+Cristo+Iztapalapa";
  const mapSalonUrl = "https://maps.google.com/?q=Salon+de+Fiestas+Monarca+Iztapalapa";

  const photos = [
    {
      id: '01',
      title: 'Bebé',
      subtitle: 'Un nuevo comienzo',
      url: 'https://images.unsplash.com/photo-1659310933156-b7b6a23e6f5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cXVpbmNlYSVDMyVCMWVyYXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: '02',
      title: '1 año',
      subtitle: 'Primeros pasos',
      url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '03',
      title: 'Infancia',
      subtitle: 'Nuestra pequeña',
      url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '04',
      title: 'Juventud',
      subtitle: 'Hermosos momentos',
      url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <>
      <div className="xv-story-wrapper">
        <div className="xv-sticky-decorations">
          <div className="xv-gold-frame">
            <div className="floral-corner top-left"></div>
            <div className="floral-corner top-right"></div>
            <div className="floral-corner bottom-left"></div>
            <div className="floral-corner bottom-right"></div>
          </div>
        </div>

        <div className="xv-scroll-content">

          <section className="xv-slide-section fade-in-section">
            <div className="xv-inner-text">
              <span className="gold-number">15</span>
              <h2 className="parents-names">Juan Carlos Cancino Sánchez</h2>
              <h2 className="parents-names">Perla Itzel González Ramírez</h2>
              <p className="invitation-intro">
                Tienen el honor de invitar a Usted y a su apreciable Familia a la Misa de Acción de Gracias con motivo del XV Aniversario del Nacimiento de nuestra hija:
              </p>
              <h1 className="debut-name">Mayte</h1>
            </div>
          </section>

          <section className="xv-slide-section fade-in-section">
            <div className="xv-inner-text">
              <h3 className="section-title">Ceremonia Religiosa</h3>
              <p className="event-details">
                Se celebrará el día <strong>Viernes 23 de Octubre de 2026</strong> a las <strong>18:00 hrs.</strong>
              </p>
              <p className="event-location">
                En la Parroquia de la Resurrección de Cristo<br />
                José María Rodríguez y Francisco Mújica<br />
                Col. Constitución de 1917, Iztapalapa, CDMX
              </p>
              <a href={mapTemploUrl} target="_blank" rel="noopener noreferrer" className="xv-map-btn">
                Ver ubicación en Google Maps
              </a>
            </div>
          </section>

          <section className="xv-slide-section fade-in-section">
            <div className="xv-inner-text">
              <div className="godparents-block">
                <span className="mini-subtitle">Mi Madrina:</span>
                <h3 className="godparent-name">Mercedes Ramírez Pérez</h3>
              </div>

              <h3 className="section-title">Recepción</h3>
              <p className="event-details">
                Agradecemos su presencia en el <strong>"Salón de Fiestas Monarca"</strong> a partir de las 19:00 hrs.
              </p>
              <p className="event-location">
                Anillo Periférico No. 99 Esq. Cándido Aguilar No. 4<br />
                Col. Constitución de 1917, Iztapalapa, CDMX
              </p>
              <a href={mapSalonUrl} target="_blank" rel="noopener noreferrer" className="xv-map-btn">
                Cómo llegar al Salón
              </a>
            </div>
          </section>

          <section className="xv-slide-section fade-in-section">
            <div className="xv-inner-text gallery-slide-box">
              <span className="mini-subtitle">Mi Historia</span>
              <h3 className="section-title" style={{ margin: '4px 0 10px 0', fontSize: '1.2rem' }}>Instantes de mi vida</h3>

              <div className="xv-vertical-gallery">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="xv-vertical-photo-card"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className="vertical-thumb" style={{ overflow: 'hidden', padding: 0 }}>
                      <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="vertical-info">
                      <strong>{photo.title}</strong>
                      <span>{photo.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="xv-slide-section fade-in-section">
            <div className="xv-inner-text dedication-text">
              <p>
                Señor ¡Gracias! por estos XV Años llenos de amor, hoy ante Dios concluyo una etapa maravillosa, para iniciar una vida llena de sueños e ilusiones, quiero hacerlos partícipes de mi inmensa alegría junto con mi familia.
              </p>

              {/* Botón de Confirmación por WhatsApp */}
              <a
                href="https://wa.me/TU_NUMERO_DE_TELEFONO?text=¡Hola!%20Confirmo%20mi%20asistencia%20a%20los%20XV%20Años%20de%20Mayte."
                target="_blank"
                rel="noopener noreferrer"
                className="xv-whatsapp-btn"
              >
                Confirmar Asistencia
              </a>
            </div>
          </section>
        </div>
      </div>

      {selectedPhoto && (
        <div className="xv-modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="xv-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="xv-close-modal" onClick={() => setSelectedPhoto(null)}>&times;</button>
            <div className="xv-modal-photo-full" style={{ backgroundImage: `url(${selectedPhoto.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="xv-modal-overlay-caption">
                <h3>{selectedPhoto.title}</h3>
                <p>{selectedPhoto.subtitle} - Mayte</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}