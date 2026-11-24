# Requisitos (Fase 2 · Prompt 1)

Estado: borrador para aprobación del autor (Christopher). Documento de referencia para la Fase 3 en adelante. No incluye el texto final: solo qué debe hacer la página y qué datos hay.

Fuentes: entrevista con el autor, `docs/diseno.md`, `docs/superpowers/specs/2026-11-23-declaracion-design.md`, `docs/contexto-ella.md`, `docs/voz-y-reglas.md`.

## 1. Sensación y propósito
- Que Salomé sienta que siempre va a ser amada y que él la mira con atención, sin que se lo digan de forma directa.
- Es una declaración de amor hecha pieza de arte, no una cronología ni un informe.
- Una sola escena viva: el cielo, la luz, el paisaje, los personajes y el texto cambian al mover el cursor o el dedo por la línea de tiempo.

## 2. Requisitos funcionales
- RF1. Pantalla de inicio con el contador. Botón de "reproducir" para la música (no se reproduce sola).
- RF2. Desbloqueo manual: el contador puede llegar a cero el 24/11/2026, pero la página sigue cerrada hasta que el autor decida abrirla. Esto reemplaza la fecha provisional 31/12/2026 de la Fase 0.
- RF3. Parte 1: una nota grande de "Feliz cumpleaños" con animación de muchas personas pequeñas (niños, familia, tías, abuelos).
- RF4. Parte 2: la analogía del día, con tres movimientos y sus apodos: Solecito (amanecer/mediodía), Cielito (atardecer), Negrita (noche). Ella está siendo parte de él todo el día.
- RF5. Parte 3: un escrito final en su propia sección, fuera de los tres movimientos. Base: el mito de Orfeo y Eurídice, con foco en la confianza.
- RF6. Funciona en tablet y en teléfono. Se publica en GitHub Pages sin servidor.
- RF7. Acceso: enlace público, sin contraseña. Se deja abierta unas horas y luego se cierra desactivando Pages (o pasando el repositorio a privado; ver datos abiertos).
- RF8. Animación de la escena: una chica camina con su perrita.

## 3. Requisitos de contenido
- RC1. Contar lo que ella hace y es, sin fechas exactas ni hechos de la relación.
- RC2. Temas centrales:
  - Confianza: contarle todo lo que él ha vivido sin sentirse juzgado; agradecer por eso; que ella tenga paciencia; que ella le cuente todo lo que tiene en la mente.
  - Ella se preocupa por muchas cosas aunque nadie lo nota.
  - Le encanta estar con los niños, ayudar y servir. Insiste en seguir sirviendo.
- RC3. Detalles pequeños de Ambato como referencias aisladas, para mostrar que él nota cosas chiquitas:
  - Iglesia del Espíritu Santo (Ingahurco), catequesis.
  - Lunes ayudando en el Mercado Modelo, dando comida a personas de bajos recursos.
  - Hogar Santa Marianita.
  - Bajar a su casa en Ingahurco bajo.
- RC4. Primer encuentro (texto aprobado por el autor): "Te vi sentadita en una banca, con tus mechones turquesas. Te saludé y me fui. Ese primer día casi no hablamos."
- RC5. Fin de año (texto aprobado): "Cada fin de año salimos a recorrer el centro de Ambato, a ver a las viudas y a despedir el año juntos."
- RC6. Atardeceres y amaneceres (texto aprobado): "Cada atardecer y cada amanecer te tomo una foto, y siempre termino dando gracias por hacer que el cielo se vea tan bonito, mi solecito. Jesús también miró el cielo al caer la tarde: «el cielo está rojizo» (Mateo 16:2)."
- RC7. Fe, con una frase que la anime y le recuerde que Dios siempre está con ella y nunca la va a abandonar (texto aprobado): "Yo estoy con ustedes todos los días, hasta el fin del mundo" (Mateo 28:20).
- RC8. Servicio, sobre todo a los niños (texto aprobado): "Ella insiste en seguir sirviendo, sobre todo a los niños: «cada vez que lo hicieron con uno de estos mis hermanos más pequeños, conmigo lo hicieron» (Mateo 25:40)." Ver dato abierto D2.
- RC9. Familia: niños, su familia, sus tías y sus abuelos. Todo amor y Jesús como algo muy importante.
- RC10. Referencias de cultura (solo guiños, no eje):
  - Mitos y autores del documento de diseño (Orfeo y Eurídice, Filemón y Baucis, Eros y Psique; Barthes, Fromm, Rilke, Jung). Se verifican antes de usarse.
  - Películas: no tienen una película favorita específica. Les gustan Interstellar y Shrek 2. La última que vieron juntos en cine con su prima fue "El gato con sombrero" (referencia; no es eje de la página).
  - Música: Humbe, Kevin Kaarl, Rels B, Paulo Londra, Morat, Manuel Medrano y Wuicho Kun (cantautor mexicano, confirmado por el autor).
- RC11. Se excluyen: Kuromi; contenido íntimo, de conflicto, salud, familia delicada, dinero o terceros.
- RC12. Los textos del autor van completos; las citas de obras ajenas, breves y verificadas (ver `docs/voz-y-reglas.md`).

## 4. Requisitos de estilo
- RE1. Paleta combinada en varias escenas: rosado, morado y dorado (ella usa joyería dorada).
- RE2. Personajes:
  - Ella: morena, estatura media, figura natural. Sin énfasis en partes del cuerpo (decisión propuesta por mí; el autor pidió que no se destaque, pendiente de su visto bueno en la Fase 5).
  - Perritas: Concha (la preferida de ella) y Mía (del autor). Son pekineses, color café, cara achatada. Ambas son queridas, pero Concha más.
- RE3. Voz: segunda persona ("tú"), presente, sin fechas, español de Ecuador. Simbólica e indirecta; no explica la metáfora.
- RE4. Nada de estructura académica (objetivo, marco teórico, introducción).
- RE5. Las referencias del autor (mitos, autores) van como notas descubribles, no como citas largas.

## 5. Decisiones tomadas
| # | Decisión | Quién |
|---|----------|-------|
| D1 | Desbloqueo manual; el contador puede llegar a cero el 24/11 y la página sigue cerrada hasta que el autor la abra. | Autor |
| D2 | Acceso público por enlace, sin contraseña; se cierra después de unas horas desactivando Pages o pasando a privado. | Autor |
| D3 | Música con botón de reproducir al inicio. | Autor |
| D4 | Paleta: rosado, morado y dorado combinados en varias escenas. | Autor |
| D5 | Escena única en capas (SVG/CSS) controlada por la posición sobre la línea de tiempo. | Propuesta mía, pendiente de aprobación del autor |
| D6 | Escritura final en una parte aparte, con Orfeo y Eurídice como base del mito, foco en la confianza. Clitia eliminada. | Autor |
| D7 | Referencias bíblicas: solo palabras atribuidas a Jesús o pasajes del Evangelio, no citas generales de la Biblia. | Autor |
| D8 | Ambato en referencias aisladas, no como historia. | Autor |
| D9 | Película "El gato con sombrero" solo como referencia, no como eje. | Autor |
| D10 | Figura de la protagonista sin énfasis en partes del cuerpo. | Propuesta mía, sin objeción del autor |
| D11 | Los tres movimientos se llaman Solecito, Cielito y Negrita. | Autor |

## 6. Datos resueltos
- Color favorito: rosado y morado (combinados; ver D4).
- Perritas: Concha y Mía, pekineses.
- Cantante "wuicho kum": Wuicho Kun.
- Navidad: no pasan Navidades juntos. Su tradición es el fin de año: recorrer el centro de Ambato y ver a las viudas.
- Primer encuentro: en una banca, con mechones turquesas; se saludaron y él se fue; casi no hablaron ese primer día.
- Protagonista y perritas: ver RE2.

## 7. Datos abiertos (no bloquean la Fase 2)
- D1. Fecha de graduación: no es necesaria para la página; no se usa a menos que el autor la pida.
- D2. Mateo 25:40: confirmar la redacción de la edición católica que usa la parroquia antes de publicar. Lo mismo para Mateo 16:2 y 28:20.
- D3. Edad de los niños de la catequesis: la página los menciona de forma general, sin edades.
- D4. Hogar Santa Marianita y Mercado Modelo: datos que aporta el autor, no verificados por fuentes externas. Se muestran como referencias aisladas.
- D5. GitHub Pages: verificar si desactivar Pages o pasar el repositorio a privado cierra la página en el plan gratuito, antes del cumpleaños.
- D6. Escritura final y poema: se escriben en la Fase 4.
- D7. Visibilidad pública de los barrios (Ingahurco, Mercado Modelo): el autor decidió incluirlos como referencias pequeñas.

## 8. Criterios de aceptación
- CA1. La página abre sin servidor en GitHub Pages, en tablet y en teléfono.
- CA2. La página no se abre antes de que el autor decida abrirla, aunque el contador llegue a cero el 24/11.
- CA3. Al mover la posición sobre la línea de tiempo cambian cielo, luz, paisaje, personajes y texto a la vez.
- CA4. Aparecen los tres nombres (Solecito, Cielito, Negrita) y la parte final con el escrito de Orfeo y Eurídice.
- CA5. Las citas bíblicas están verificadas contra la Biblia de la parroquia (dato D2).
- CA6. No aparece contenido de la lista de exclusiones (RC11).
- CA7. No hay fechas exactas ni estructura académica en el texto.
- CA8. El autor aprueba el documento y ningún dato abierto bloquea la Fase 3.
