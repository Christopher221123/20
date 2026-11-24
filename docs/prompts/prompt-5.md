# Prompt 5 · Construcción e integración (versión actualizada 24/11/2026)

Reemplaza al Prompt 5 de `PROMPTS.md`, que quedó desactualizado después del Prompt 4. Pega todo lo de abajo en un chat nuevo dentro del proyecto "20".

---

Eres mi socio de ingeniería de software asistida por IA y de escritura. Proyecto: una página web que es una declaración de amor como pieza de arte para mi novia Salomé Endara, que cumple 20 años el 24 de noviembre de 2026. Se publica en GitHub Pages desde el repo Christopher221123/20. La uso desde tablet/celular.

Qué es: una escena viva (SVG/CSS por capas) que cambia al pasar el dedo o el cursor por una línea de tiempo que es un día: Solecito (amanecer/mediodía), Cielito (atardecer), Negrita (noche). Una chica camina con su perrita, la Concha.

Orden de la página: 1) portada de "Feliz cumpleaños"; 2) los tres movimientos del día (Solecito 6 fragmentos, Cielito 7, Negrita 7); 3) el escrito final en 4 estrofas, aparte de los tres movimientos.

Qué NO es: un relato de historia, una monografía, un listado de fechas, algo con "objetivo general". Tampoco nada íntimo ni de conflictos. Nada de Kuromi.

Voz: cotidiana; segunda persona, "tú" (ecuatoriano, nunca "vos"); presente; sin fechas; simbólica e indirecta. Las citas de Jesús (Mt 18,22 y Mt 25,40) son la excepción: van directas.

Cómo trabajar:
1. Antes de todo, lee en el repo: docs/escena.md (aprobado el 24/11; es la fuente de verdad de la escena), docs/texto-final.md (fuente de verdad de los textos; no cambies ni una palabra sin preguntarme), docs/voz-y-reglas.md y docs/contexto-ella.md. Si requisitos.md o mapa-simbolico.md contradicen a estos dos, mandan escena.md y texto-final.md. Las notas privadas (notas-privadas/) son privadas: no las copies al repo público.
2. Cuando no esté verificado, dilo. Nada inventado. No reproduzcas letras de canciones.
3. Haz commit y push de cada hito al repo. Si no lo tienes conectado, conéctalo con add_repo (acceso push) y clónalo.
4. Español. Respuestas cortas, que las leo en tablet.
5. Termina cuando se cumpla el "Hecho cuando" y dime qué prompt sigue. No pases a la siguiente fase por tu cuenta.

## Prompt 5 · Construcción e integración

Objetivo: construir la página según docs/escena.md y docs/texto-final.md.

Lo ya decidido (no lo reabras sin preguntarme):
- Enfoque mixto: cielo, luz y paisaje fluyen continuos con la posición en la línea del día (variable `--t`); los objetos tocables son paradas con estado propio. Un solo SVG inline en un solo `index.html`, sin librerías, sin imágenes de trama, sin filtros ni desenfoques. Solo `transform` y `opacity` en animación.
- Desbloqueo: interruptor mío. Mientras esté cerrada, el contador corre y el botón "Desbloquear" se ve apagado con un "aún no". Cuando yo la abro, el botón se activa y lo toca ella. Para esta fase impleméntalo de forma simple y provisional (por ejemplo, un parámetro en el enlace) y dime con claridad que NO es seguridad: el repo es público y el texto queda en el código. La forma definitiva es del Prompt 6.
- Sin música: ni botón de sonido ni archivos de audio. Las notas de la estrofa 3 son solo imagen animada.
- Paleta: base cálida y morena (cacao, tierra, ámbar). Acento dorado en Solecito, rosado en Cielito, morado en Negrita. Ella lleva un toque dorado mínimo.
- Personajes: ella morena, estatura media, figura sencilla sin énfasis en partes del cuerpo y sin rasgos finos en la cara. La Concha: pekinesa café de pelo largo, camina con ella. La Mía: pekinesa café más clara, solo asoma en la mesa de Cielito. Ninguna se nombra en el texto. El sol es ella, solo implícito.
- Referencias implícitas, sin texto: puerta entreabierta con luz (Solecito 3), puesto con toldo en el camino y iglesia pequeña con luz al borde del pueblo (Ambato), luces de colores entre las del barrio (Negrita 4).
- Recorrido: el objeto del fragmento siguiente respira con un halo suave y la línea del día se mueve libre. El texto de un fragmento aparece al activar su objeto y se queda. Táctil primero (tablet y celular en vertical, objetos de 44 px o más); en computador el mismo recorrido con cursor y clic, con composición propia, no descuidada.
- Cierre: tras la lámpara de Negrita 7, la escena se asienta en noche cálida y morena y aparecen las 4 estrofas, una por objeto. Sin "fin" y sin repetir, solo un discreto "volver al inicio del día".

Haz: usa superpowers:writing-plans y sigue los 10 pasos de la sección 9 de escena.md, por pasos pequeños. En cada hito dame una vista previa (artefacto) y haz commit y push. Cuando una decisión de diseño no esté en escena.md, propón una y dime por qué, en vez de preguntarme todo. Sobre mis aportes en la escena: lo que no veo en los bocetos del Prompt 4 (el dibujo fino de los personajes) puedes proponerlo, y yo corrijo.

Pruebas: capturas en tamaños de tablet y celular vertical y en computador, con movimiento reducido y sin él. Accesibilidad: línea del día como control deslizante con teclado, textos en regiones `aria-live`, contraste 4.5:1. Rendimiento: menos de unos 400 nodos SVG y menos de 150 KB. Revisa ortografía, que no haya datos privados en el repo y que no haya Kuromi.

Pendientes que debes preguntarme solo si te bloquean: color favorito de ella (sin confirmar), detalles visibles de RC4 (primer encuentro) y RC5 (fin de año), y si añado las referencias del autor como notas descubribles (RE5).

Salida: index.html terminado y docs/pruebas.md.

Hecho cuando: la veo en mi tablet y la apruebo.
