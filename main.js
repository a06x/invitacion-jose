/**
 * INVITACIÓN DIGITAL MODERNA "MI PATRIMONIO" - CUMPLEAÑOS DE JOSÉ
 * Sábado 17 de Octubre de 2026
 * Coordenadas: 7.983962, -63.543481 | RSVP: +58 424 9645554
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==============================================================
  // 1. CONFIGURACIÓN Y CONSTANTES DEL EVENTO
  // ==============================================================
  const EVENT_CONFIG = {
    title: "Cumpleaños de José · Fundo Mi Patrimonio",
    targetDate: new Date('2026-10-17T10:00:00-04:00'), // 17 de Octubre 2026, 10:00 AM
    locationName: "Fundo Mi Patrimonio",
    coordinates: "7.983962, -63.543481",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7.983962,-63.543481",
    wazeUrl: "https://waze.com/ul?ll=7.983962,-63.543481&navigate=yes",
    whatsappPhone: "584249645554", // 04249211768 con código país +58
    songTitle: "Yo no me voy de mi llano",
    songArtist: "Jorge Guerrero",
    description: "Gran celebración del cumpleaños de José en el Fundo Mi Patrimonio. ¡Gran celebración campestre entre amigos y familia!"
  };

  // ==============================================================
  // 2. ELEMENTOS DEL DOM
  // ==============================================================
  // Audio & Volume Elements
  const gateOverlay = document.getElementById('gate-overlay');
  const btnEnter = document.getElementById('btn-enter');
  const bgAudio = document.getElementById('bg-audio');
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const discVinyl = document.getElementById('disc-vinyl');
  const equalizerBars = document.getElementById('equalizer-bars');
  const volumeSlider = document.getElementById('volume-slider');
  const volumePercent = document.getElementById('volume-percent');
  const volumeMuteBtn = document.getElementById('volume-mute-btn');
  const volumeIcon = document.getElementById('volume-icon');

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
  const vipTicketPreview = document.getElementById('vip-ticket-preview');
  const vipGuestName = document.getElementById('vip-guest-name');

  // ==============================================================
  // 3. CONTROL DE VOLUMEN (INICIO AL 50% - MITAD DE VOLUMEN)
  // ==============================================================
  const INITIAL_VOLUME = 0.5; // Comienza a la mitad para cuidar los oídos del invitado
  let currentVolume = INITIAL_VOLUME;
  let previousVolume = INITIAL_VOLUME;
  let isMuted = false;
  let isMusicPlaying = false;

  function updateVolumeUI(vol) {
    const percent = Math.round(vol * 100);
    if (volumeSlider) {
      volumeSlider.value = vol;
      volumeSlider.style.background = `linear-gradient(to right, var(--gold) 0%, var(--gold) ${percent}%, rgba(255, 255, 255, 0.18) ${percent}%, rgba(255, 255, 255, 0.18) 100%)`;
      volumeSlider.title = `Volumen: ${percent}%`;
    }
    if (volumePercent) {
      volumePercent.textContent = `${percent}%`;
    }
    if (volumeIcon) {
      if (vol === 0 || isMuted) {
        // Ícono Silenciado
        volumeIcon.innerHTML = `<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>`;
      } else if (vol < 0.5) {
        // Ícono Volumen Moderado
        volumeIcon.innerHTML = `<path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>`;
      } else {
        // Ícono Volumen Normal/Completo
        volumeIcon.innerHTML = `<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>`;
      }
    }
  }

  function setAudioVolume(vol) {
    vol = Math.max(0, Math.min(1, vol));
    currentVolume = vol;
    if (bgAudio) {
      bgAudio.volume = vol;
    }
    isMuted = (vol === 0);
    updateVolumeUI(vol);
  }

  // Interacción del Slider de Volumen
  volumeSlider?.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    setAudioVolume(val);
  });

  // Botón Mute / Unmute
  volumeMuteBtn?.addEventListener('click', () => {
    if (isMuted || currentVolume === 0) {
      const restored = previousVolume > 0 ? previousVolume : INITIAL_VOLUME;
      setAudioVolume(restored);
    } else {
      previousVolume = currentVolume;
      setAudioVolume(0);
    }
  });

  // Inicializar volumen al 50%
  setAudioVolume(INITIAL_VOLUME);

  // ==============================================================
  // 4. APERTURA DEL PORTÓN 3D & AUDIO (JORGE GUERRERO)
  // ==============================================================
  function playMusic() {
    if (!bgAudio) return;
    bgAudio.volume = currentVolume;
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
    // 1. Iniciar audio con volumen al 50%
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
    const startDate = "20261017T140000Z"; // 10:00 AM (UTC-4) -> 14:00Z
    const endDate = "20261018T000000Z";   // 8:00 PM (UTC-4) -> 00:00Z (18 de Octubre)
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



  lightboxClose?.addEventListener('click', () => {
    lightboxModal?.classList.remove('open');
  });

  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.classList.remove('open');
    }
  });

  // ==============================================================
  // 8. SISTEMA DE CONTROL DE PASES & CUPOS PERSONALIZADOS
  // ==============================================================
  const assignedPassesNum = document.getElementById('assigned-passes-num');
  const passesBannerTitle = document.getElementById('passes-banner-title');
  const maxAllowedText = document.getElementById('max-allowed-text');
  const btnStepperMinus = document.getElementById('btn-stepper-minus');
  const btnStepperPlus = document.getElementById('btn-stepper-plus');
  const stepperValue = document.getElementById('stepper-value');
  const stepperUnit = document.getElementById('stepper-unit');
  const companionsContainer = document.getElementById('companions-container');
  const companionsList = document.getElementById('companions-list');
  const vipGuestPasses = document.getElementById('vip-guest-passes');
  const vipCompanionsList = document.getElementById('vip-companions-list');

  // Elementos del Panel Administrador de José
  const adminTriggerWrap = document.getElementById('admin-trigger-wrap');
  const btnOpenAdmin = document.getElementById('btn-open-admin');
  const adminModal = document.getElementById('admin-modal');
  const adminModalClose = document.getElementById('admin-modal-close');
  const adminGuestName = document.getElementById('admin-guest-name');
  const adminPassesCount = document.getElementById('admin-passes-count');
  const adminBaseUrl = document.getElementById('admin-base-url');
  const btnGenerateLink = document.getElementById('btn-generate-link');
  const adminResultBox = document.getElementById('admin-result-box');
  const adminGeneratedUrl = document.getElementById('admin-generated-url');
  const btnCopyLink = document.getElementById('btn-copy-link');
  const btnShareGuestWa = document.getElementById('btn-share-guest-wa');
  const adminSecretTrigger = document.getElementById('admin-secret-trigger');
  const rsvpCowHorn = document.querySelector('.rsvp-cow-horn');

  const DEFAULT_MAX_PASSES = 2; // Por defecto 2 pases por invitación
  let maxAllowedPasses = DEFAULT_MAX_PASSES;
  let currentConfirmedPasses = 1;

  // 8.1. Leer Parámetros de la URL (Ej: ?invitado=Juan+Perez&pases=2)
  const urlParams = new URLSearchParams(window.location.search);
  const guestParam = urlParams.get('invitado') || urlParams.get('nombre') || '';
  const passesParam = parseInt(urlParams.get('pases') || urlParams.get('cupos') || '0', 10);
  const isGuestView = urlParams.has('invitado') || urlParams.has('pases') || urlParams.has('nombre') || urlParams.has('cupos');
  const isAdminParam = urlParams.get('admin') === 'jose' || urlParams.get('admin') === '1' || urlParams.get('admin') === 'true';

  // Si es un enlace para invitado:
  if (guestParam) {
    if (guestNameInput) {
      guestNameInput.value = guestParam;
    }
    if (passesBannerTitle) {
      passesBannerTitle.textContent = `PASE EXCLUSIVO PARA: ${guestParam.toUpperCase()}`;
    }
  }

  if (passesParam > 0) {
    maxAllowedPasses = passesParam;
  }

  // REGLA DE SEGURIDAD: A la persona invitada NUNCA le sale el botón de José
  if (adminTriggerWrap) {
    if (isGuestView) {
      // Invitado que entra por su link personalizado: ELIMINAR COMPLETAMENTE EL BOTÓN
      adminTriggerWrap.remove();
    } else if (isAdminParam) {
      // José abriendo con ?admin=jose: mostrar botón visible
      adminTriggerWrap.style.display = 'block';
    } else {
      // Acceso normal a la raíz sin parámetros: ocultar por defecto
      adminTriggerWrap.style.display = 'none';
    }
  }

  // 8.2. Generación Dinámica de Campos para Acompañantes
  function renderCompanionFields() {
    if (!companionsContainer || !companionsList) return;

    const countNeeded = currentConfirmedPasses - 1;

    if (countNeeded <= 0) {
      companionsContainer.style.display = 'none';
      companionsList.innerHTML = '';
      return;
    }

    // Guardar valores ya escritos para no borrárselos al usuario si sube o baja el contador
    const existingValues = [];
    document.querySelectorAll('.companion-input').forEach(inp => {
      existingValues.push(inp.value);
    });

    companionsList.innerHTML = '';
    companionsContainer.style.display = 'block';

    for (let i = 1; i <= countNeeded; i++) {
      const row = document.createElement('div');
      row.className = 'companion-row';

      const label = document.createElement('label');
      label.className = 'companion-label';
      label.htmlFor = `companion-name-${i}`;
      label.innerHTML = `<span class="companion-label-badge">Acompañante ${i}</span> Nombre y Apellido:`;

      const input = document.createElement('input');
      input.type = 'text';
      input.id = `companion-name-${i}`;
      input.className = 'rsvp-input companion-input';
      input.placeholder = `Ej. Nombre de tu acompañante ${i}`;
      input.setAttribute('data-companion-num', i);
      input.required = true;

      if (existingValues[i - 1]) {
        input.value = existingValues[i - 1];
      }

      row.appendChild(label);
      row.appendChild(input);
      companionsList.appendChild(row);
    }
  }

  // Actualizar textos y límites de cupo en la interfaz
  function updatePassesUI() {
    const textPlural = maxAllowedPasses === 1 ? '1 persona' : `${maxAllowedPasses} personas`;
    if (assignedPassesNum) assignedPassesNum.textContent = textPlural;
    if (maxAllowedText) maxAllowedText.textContent = textPlural;

    if (stepperValue) stepperValue.textContent = currentConfirmedPasses;
    if (stepperUnit) stepperUnit.textContent = currentConfirmedPasses === 1 ? 'persona' : 'personas';

    // Deshabilitar botones en límites
    if (btnStepperMinus) btnStepperMinus.disabled = (currentConfirmedPasses <= 1);
    if (btnStepperPlus) btnStepperPlus.disabled = (currentConfirmedPasses >= maxAllowedPasses);

    // Actualizar campos de acompañantes según la cantidad
    renderCompanionFields();
  }

  updatePassesUI();

  // Control de Botones Menos (-) y Más (+)
  btnStepperMinus?.addEventListener('click', () => {
    if (currentConfirmedPasses > 1) {
      currentConfirmedPasses--;
      updatePassesUI();
    }
  });

  btnStepperPlus?.addEventListener('click', () => {
    if (currentConfirmedPasses < maxAllowedPasses) {
      currentConfirmedPasses++;
      updatePassesUI();
    } else {
      alert(`⚠️ Límite de cupo alcanzado: Esta invitación cuenta con un cupo máximo de ${maxAllowedPasses} ${maxAllowedPasses === 1 ? 'persona' : 'personas'}.`);
    }
  });

  // 8.3. Enviar Confirmación por WhatsApp a José (04249645554)
  btnWhatsappRsvp?.addEventListener('click', () => {
    const guestName = guestNameInput?.value.trim();

    if (!guestName) {
      alert("Por favor ingresa tu nombre y apellido para confirmar tu asistencia.");
      guestNameInput?.focus();
      return;
    }

    // Recopilar nombres de cada acompañante
    const companionInputs = document.querySelectorAll('.companion-input');
    const companionList = [];
    let hasEmptyField = false;

    companionInputs.forEach((input, idx) => {
      const val = input.value.trim();
      if (!val) {
        hasEmptyField = true;
      } else {
        companionList.push({ num: idx + 1, name: val });
      }
    });

    if (currentConfirmedPasses > 1 && hasEmptyField) {
      alert(`Por favor escribe el nombre de cada uno de tus ${currentConfirmedPasses - 1} acompañante(s) para su registro en la entrada.`);
      for (const input of companionInputs) {
        if (!input.value.trim()) {
          input.focus();
          break;
        }
      }
      return;
    }

    // Construir mensaje estructurado para José
    let message = `¡Hola José! 🤠🎉\n\nConfirmo mi asistencia para tu fiesta de cumpleaños en el Fundo "Mi Patrimonio" el sábado 17 de octubre de 2026.\n\n👤 *Titular:* ${guestName}\n🎟️ *Total que asistiremos:* ${currentConfirmedPasses} ${currentConfirmedPasses === 1 ? 'persona' : 'personas'} (Cupo asignado: ${maxAllowedPasses})`;

    if (companionList.length > 0) {
      message += `\n\n👥 *Acompañantes:*`;
      companionList.forEach(c => {
        message += `\n• Acompañante ${c.num}: ${c.name}`;
      });
    }

    message += `\n\n¡Allá nos vemos para celebrar y compartir en grande! 🎂🎉`;

    const whatsappUrl = `https://wa.me/${EVENT_CONFIG.whatsappPhone}?text=${encodeURIComponent(message)}`;

    // Mostrar pase VIP en pantalla
    if (vipTicketPreview && vipGuestName) {
      vipGuestName.textContent = guestName.toUpperCase();
      if (vipGuestPasses) {
        vipGuestPasses.textContent = `Pase Válido para ${currentConfirmedPasses} ${currentConfirmedPasses === 1 ? 'Persona' : 'Personas'} · Fundo Mi Patrimonio`;
      }
      if (vipCompanionsList) {
        if (companionList.length > 0) {
          vipCompanionsList.innerHTML = `<span style="color: var(--gold-light); font-weight:700; display:block; margin-bottom: 5px;">👥 Acompañantes Registrados:</span>` +
            companionList.map(c => `<p>• Acompañante ${c.num}: ${c.name}</p>`).join('');
          vipCompanionsList.style.display = 'block';
        } else {
          vipCompanionsList.innerHTML = '';
          vipCompanionsList.style.display = 'none';
        }
      }
      vipTicketPreview.style.display = 'block';
      vipTicketPreview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Abrir WhatsApp oficial de José
    window.open(whatsappUrl, '_blank');
  });

  // ==============================================================
  // 8.4. PANEL ADMINISTRADOR DE JOSÉ (GENERADOR DE PASES ONLINE)
  // ==============================================================
  // Detectar URL Base Online (GitHub Pages o LocalStorage)
  function getInitialBaseUrl() {
    const saved = localStorage.getItem('jose_invitation_base_url');
    if (window.location.protocol.startsWith('http')) {
      // Cuando está publicado online en GitHub Pages o servidor web
      return window.location.href.split('?')[0].split('#')[0];
    }
    if (saved) {
      return saved;
    }
    return 'https://tu-usuario.github.io/invitacion-jose/';
  }

  if (adminBaseUrl) {
    adminBaseUrl.value = getInitialBaseUrl();
  }

  function openAdminModal() {
    if (adminModal) {
      adminModal.classList.add('open');
      if (adminBaseUrl && !adminBaseUrl.value) {
        adminBaseUrl.value = getInitialBaseUrl();
      }
      adminGuestName?.focus();
    }
  }

  btnOpenAdmin?.addEventListener('click', openAdminModal);

  // Acceso discreto para José desde el pie de página
  adminSecretTrigger?.addEventListener('click', (e) => {
    e.preventDefault();
    openAdminModal();
  });

  // Acceso discreto para José tocando 3 veces el toro en el formulario
  let bullClickCounter = 0;
  let bullClickTimer = null;
  rsvpCowHorn?.addEventListener('click', () => {
    bullClickCounter++;
    clearTimeout(bullClickTimer);
    if (bullClickCounter >= 3) {
      bullClickCounter = 0;
      openAdminModal();
    } else {
      bullClickTimer = setTimeout(() => {
        bullClickCounter = 0;
      }, 1500);
    }
  });

  adminModalClose?.addEventListener('click', () => {
    adminModal?.classList.remove('open');
  });

  adminModal?.addEventListener('click', (e) => {
    if (e.target === adminModal) {
      adminModal.classList.remove('open');
    }
  });

  let generatedLinkUrl = '';
  let generatedTargetName = '';
  let generatedPassesCount = 2;

  btnGenerateLink?.addEventListener('click', () => {
    const name = adminGuestName?.value.trim();
    const passes = adminPassesCount?.value || '2';

    if (!name) {
      alert("Por favor ingresa el nombre del invitado para generar su enlace.");
      adminGuestName?.focus();
      return;
    }

    generatedTargetName = name;
    generatedPassesCount = passes;

    // Obtener URL Base Online (para que sirva en cualquier parte del mundo)
    let baseUrl = (adminBaseUrl?.value || '').trim();
    if (!baseUrl || baseUrl.startsWith('file:')) {
      if (window.location.protocol.startsWith('http')) {
        baseUrl = window.location.href.split('?')[0].split('#')[0];
      } else {
        baseUrl = 'https://tu-usuario.github.io/invitacion-jose/';
      }
    }
    baseUrl = baseUrl.split('?')[0].split('#')[0];

    // Recordar URL base ingresada por José
    localStorage.setItem('jose_invitation_base_url', baseUrl);

    // Construir enlace online con parámetros
    generatedLinkUrl = `${baseUrl}?invitado=${encodeURIComponent(name)}&pases=${passes}`;

    if (adminGeneratedUrl) {
      adminGeneratedUrl.value = generatedLinkUrl;
    }
    if (adminResultBox) {
      adminResultBox.style.display = 'flex';
    }
  });

  // Copiar al portapapeles
  btnCopyLink?.addEventListener('click', () => {
    if (!generatedLinkUrl) return;
    navigator.clipboard.writeText(generatedLinkUrl).then(() => {
      const originalText = btnCopyLink.textContent;
      btnCopyLink.textContent = "✅ ¡Copiado!";
      setTimeout(() => {
        btnCopyLink.textContent = originalText;
      }, 2000);
    }).catch(() => {
      adminGeneratedUrl?.select();
      document.execCommand('copy');
      alert("Enlace copiado al portapapeles.");
    });
  });

  // Compartir mensaje de invitación listo a ese invitado en WhatsApp
  btnShareGuestWa?.addEventListener('click', () => {
    if (!generatedLinkUrl) return;

    const waInviteMessage = `¡Hola ${generatedTargetName}! 🤠🎉\n\nEstás cordialmente invitado a mi fiesta de cumpleaños en el Fundo "Mi Patrimonio" este sábado 17 de octubre de 2026.\n\n🎟️ *Tu invitación incluye:* ${generatedPassesCount} ${generatedPassesCount === '1' ? 'pase personal' : 'pases personales'}.\n\nPor favor ingresa al siguiente enlace para ver todos los detalles y confirmar tu asistencia:\n👉 ${generatedLinkUrl}\n\n¡Te espero para celebrar! 🎂`;

    const waShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(waInviteMessage)}`;
    window.open(waShareUrl, '_blank');
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
