# 🤠 Invitación Digital "Mi Patrimonio" - Cumpleaños de José

Invitación digital interactiva de alta gama para la celebración del cumpleaños de **José** en el **Fundo Mi Patrimonio** el **Sábado 17 de Octubre de 2026**.

Diseñada con estética campestre y llanera elegante (tonos pergamino, madera noble, cuero, verde oliva y acentos dorados), con experiencia inmersiva para celulares y computadoras.

---

## 🌟 Características Principales

1. **Pantalla de Inicio con Portón 3D:**
   - Letrero tallado en madera colgado con cadenas: *"Mi Patrimonio"*.
   - Portón rústico de doble hoja con detalles de hierro forjado y bisagras.
   - Botón interactivo con efecto de respiración (breathing pulse): *"Toque para entrar"*.
   - Al tocar el botón:
     - Apertura 3D realista de las hojas del portón (`rotateY`).
     - Activación inmediata de la música llanera (resuelve las restricciones de autoplay de los navegadores móviles).
     - Transición suave a la tarjeta de invitación principal.

2. **Control Flotante de Música:**
   - Botón en forma de disco de vinilo que gira en tiempo real mientras suena la música.
   - Barras ecualizadoras animadas.
   - Permite pausar o reanudar el audio en cualquier momento.

3. **Encabezado y Bienvenida:**
   - Distintivo de *"Celebrando a José"*.
   - Identificación de *"Fundo Ganadero Mi Patrimonio"*.

4. **Reloj Regresivo en Vivo:**
   - Cuenta regresiva dinámica en tiempo real (Días : Horas : Minutos : Segundos) calculada exactamente para el **17 de Octubre de 2026 a las 10:00 AM**.
   - Botón directo para **"Agendar en mi Calendario"** (Google Calendar).

5. **Ubicación y Logística:**
   - Tarjetas de información clave: Fecha, Lugar (*Fundo Mi Patrimonio*) y Celebración (*Ambiente campestre y gran fiesta*).
   - Botón directo **"Abrir en Google Maps"**.
   - Itinerario del día desde las 10:00 AM.

6. **Galería Dinámica de José:**
   - Carrusel táctil compatible con deslizamiento por gestos (*touch swipe*) en teléfonos.
   - Contiene las fotos del cumpleañero José (disfrutando de los rústicos 4x4, celebrando y en su faceta musical animando con la consola).
   - Al hacer clic en cualquier fotografía se abre un visor ampliado (**Lightbox**).

8. **Confirmación de Asistencia (RSVP) con Control de Cupos por WhatsApp:**
   - **Sistema de límite de pases:** Cada invitado cuenta con un cupo máximo asignado por el anfitrión (1, 2, 3 o más personas), impidiendo que lleven acompañantes no autorizados.
   - **Selector de asistentes:** Permite confirmar exactamente cuántos de sus pases asignados acudirán y especificar nombres de acompañantes.
   - **Panel Administrador para José:** Herramienta integrada para generar enlaces personalizados para cada familia/invitado (`?invitado=Juan&pases=2`) con botón directo para compartir en WhatsApp.
   - **Pase VIP en pantalla:** Genera un pase digital con el nombre y número exacto de asistentes confirmados.
   - WhatsApp oficial de confirmación: `+58 424 9645554`.

---

## 📁 Estructura del Proyecto

```text
invitacion jose/
├── index.html                  # Estructura principal, metaetiquetas SEO y OpenGraph
├── style.css                   # Sistema de diseño, perspectiva 3D y diseño responsivo
├── main.js                     # Apertura del portón, audio, reloj, carrusel y RSVP
├── README.md                   # Documentación y guía de despliegue
└── assets/                     # Recursos multimedia optimizados
    ├── gate_entrance.jpg       # Vista panorámica de la entrada
    ├── gate_door_left.png      # Hoja izquierda del portón (fondo transparente)
    ├── gate_door_right.png     # Hoja derecha del portón (fondo transparente)
    ├── sign_mi_patrimonio.png  # Letrero de madera tallado "Mi Patrimonio"
    ├── hacienda_bg.jpg         # Fondo cinematográfico del atardecer llanero
    ├── dress_code_mujeres.jpg  # Referencia de vestimenta femenina
    ├── dress_code_hombres.jpg  # Referencia de vestimenta masculina
    ├── jose_1.jpeg             # Foto de José celebrando
    ├── jose_2.jpeg             # Foto de José con los rústicos 4x4
    ├── jose_3.jpeg             # Foto de José en los platos DJ
    └── musica.mp3              # Pista de audio para la celebración
```

---

## 🎶 Personalizar la Música de Vitico Castillo

El proyecto incluye la pista configurada en `assets/musica.mp3`. Si deseas colocar una canción específica de Vitico Castillo (ej. *No me corra cantinero*, *Corazón de acero*, *El tirano*, etc.):
1. Consigue tu archivo `.mp3`.
2. Renómbralo a `musica.mp3`.
3. Reemplaza el archivo existente en la carpeta `assets/musica.mp3`.
¡Listo! El reproductor lo cargará automáticamente.

---

## 📱 Configurar el Número de WhatsApp para las Confirmaciones

En el archivo `main.js`, en la línea 15 encontrarás la configuración:
```javascript
const EVENT_CONFIG = {
  // Coloca el número de José con código de país (ejemplo para Venezuela 58414XXXXXXX)
  whatsappPhone: "584141234567",
  ...
};
```
Si lo dejas vacío, WhatsApp le preguntará al invitado a qué contacto de su agenda desea enviárselo.

---

## 🚀 Despliegue en GitHub Pages (Paso a Paso)

Para publicar la invitación en internet de forma gratuita:

1. Crea un repositorio en [GitHub](https://github.com/new) con el nombre que prefieras (por ejemplo: `invitacion-jose`).
2. Sube todos los archivos del proyecto a la rama `main` (o utiliza GitHub Desktop / Git por terminal):
   ```bash
   git add .
   git commit -m "Invitacion digital Mi Patrimonio con cupos y acompanantes dinamicos"
   git push origin main
   ```
3. En GitHub, entra en tu repositorio y ve a **Settings** > **Pages** (en el menú lateral izquierdo).
4. En **Build and deployment** > **Branch**, selecciona `main` y la carpeta `/(root)`, luego presiona **Save**.
5. En un par de minutos, GitHub generará tu enlace público oficial:
   `https://TU_USUARIO.github.io/invitacion-jose/`
6. ¡Listo! Todo funciona 100% en línea para invitados en cualquier parte del mundo.

---

## 🤠 ¿Cómo Accede José al Panel de Anfitrión (Generador de Enlaces)?

Para que ningún invitado vea el botón ni modifique sus cupos:
- **Para los invitados:** El botón de anfitrión está **totalmente eliminado** del sitio.
- **Para José (Anfitrión):** Puedes abrir el generador de enlaces mediante cualquiera de estas 3 vías:
  1. **Acceso secreto en el formulario:** Toca **3 veces seguidas el ícono del toro 🐃** en la parte superior del formulario RSVP.
  2. **Acceso secreto en el pie de página:** Haz clic en el pequeño punto `·` al final de los créditos del pie de página.
  3. **Por enlace directo:** Entra a tu web agregando al final `?admin=jose` (ej: `https://TU_USUARIO.github.io/invitacion-jose/?admin=jose`).

---

## 👥 Control de Acompañantes Dinámicos

- Si el invitado confirma **1 persona**: Solo asiste el titular.
- Si confirma **2 personas**: Se despliega automáticamente el campo para el **Acompañante 1**.
- Si confirma **3 personas**: Se despliegan 2 campos (**Acompañante 1** y **Acompañante 2**).
- Al confirmar por WhatsApp, el mensaje que recibe José incluye el desglose ordenado con los nombres completos de cada acompañante para el protocolo de bienvenida.
