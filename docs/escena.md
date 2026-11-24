# Escena y animación (Fase 5 · Prompt 4) · APROBADO

Estado: aprobado por el autor el 24/11/2026, después de ver los bocetos (en el chat). Ajuste posterior al revisar `requisitos.md` con el repo conectado: RC3 (Ambato) se corrigió con los datos reales (ver 1). Con esto se cierra la Fase 5; el siguiente es el Prompt 5.

## 1. Decisiones cerradas
- **Enfoque C (mixto):** el cielo, la luz y el paisaje fluyen continuos con la posición en la línea del día. Los objetos tocables son paradas, cada una con su propio estado. Descartados: A (todo continuo) y B (solo paradas).
- **Desbloqueo:** interruptor del autor. Mientras esté cerrada, el contador corre y el botón "Desbloquear" se ve apagado con un "aún no". Cuando el autor la abre, el botón se activa y lo toca ella. El interruptor (fecha o clave) se define en el Prompt 6. Aviso: el repo es público, así que un interruptor en la página solo la oculta a la vista; el texto sigue en el código.
- **Música:** eliminada (derechos de autor). Sin botón y sin sonido. Las notas de la estrofa 3 quedan como imagen animada, sin audio. RF1 queda sin efecto.
- **RC4 (primer encuentro), RC5 (fin de año) y RC3 (Ambato):** entran de forma implícita, sin fragmento nuevo y sin texto, repartidos a criterio del asistente.
  - Primer encuentro: puerta entreabierta con luz al inicio del camino, en Solecito 3.
  - Fin de año: unas pocas luces de colores entre las luces del barrio, en Negrita 4.
  - Ambato (RC3, según `requisitos.md`): una iglesia pequeña con una luz encendida al borde del pueblo, en el paisaje de Cielito y como silueta en Negrita; y un puesto con toldo en el camino de Solecito, con una olla y una canasta, como el reparto de comida de los lunes. Sin nombres ni letreros. Son datos del autor, no verificados con fuentes externas.
  - El contenido exacto de RC4 y RC5 no está en los documentos; el autor puede añadir detalles visibles después.
- **Paleta:** base cálida y morena (cacao, tierra, ámbar) en toda la página. Un acento por movimiento: dorado en Solecito, rosado en Cielito, morado en Negrita. Ella lleva un toque dorado (joyería dorada, RE1): un arete o una cadenita mínima. El color favorito de ella sigue sin confirmar y este reparto no depende de eso.
- **Personajes:** ella morena, de estatura media, figura sencilla sin énfasis en partes del cuerpo y sin rasgos finos en la cara. La Concha, pekinesa café de pelo largo y la preferida de ella, camina con ella y se adelanta. La Mía, pekinesa café algo más clara (es del autor), solo asoma en la mesa de Cielito. Ninguna se nombra en el texto. El sol es ella, solo implícito.

## 2. Capas (de atrás hacia adelante)
Un solo SVG inline. La posición en la línea es una variable `--t` de 0 a 1. Cielo, luz y paisaje la leen; los objetos no.

| # | Capa | Qué cambia con `--t` |
|---|------|----------------------|
| 0 | Cielo | Bandas de color: dorado y rosado (amanecer), claro (mediodía), rojo y rosado (atardecer), morado oscuro (noche) |
| 1 | Astros | Sol (sale, sube, baja, toca el horizonte, queda un brillo detrás), luna y estrellas (aparecen de noche) |
| 2 | Montañas lejanas | Color y luz |
| 3 | Montañas cercanas y suelo | Color; flores de día, silueta de noche; iglesia pequeña con luz |
| 4 | Camino | Color; puesto con toldo |
| 5 | Objetos de escena | Ventana, puerta, flor, cajón, casa, mesa, libreta, marcas en la pared, ventanas del barrio, casita oscura, lámpara. Cada uno con su estado propio |
| 6 | Personajes | La chica y la Concha caminan; la Mía en la mesa |
| 7 | Luces | Halos, rayos de la ventana, guiño entre ventanas, luz de la casita |
| 8 | Interfaz | Línea del día, texto del fragmento, puntos de avance, contador y botón de la portada |

Portada y escrito final tienen su propia composición y no leen `--t`.

## 3. Estados

**Portada.** Cielo: ninguno; fondo oscuro, tranquilo, cacao. Luz: apagada, solo el botón dorado. Paisaje: ninguno. Personajes: aún no. Objeto: botón "Desbloquear" (activo solo cuando el autor abre). Al tocarlo se enciende la luz cálida, aparece el cartel "Feliz cumpleaños" y 40 a 60 personitas con una ola desfasada (tonos cálidos y morenos). Texto: las dos líneas pequeñas, "Esto se canta bajito, y es tuyo." y "Hoy el cielo se pone más bonito por ti." El guiño a "Morena la ingratitud" vive aquí, solo en tono y color, sin letra ni título.

**Amanecer (Solecito, `--t` 0 a 0.2).** Cielo dorado y rosado con el sol bajo. Luz: rasante, entra por la ventana. Paisaje: montañas con flores, camino, puesto con toldo. Chica y Concha: salen al camino; la Concha se adelanta. Objetos: ventana, puerta entreabierta. Texto: Solecito 1 y 3.

**Mediodía (Solecito, `--t` 0.2 a 0.38).** Cielo claro con el sol alto, sin sombras. Luz: pareja. Chica y Concha: caminan sin prisa. Objetos: flor que se gira, cajón, manos que reparten, sol alto. Texto: Solecito 2, 4, 5 y 6.

**Atardecer (Cielito, `--t` 0.38 a 0.68).** Cielo rojo y rosado, sol que toca el horizonte y se esconde, con un brillo detrás. Luz: cálida, la cocina se enciende. Paisaje: casa con luz, iglesia pequeña con luz, montañas más oscuras. Chica y Concha: llegan a la casa; la Mía asoma. Objetos: mesa con plato de más, taza, cobija y pan, libreta, marcas en la pared, encuentro sol-cielo. Texto: Cielito 1 a 7.

**Noche (Negrita, `--t` 0.68 a 1).** Cielo morado oscuro, estrellas y luna. Luz: ventanas encendidas, luces del barrio, unas pocas de colores. Paisaje: silueta de montañas, casas, iglesia pequeña con su luz. Chica y Concha: caminan pequeñas por el camino oscuro. Objetos: ventanas que se saludan, luces que se acercan, casita sin ventana, lámpara. Texto: Negrita 1 a 7.

**Escrito final (fuera de la línea).** Noche cálida y morena fija, sin sol ni luna. Cuatro composiciones, una por estrofa: camino que da la vuelta al mar con una luz al final; barco que se aleja y vuelve, con ventana encendida; figura que camina de frente con notas suaves detrás; jardín con la puerta abierta. Texto: las cuatro estrofas de `texto-final.md`.

## 4. Objetos, gestos y fragmentos
Los textos están en `texto-final.md`; aquí solo el objeto y el gesto. Cambios míos respecto a la propuesta de ese documento: puerta (S3), puesto (S3), luces de colores (N4) y la Mía (C2); el resto se mantiene.

| Fragmento | Objeto | Gesto en tablet | En computador |
|-----------|--------|-----------------|---------------|
| S1 | Ventana con luz | Arrastrar el día | Pasar el cursor por la línea |
| S2 | Flor que se gira | Tocar | Clic; hover la gira un poco |
| S3 | Camino, Concha, puerta y puesto | Tocar a la Concha | Clic |
| S4 | Cajón cerrado | Tocar, se abre | Clic |
| S5 | Manos que reparten | Arrastrar | Arrastrar con el ratón |
| S6 | Sol alto, sin sombra | Llegar al mediodía | Llegar con el cursor |
| C1 | Cielo que se enrojece | Arrastrar el día | Cursor por la línea |
| C2 | Mesa con plato de más (y la Mía) | Tocar | Clic |
| C3 | Taza, cobija y pan | Tocar cada cosa | Clic en cada una |
| C4 | Libreta que se cierra | Tocar | Clic |
| C5 | Marcas en la pared | Pasar el dedo | Pasar el cursor |
| C6 | El sol toca el cielo | Arrastrar | Arrastrar |
| C7 | Sol tras el horizonte | Arrastrar | Arrastrar |
| N1 | Ventanas que se encienden | Arrastrar el día | Cursor por la línea |
| N2 | Dos ventanas | Tocar una; la otra guiña | Clic o hover |
| N3 | Dos luces que se acercan | Arrastrar | Arrastrar |
| N4 | Luces del barrio (con luces de colores) | Pasar el dedo | Cursor |
| N5 | Casita oscura | Tocar, se enciende | Clic |
| N6 | Luz de la casita que crece | Queda encendida | Igual |
| N7 | Lámpara | Tocar, queda encendida | Clic |
| E1 | Camino y luz al final | Arrastrar | Arrastrar |
| E2 | Barco | Tocar | Clic |
| E3 | Notas | Tocar (solo imagen) | Clic |
| E4 | Puerta del jardín | Tocar | Clic |

## 5. Cómo se recorre
- **Pantalla vertical, táctil primero.** Escena arriba, texto del fragmento debajo, línea del día abajo con un control de 44 px o más. Objetos tocables de 44 px o más.
- **Recorrido guiado y libre a la vez (propuesta mía):** el objeto del fragmento siguiente respira con un halo suave; además se puede mover la línea del día libremente. El texto de un fragmento aparece al activar su objeto y se queda. Puntos de avance 6 · 7 · 7 · 4, sin números.
- **Computador:** mismo recorrido. El cursor sobre la línea mueve el día; el hover muestra el halo del objeto; clic lo activa. La composición usa el ancho: escena grande al centro y texto a un lado. El diseño de computador se prueba aparte.
- **Teclado:** línea del día como control deslizante (flechas), Tab recorre los objetos, Enter o Espacio los activa.

## 6. Accesibilidad
- `prefers-reduced-motion`: sin bucles ni olas; las transiciones pasan a fundidos de 150 ms o a cambio directo; los gestos de arrastre se reemplazan por toque; el día salta entre las paradas.
- Línea del día con `role="slider"` y `aria-valuetext` ("Solecito, mediodía"). Texto de cada fragmento en `aria-live="polite"`. El SVG decorativo va con `aria-hidden`; los objetos tocables son botones con nombre.
- Contraste de texto 4.5:1 mínimo sobre cualquier cielo (franja o fondo semiopaco bajo el texto).
- El escrito final y los fragmentos existen como texto real (no dentro de imágenes), legibles con lector de pantalla.

## 7. Rendimiento
- Un solo SVG inline, sin librerías, sin imágenes de trama, sin filtros ni desenfoques.
- Solo `transform` y `opacity` en animación; `--t` actualizado con `requestAnimationFrame`.
- Presupuesto: menos de unos 400 nodos SVG; personitas de la portada con `<use>` y desfase de animación; menos de 150 KB en total.
- Animaciones en pausa con la pestaña oculta o fuera de pantalla.
- Objetivo 60 fps en una tablet de gama media; se prueba en el aparato real, no solo en el emulador.

## 8. Pantalla de cierre (escrito final)
Al activar la lámpara de Negrita 7, la escena se asienta en la noche cálida y morena; la línea del día se desvanece. Las cuatro estrofas aparecen una por objeto (E1 a E4). Después de la estrofa 4 la puerta queda abierta, sin "fin", sin repetir y sin botones llamativos; solo un "volver al inicio del día" discreto.

## 9. Plan de implementación (Prompt 5)
1. Esqueleto de la página, portada oscura, contador y botón con el interruptor del autor. Verifica: abre y cierra con el interruptor.
2. Escenario estático por capas con `--t` (cielo, astros, montañas, camino). Verifica: arrastrar la línea cambia todo de forma continua.
3. Chica, Concha y la caminata. Verifica: se ven bien en cada punto del día.
4. Objetos y textos de Solecito (6). Verifica: cada gesto activa su texto.
5. Objetos y textos de Cielito (7), con la Mía.
6. Objetos y textos de Negrita (7).
7. Escrito final y cierre (4 estrofas).
8. Accesibilidad y `prefers-reduced-motion`.
9. Rendimiento y pruebas en tablet y celular verticales y en computador.
10. Revisión del autor y ajustes.

## 10. Abiertos
- Color favorito de ella: sin confirmar (morado o rosado); no bloquea.
- Contenido exacto de RC4 y RC5 para afinar los detalles visibles.
- RE5 (referencias del autor como notas descubribles): este diseño no las incluye; decidir en el Prompt 5 si se añaden.
- Fromm sin contrastar con el libro; Jung es paráfrasis propia (ver `texto-final.md`).
- Interruptor del autor: forma concreta en el Prompt 6.
