# TypeScale Mobile • Mobile Typography System 📱

Una herramienta interactiva y ligera para visualizar, probar y validar jerarquías tipográficas en contextos móviles. Este proyecto sirve como una **Hoja de Especificaciones Viva (Living Spec Sheet)** para equipos de Diseño y Desarrollo.

<!-- ![Project Banner]() -->

## 📖 Sobre el Proyecto

El objetivo de este repositorio es demostrar cómo implementar una **Escala Tipográfica Modular** optimizada para dispositivos móviles, priorizando la legibilidad (readability) y el rendimiento web (performance).

A diferencia de las escalas de escritorio, la tipografía móvil enfrenta retos únicos:

- Espacio horizontal limitado (320px - 400px).
- Distancia de lectura variable.
- Interacción táctil.

Esta herramienta permite cambiar dinámicamente entre familias tipográficas populares para evaluar su comportamiento en tiempo real sin recargar la página.

---

## 🎨 Selección Tipográfica

Se han seleccionado 5 fuentes de Google Fonts que representan los estándares de la industria para UI Móvil. La selección se basa en la **altura de la x (x-height)**, la apertura de las letras y la claridad en tamaños pequeños.

1.  **Open Sans (Humanist Sans):**

- _Por qué:_ Es la fuente "segura" por excelencia. Sus formas abiertas la hacen extremadamente legible en párrafos densos.

2.  **Lato (Humanist Sans):**

- _Por qué:_ Sus terminaciones semiredondeadas aportan calidez y estabilidad, ideal para interfaces que buscan ser amigables pero serias.

3.  **Montserrat (Geometric Sans):**

- _Por qué:_ Perfecta para títulos (Headings). Su geometría ancha aporta modernidad, aunque requiere cuidado en móviles estrechos por su anchura.

4.  **Poppins (Geometric Sans):**

- _Por qué:_ Muy popular en apps modernas. Sus formas circulares casi perfectas crean una estética muy limpia, ideal para UI minimalistas.

5.  **Nunito (Rounded Sans):**

- _Por qué:_ Una fuente redondeada que transmite cercanía y suavidad. Excelente para apps de salud, bienestar o infantiles.

---

## 📐 El Sistema de Diseño (Design System)

La jerarquía visual no es solo estética; es una herramienta de **UX (Experiencia de Usuario)**. Guía el ojo del usuario a través del contenido.

### La Escala (Mobile Scale)

Se utiliza una base de **16px** para el cuerpo de texto, el estándar mínimo recomendado por WCAG y Apple/Google para evitar fatiga visual y zoom automático en inputs.

| Token / Role        | Tamaño | Peso (Weight)   | Uso Recomendado                           |
| :------------------ | :----- | :-------------- | :---------------------------------------- |
| **Display Large**   | 44px   | 800 (ExtraBold) | Impacto visual, Hero sections, Marketing. |
| **Heading 1**       | 32px   | 700 (Bold)      | Título principal de la pantalla.          |
| **Heading 2**       | 24px   | 700 (Bold)      | Subtítulos de sección importantes.        |
| **Heading 3**       | 20px   | 600 (SemiBold)  | Títulos de tarjetas (Cards) o modales.    |
| **Body Large**      | 18px   | 400 (Regular)   | Texto introductorio (Lead) o destacados.  |
| **Body Base**       | 16px   | 400 (Regular)   | El estándar para lectura de párrafos.     |
| **Small / Caption** | 14px   | 500 (Medium)    | Metadatos, fechas, autores.               |
| **Legal / Tiny**    | 12px   | 400 (Regular)   | Disclaimers legales y copyrights.         |

### Decisiones de Accesibilidad (a11y)

- **Contraste:** Se utilizan grises oscuros (`#111827`) en lugar de negro puro para reducir la fatiga visual, manteniendo un ratio de contraste AAA.
- **Semántica HTML:** Uso correcto de etiquetas `<h1>` a `<h6>` y `<button>`, independientemente del estilo visual.
- **Touch Targets:** Los elementos interactivos respetan áreas mínimas de toque.

---

## ⚡ Implementación Técnica

El proyecto está construido con **Vanilla JS (JavaScript Puro)**, HTML5 Semántico y CSS3 Moderno, sin dependencias ni frameworks pesados.

### Características Clave

1.  **Lazy Loading de Fuentes (Rendimiento):**

- No cargamos las 5 fuentes al inicio (lo que bloquearía el renderizado).
- Usamos JS para inyectar el `<link>` de Google Fonts **solo cuando el usuario selecciona la fuente**.
- Se verifica si la fuente ya existe en el DOM para evitar peticiones duplicadas.

2.  **Variables CSS (Custom Properties):**

- El cambio de fuente es instantáneo gracias al uso de `var(--current-font)`. JS solo actualiza el valor de esta variable en el `:root`, y el navegador repinta la UI automáticamente.

3.  **SVG Dinámico:**

- El logo y los iconos utilizan `fill="currentColor"`, heredando automáticamente el color del texto del contenedor.
- El Favicon incluye una media query interna `@media (prefers-color-scheme: dark)` para adaptarse al modo oscuro del sistema operativo.

---

## 🚀 Instalación y Uso

Este proyecto no requiere `npm install` ni procesos de compilación. Es nativo de la web.

1.  Clona el repositorio:

```bash
git clone https://github.com/christhoph/typescale-mobile
```

2.  Abre el archivo `index.html` en tu navegador de preferencia.
3.  ¡Listo!

> **Tip:** Para simular la experiencia real, abre las Herramientas de Desarrollador (F12) y activa el "Device Mode" para visualizar cómo rompen los textos en un iPhone SE, Pixel o iPad.

---

## 📂 Estructura del Proyecto

```text
/
├── index.html      # Estructura semántica y contenido
├── style.css       # Variables CSS, escala tipográfica y reset
├── script.js       # Lógica de inyección de fuentes (Lazy Load)
├── favicon.svg     # Icono adaptativo (Dark/Light mode)
└── README.md       # Documentación
```

---

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
