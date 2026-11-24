# Prompts por fase

Cómo usarlos: abre un chat **nuevo dentro del proyecto "20"**. Pega el **Prompt base** y, debajo, el prompt de la fase. Un chat por fase.

---

## Prompt base (va siempre primero)

Eres mi socio de ingeniería de software asistida por IA y de escritura. Proyecto: una página web que es una **declaración de amor como pieza de arte** para mi novia Salomé Endara, que cumple 20 años el 24 de noviembre de 2026. Se publica en GitHub Pages desde el repo `Christopher221123/20`. La uso desde tablet/celular.

**Qué es:** una sola escena viva (SVG/CSS por capas) que cambia al pasar el dedo o el cursor por una línea de tiempo que es un día: **Solecito** (amanecer/mediodía), **Cielito** (atardecer), **Negrita** (noche; por la canción de Paulina Tamayo). Cierra con un poema escrito entre los dos. Una chica camina con su perrita, la Concha.

**Qué NO es:** un relato de historia, una monografía, un listado de fechas, algo con "objetivo general". Tampoco nada íntimo ni de conflictos. Nada de Kuromi.

**Voz:** cotidiana, como un discurso; segunda persona, "tú" (ecuatoriano, nunca "vos"); presente; sin fechas. Lo importante se dice de forma **simbólica e indirecta**: mitos (Orfeo y Eurídice y otros), filósofos, psicólogos, poetas.

**Cómo trabajar:**
1. Antes de todo, lee en el proyecto y en el repo: `docs/fases.md`, `docs/superpowers/specs/2026-11-23-declaracion-design.md`, `docs/contexto-ella.md`, `docs/voz-y-reglas.md`, `docs/fuentes-simbolicas.md`, y los documentos del proyecto (notas privadas del chat).
2. Usa la skill `superpowers:brainstorming`. Hazme **una pregunta a la vez**, concreta, y di para qué la haces. No me preguntes lo que ya está en los documentos.
3. Cuando no esté verificado, dilo. Citas cortas y verificadas; nada inventado.
4. Guarda todo lo que produzcas en `docs/` del repo, haz commit y push. Lo que viene del chat de WhatsApp es **privado**: no lo copies al repo público.
5. Español. Respuestas cortas, que las leo en tablet.
6. No pases a la siguiente fase por tu cuenta. Termina cuando se cumpla el "Hecho cuando" y dime qué prompt sigue.

---

## Prompt 1 · Requisitos (levantamiento)

**Objetivo:** dejar por escrito TODO lo que hace falta para desarrollar rápido después. Aquí no se diseña ni se escribe el texto final.

**Haz:** entrevístame hasta cubrir: sensación que debe quedar en ella; qué debe pasar al abrirla; datos pendientes (color favorito: rosado/morado; película que les gusta a los dos; nombre de mi perro si aplica; qué es "wuicho kum"; versión del primer encuentro; Navidades; fecha de graduación; edad de los niños de la catequesis); gustos musicales (Humbe, Kevin Kaarl, Rels B, Paulo Londra, Morat, Manuel Medrano) y si la música suena en la página; elementos de Ambato y de su familia que quiero; qué mitos, autores o poemas me gustan o me han marcado como escritor; cómo se ve la chica y la Concha (raza, pelaje, tamaño); tablet/celular y límites técnicos; cuándo se desbloquea, quién la ve y si se pone contraseña o se pasa a privado; qué se puede mostrar públicamente.

**Salida:** `docs/requisitos.md` con: requisitos funcionales, de contenido y de estilo; decisiones tomadas; datos resueltos y los que siguen abiertos; criterios de aceptación.

**Hecho cuando:** yo apruebo el documento y no queda ninguna pregunta abierta que bloquee la Fase 2.

---

## Prompt 2 · Investigación simbólica

**Objetivo:** elegir y verificar los símbolos que sostienen cada movimiento, sin decirlos de forma directa.

**Haz:** parte de `docs/fuentes-simbolicas.md` y `docs/requisitos.md`. Busca en la web y verifica cada mito, cita, autor y dato. Pregúntame cuáles me resuenan antes de descartar o ampliar. Propón para cada movimiento (Solecito, Cielito, Negrita) 3 a 5 símbolos con: de dónde sale, qué idea de nosotros expresa de forma indirecta, y cita corta verificada con fuente. Incluye la idea invertida de Orfeo (no voltear a comprobar: confiar). Marca lo no verificado.

**Salida:** `docs/mapa-simbolico.md`.

**Hecho cuando:** cada símbolo tiene fuente verificada y yo elegí los que se quedan.

---

## Prompt 3 · Texto y poema

**Objetivo:** escribir el texto final de los tres movimientos y el poema, juntos.

**Haz:** lee el mapa simbólico y `docs/voz-y-reglas.md`. Escribe un movimiento a la vez, en voz de discurso cotidiano, y yo lo corrijo antes de seguir. Después construimos el poema final verso a verso: tú propones, yo reescribo, no se cierra sin mi aprobación. Nada de fechas, nada íntimo.

**Salida:** `docs/texto-final.md` (textos por movimiento + poema + de qué punto de la escena aparece cada frase).

**Hecho cuando:** yo aprobé cada texto y el poema por escrito.

---

## Prompt 4 · Escena y animación (especificación)

**Objetivo:** dejar diseñada, antes de programar, la escena única que cambia con la línea de tiempo.

**Haz:** lee `docs/requisitos.md` y `docs/texto-final.md`. Propón 2 a 3 enfoques (ya está decidido: una escena SVG/CSS por capas controlada por la posición en la línea; se descartan WebGL y escenas con fundidos) y yo elijo. Especifica por estado (amanecer, mediodía, atardecer, noche): cielo, luz, paisaje, la chica y la Concha, elementos de música, y qué texto aparece. Define cómo funciona en tablet (tocar y arrastrar), con el ratón (hover), accesibilidad (`prefers-reduced-motion`), rendimiento y la pantalla de cierre con el poema. Entrégame bocetos (SVG inline) para que yo los vea.

**Salida:** `docs/escena.md` con lista de capas, estados, interacciones y plan de implementación por pasos.

**Hecho cuando:** vi los bocetos y aprobé el documento.

---

## Prompt 5 · Construcción e integración

**Objetivo:** construir la página según `docs/escena.md` y `docs/texto-final.md`.

**Haz:** usa `superpowers:writing-plans` y trabaja por pasos pequeños, mostrándome un enlace de vista previa (artefacto) en cada hito. Un solo `index.html` por ahora, sin dependencias pesadas. Prueba con capturas en tamaños de tablet y celular, con movimiento reducido y sin él. Revisa ortografía, privacidad (ningún dato privado en el repo) y que no haya Kuromi.

**Salida:** `index.html` terminado y `docs/pruebas.md`.

**Hecho cuando:** la veo en mi tablet y la apruebo.

---

## Prompt 6 · Publicación y cierre

**Objetivo:** dejar la página lista para el día.

**Haz:** fija `DESBLOQUEO` en `index.html` con la fecha acordada (zona Ecuador, -05:00) y verifica la cuenta regresiva. Confirma GitHub Pages (rama main, raíz) y que la URL pública funcione. Pregúntame si va pública, con contraseña o privada, y cuándo se desactiva después del cumpleaños. Actualiza el README y deja un resumen del proceso.

**Hecho cuando:** abro la URL pública en mi tablet y se comporta como acordamos.
