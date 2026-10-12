# 🤠 Invitación Digital "Mi Patrimonio" - Cumpleaños de José

Invitación digital interactiva de alta gama para la celebración del cumpleaños de **José** en la **Finca Mi Patrimonio** el **Sábado 17 de Octubre de 2026**.

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
   - Distintivo de *"El Cumpleaños de José"*.
   - Saludo y mensaje llanero auténtico.

4. **Reloj Regresivo en Vivo:**
   - Cuenta regresiva dinámica en tiempo real (Días : Horas : Minutos : Segundos) calculada exactamente para el **17 de Octubre de 2026 a las 2:00 PM**.
   - Botón directo para **"Agendar en mi Calendario"** (Google Calendar).

5. **Ubicación y Logística:**
   - Tarjetas de información clave: Fecha, Lugar (*Finca Mi Patrimonio*) y Menú (*Carne en vara & música en vivo*).
   - Botón directo **"Abrir en Google Maps"**.
   - Botón para **"Copiar Ubicación"** con confirmación visual.

6. **Código de Vestimenta (Dress Code):**
   - **Damas (Cowgirl Chic / Llanera Elegante):** Fotografía de referencia de alta costura campestre y lista de sugerencias (blusa campera, jeans, botas de cuero vaqueras, accesorios).
   - **Caballeros (Finca & Estilo Llanero):** Fotografía de referencia con camisa a cuadros/vaquera, jean clásico, botas de cuero y sombrero pelo 'e guama.
   - Nota especial sobre calzado cómodo para terreno campestre.

7. **Galería Dinámica de José:**
   - Carrusel táctil compatible con deslizamiento por gestos (*touch swipe*) en teléfonos.
   - Contiene las fotos del cumpleañero José (disfrutando de los rústicos 4x4, celebrando y en su faceta musical animando con la consola).
   - Al hacer clic en cualquier fotografía se abre un visor ampliado (**Lightbox**).

8. **Confirmación de Asistencia (RSVP) por WhatsApp:**
   - Formulario sencillo con nombre y selección de acompañantes.
   - Al presionar *"Confirmar por WhatsApp con José"*, se abre WhatsApp con un mensaje pre-formateado listo para enviar.

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

1. Crea un repositorio en [GitHub](https://github.com/new) con el nombre que prefieras (por ejemplo: `cumple-patrimonio`).
2. Sube todos los archivos del proyecto a la rama `main` (o utiliza GitHub Desktop / Git por terminal):
   ```bash
   git init
   git add .
   git commit -m "Invitacion digital Mi Patrimonio - Cumpleanos Jose"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/cumple-patrimonio.git
   git push -u origin main
   ```
3. En GitHub, entra en tu repositorio y ve a **Settings** > **Pages** (en el menú lateral izquierdo).
4. En **Build and deployment** > **Branch**, selecciona `main` y la carpeta `/(root)`, luego presiona **Save**.
5. En un par de minutos, GitHub generará tu enlace público:
   `https://TU_USUARIO.github.io/cumple-patrimonio/`
6. ¡Comparte el enlace por WhatsApp con todos los invitados! Al compartirlo, se mostrará con vista previa elegante gracias a las etiquetas OpenGraph incluidas.
