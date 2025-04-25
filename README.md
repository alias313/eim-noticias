# Noticias EIM

Colección de resumenes de noticias sobre economía.

## Apuntes sobre implementaciones propias

### onMouseDown
Implementación de `/src/components/useMousedownNavigation.tsx`
- Necesario renderizar el componente mismo y `/src/app/[lang]/noticias/layout.tsx` en el navegador utilizando la directiva `"use client"` de Next.js
- Escucha el evento `mousedown` para todos aquellos elementos ancla de HTML y solo si referencia un enlace interno se actualiza en la URL
