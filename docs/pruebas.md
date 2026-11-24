# Pruebas (Fase 5 · Prompt 5)

Estado: construcción terminada, pendiente de la revisión del autor en su tablet real.
Fecha de las pruebas: 24/11/2026. Navegador: Chromium (Playwright) en el entorno de trabajo, no en un aparato real.

## Cómo repetirlas
- `python3 tools/check.py` (peso, textos literales, privacidad, Kuromi, voseo, enlaces externos)
- `python3 tools/recorrido.py <carpeta>` (recorrido completo con clics reales y capturas)
- `python3 tools/accesibilidad.py` (teclado, movimiento reducido, regiones en vivo, portada cerrada)
- `python3 tools/capturas.py <carpeta>` (capturas de portada y del día en 3 tamaños, con y sin movimiento reducido)

## Resultados
| Prueba | Resultado |
|---|---|
| Peso de `index.html` | 42 KB (límite 150 KB) |
| Nodos SVG (con los generados por script) | 388 (límite orientativo 400); queda poco margen |
| Errores en consola | 0 en los tres tamaños, con y sin movimiento reducido |
| Recorrido completo (24 fragmentos, clics reales) | Sin fallos en computador 1440×900, celular 390×844 y tablet 820×1180 con movimiento reducido |
| Textos | 20 fragmentos + 16 líneas de estrofa + 2 líneas de portada son literales de `docs/texto-final.md` (comprobado por script) |
| Tamaño de los objetos tocables | Mínimo 45 px a 360 px de ancho y 48,7 px a 390 px |
| Contraste (calculado) | Texto 13,5:1; texto suave 8,6:1; acentos dorado/rosado/morado entre 7,4:1 y 8,7:1 sobre el fondo del panel (mínimo pedido 4,5:1). El texto va sobre un panel fijo, no sobre el cielo |
| Teclado | Flechas, Inicio y Fin mueven la línea; Tab recorre los objetos visibles; Enter o Espacio los activan |
| Movimiento reducido | Sin bucles ni olas; el día salta entre 6 paradas; los textos aparecen sin animación |
| Regiones en vivo | `aria-live="polite"` en el texto de los fragmentos y en las estrofas |
| Portada cerrada | Botón con `aria-disabled` y "aún no"; al tocarlo no pasa nada |
| Privacidad | `notas-privadas/` no está en el repo; sin teléfonos, correos, cédulas ni nombres propios en `index.html` |
| Kuromi, voseo, imágenes de trama, filtros, audio, librerías, enlaces externos | Ninguno |

## Lo que NO está verificado
- **Tablet y celular reales.** Todo se probó en un navegador de escritorio simulando tamaños. Falta ver tacto real, y que el dedo no se confunda entre objetos cercanos.
- **60 fps** en una tablet de gama media: sin medir.
- **Lector de pantalla** (TalkBack, VoiceOver): no probado; solo se comprobó que las etiquetas y las regiones existen.
- **Ortografía:** se revisó a mano y con un diccionario básico que no marcó nada sospechoso (solo palabras válidas que no conoce). Los textos del autor son literales de `texto-final.md`.
- **Hover del computador** con ratón real y **animaciones al detalle**: solo se probaron por script.

## Decisiones tomadas por el asistente (no estaban en `escena.md`)
- Después del cartel hay un botón discreto "Empezar el día".
- El contador cuenta hacia el 24/11/2026 00:00 (hora de Ecuador). Hoy ya pasó, así que muestra 0.
- Los gestos de "arrastrar" y "pasar el dedo" se activan con un barrido de unos 40 px o con un toque, clic o Enter. El objeto no sigue al dedo.
- Los fragmentos S1, S6, C1, C6, C7 y N1 se activan al llevar la línea del día a su zona; S1 también tocando la ventana.
- N6 aparece solo, unos 2 s después de encender la casita (N5). Tras la lámpara (N7), el cierre llega solo a los 2,4 s.
- Los textos se quedan; en pantalla se ven los del movimiento donde está la línea.
- En computador, pasar el cursor por la línea mueve el día, sin hacer clic.
- Interior de Cielito: la casa del fondo se abre como una cocina con sus objetos.
- Ambato: puesto con toldo (Solecito) e iglesia pequeña con luz (Cielito y Negrita). RC4: puerta entreabierta con luz en la casa del inicio. RC5: luces de colores entre las del barrio (Negrita 4).
- El dibujo fino de los personajes (ella, la Concha, la Mía) es propuesta mía: sin rasgos de cara.
- No se añadieron las notas descubribles (RE5) ni se usó el color favorito de ella.

## Desbloqueo (provisional)
`?abierto=1` activa el botón. **No es seguridad:** el repo es público y el texto está en el código. La forma definitiva es del Prompt 6.
Los parámetros `fase` y `t`, que sirven para las pruebas, solo funcionan con `?abierto=1`.
