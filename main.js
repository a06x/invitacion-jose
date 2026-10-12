/**
 * INVITACIÓN DIGITAL MODERNA "MI PATRIMONIO" - CUMPLEAÑOS DE JOSÉ
 * Sábado 17 de Octubre de 2026
 * Coordenadas: 7.983962, -63.543481 | RSVP: +58 424 9211768
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==============================================================
  // 1. CONFIGURACIÓN Y CONSTANTES DEL EVENTO
  // ==============================================================
  const EVENT_CONFIG = {
    title: "Cumpleaños de José · Finca Mi Patrimonio",
    targetDate: new Date('2026-10-17T14:00:00-04:00'), // 17 de Octubre 2026, 2:00 PM
    locationName: "Finca Mi Patrimonio",
    coordinates: "7.983962, -63.543481",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.983962,-63.543481",
    wazeUrl: "https://waze.com/ul?ll=7.983962,-63.543481&navigate=yes",
    whatsappPhone: "584249211768", // 04249211768 con código país +58
    songTitle: "Yo no me voy de mi llano",
    songArtist: "Jorge Guerrero",
    description: "Gran celebración del cumpleaños de José en la Finca Mi Patrimonio. ¡Música llanera en vivo, ternera a la llanera y brindis con Buchanan's!"
  };

  // ==============================================================
  // 2. ELEMENTOS DEL DOM
  // ==============================================================
  const gateOverlay = document.getElementById('gate-overlay');
  const btnEnter = document.getElementById('btn-enter');
  const bgAudio = document.getElementById('bg-audio');
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const discVinyl = document.getElementById('disc-vinyl');
  const equalizerBars = document.getElementById('equalizer-bars');

  // Countdown Elements
  const cdDays = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMinutes = document.getElementById('cd-minutes');
  const cdSeconds = document.getElementById('cd-seconds');
  const btnAddCalendar = document.getElementById('btn-add-calendar');

  // Gallery Elements (5 Fotos)
  const slides = document.querySelectorAll('.gallery-slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const btnPrev = document.getElementById('slide-prev');
  const btnNext = document.getElementById('slide-next');
  const gallerySlider = document.getElementById('gallery-slider');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  // RSVP Elements
  const btnWhatsappRsvp = document.getElementById('btn-whatsapp-rsvp');
  const guestNameInput = document.getElementById('guest-name');
  const guestCompanionsInput = document.getElementById('guest-companions');
  const vipTicketPreview = document.getElementById('vip-ticket-preview');
  const vipGuestName = document.getElementById('vip-guest-name');

  // ==============================================================
  // 3. APERTURA DEL PORTÓN 3D & AUDIO (JORGE GUERRERO)
  // ==============================================================
  let isMusicPlaying = false;

  function playMusic() {
    if (!bgAudio) return;
    bgAudio.volume = 0.9;
    const playPromise = bgAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isMusicPlaying = true;
          updateAudioUI(true);
        })
        .catch((error) => {
          console.log("Audio autoplay prevented by browser policy:", error);
          isMusicPlaying = false;
          updateAudioUI(false);
        });
    }
  }

  function pauseMusic() {
    if (!bgAudio) return;
    bgAudio.pause();
    isMusicPlaying = false;
    updateAudioUI(false);
  }

  function updateAudioUI(playing) {
    if (playing) {
      discVinyl?.classList.add('playing');
      equalizerBars?.classList.add('active');
    } else {
      discVinyl?.classList.remove('playing');
      equalizerBars?.classList.remove('active');
    }
  }

  // Toque para entrar
  btnEnter?.addEventListener('click', () => {
    // 1. Iniciar audio con la interacción
    playMusic();

    // 2. Ejecutar rotación 3D de las hojas del portón
    gateOverlay?.classList.add('gate-opened');

    // 3. Desvanecer y retirar overlay
    setTimeout(() => {
      gateOverlay?.classList.add('fade-out');
    }, 1100);

    setTimeout(() => {
      if (gateOverlay) {
        gateOverlay.style.display = 'none';
      }
    }, 2400);
  });

  // Toggle de audio flotante
  musicToggleBtn?.addEventListener('click', () => {
    if (isMusicPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  });

  // ==============================================================
  // 4. RELOJ REGRESIVO (EN VIVO HASTA EL 17/10/2026)
  // ==============================================================
  function updateCountdown() {
    const now = new Date().getTime();
    const target = EVENT_CONFIG.targetDate.getTime();
    const distance = target - now;

    if (distance <= 0) {
      if (cdDays) cdDays.textContent = "00";
      if (cdHours) cdHours.textContent = "00";
      if (cdMinutes) cdMinutes.textContent = "00";
      if (cdSeconds) cdSeconds.textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (cdDays) cdDays.textContent = String(days).padStart(2, '0');
    if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
    if (cdMinutes) cdMinutes.textContent = String(minutes).padStart(2, '0');
    if (cdSeconds) cdSeconds.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ==============================================================
  // 5. AGENDAR EN CALENDARIO (GOOGLE CALENDAR)
  // ==============================================================
  btnAddCalendar?.addEventListener('click', (e) => {
    e.preventDefault();
    const startDate = "20261017T180000Z";
    const endDate = "20261018T080000Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(EVENT_CONFIG.title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(EVENT_CONFIG.description)}&location=${encodeURIComponent(EVENT_CONFIG.coordinates)}`;
    window.open(googleCalendarUrl, '_blank');
  });

  // Ubicación: Navegación directa con Google Maps
  // El botón principal enlaza automáticamente a las coordenadas en la app de mapas.

  // ==============================================================
  // 7. GALERÍA DE JOSÉ (CARRUSEL TÁCTIL DE 4 FOTOS)
  // ==============================================================
  let currentSlide = 0;
  let slideInterval = null;

  function showSlide(index) {
    if (slides.length === 0) return;
    
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentSlide);
    });

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startSlideAutoplay() {
    stopSlideAutoplay();
    slideInterval = setInterval(nextSlide, 5000);
  }

  function stopSlideAutoplay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  btnNext?.addEventListener('click', () => {
    nextSlide();
    startSlideAutoplay();
  });

  btnPrev?.addEventListener('click', () => {
    prevSlide();
    startSlideAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      startSlideAutoplay();
    });
  });

  // Swipe táctil en móviles
  let touchStartX = 0;
  let touchEndX = 0;

  gallerySlider?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopSlideAutoplay();
  }, { passive: true });

  gallerySlider?.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startSlideAutoplay();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 45;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
    }
  }

  startSlideAutoplay();

  // Lightbox Zoom para Galería de José
  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      const img = slide.querySelector('.slide-img');
      const caption = slide.querySelector('.slide-caption');
      if (img && lightboxModal && lightboxImg) {
        lightboxImg.src = img.src;
        if (lightboxCaption && caption) {
          lightboxCaption.textContent = caption.textContent;
        }
        lightboxModal.classList.add('open');
      }
    });
  });

  // Lightbox Zoom para Fotos de Vestimenta (Damas y Caballeros)
  const dresscodeCards = document.querySelectorAll('.dresscode-lightbox-trigger');
  dresscodeCards.forEach((card) => {
    card.addEventListener('click', () => {
      const img = card.querySelector('.dresscode-img');
      const title = card.getAttribute('data-title') || 'Código de Vestimenta';
      if (img && lightboxModal && lightboxImg) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.textContent = title;
        }
        lightboxModal.classList.add('open');
      }
    });
  });

  lightboxClose?.addEventListener('click', () => {
    lightboxModal?.classList.remove('open');
  });

  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.classList.remove('open');
    }
  });

  // ==============================================================
  // 8. CONFIRMACIÓN DE ASISTENCIA POR WHATSAPP (04249211768)
  // ==============================================================
  btnWhatsappRsvp?.addEventListener('click', () => {
    const guestName = guestNameInput?.value.trim();
    const companions = guestCompanionsInput?.value || "Solo yo (1 persona)";

    if (!guestName) {
      alert("Por favor ingresa tu nombre y apellido para confirmar tu asistencia con José.");
      guestNameInput?.focus();
      return;
    }

    // Mensaje para José
    const message = `¡Hola José! 🤠🎉\n\nConfirmo con mucho gusto mi asistencia a tu fiesta de cumpleaños en la Finca "Mi Patrimonio" el sábado 17 de octubre de 2026.\n\n👤 *Invitado:* ${guestName}\n👥 *Acompañantes:* ${companions}\n\n¡Allá nos vemos para brindar con Buchanan's y parrandear! 🥩🥃`;

    const whatsappUrl = `https://wa.me/${EVENT_CONFIG.whatsappPhone}?text=${encodeURIComponent(message)}`;

    // Mostrar pase VIP en pantalla
    if (vipTicketPreview && vipGuestName) {
      vipGuestName.textContent = guestName.toUpperCase();
      vipTicketPreview.style.display = 'block';
    }

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
  });

  // ==============================================================
  // 9. DETECCIÓN DE INTERACCIÓN DE MOVIMIENTO (PARALLAX SUTIL)
  // ==============================================================
  const signWrapper = document.getElementById('sign-wrapper');
  if (window.matchMedia("(min-width: 992px)").matches) {
    document.addEventListener('mousemove', (e) => {
      if (gateOverlay && gateOverlay.style.display !== 'none' && signWrapper) {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 8;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 5;
        signWrapper.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    });
  }
});
