# Diseño: "Declaración" para Salomé (20 años)

Estado: borrador para aprobación del autor (Christopher). Nada de producto se construye hasta aprobar.

## Intención
Una declaración de amor hecha pieza de arte, no un relato ni un informe. Que Salomé sienta, sin que se le diga de forma directa, que siempre va a ser amada y que él la mira con atención. Debe leerse como un discurso cotidiano y bonito, con capas simbólicas (mitos, filosofía, psicología, poesía) a la manera del autor, que es escritor.

## Metas
- Una sola escena viva: al pasar el cursor o el dedo por la línea de tiempo cambia TODO (cielo, luz, paisaje, personajes, texto) y una chica camina con su perrita.
- Tres movimientos con los tres nombres que él le da: **Solecito** (amanecer/mediodía), **Cielito** (atardecer), **Negrita** (noche; raíz de la canción de Paulina Tamayo). Cierra con un poema escrito junto con el autor.
- Profundidad simbólica: decir las cosas de forma indirecta (mitos como Orfeo y Eurídice, Filemón y Baucis, Eros y Psique; autores como Barthes, Fromm, Rilke, Jung). Las referencias van como notas descubribles, no como citas largas.
- Funciona en tablet y teléfono, en GitHub Pages, sin dependencias de servidor.

## No-metas
- No es una cronología con fechas. No se cuentan hechos de la relación.
- No hay secciones tipo trabajo académico ("objetivo general", "marco teórico").
- No se usa nada íntimo, de conflicto, familia delicada, salud ni terceros.

## Anti-metas (fracaso aunque "funcione")
- Que se sienta superficial, genérico o tipo plantilla.
- Que explique lo simbólico en vez de dejarlo sugerido.
- Que dependa de una persona que ve el código para entenderse (el repositorio es público).

## Restricciones
- Hoy es 2026-11-23; el cumpleaños es 2026-11-24. La página pública se desactiva después del cumpleaños.
- Citas de obras ajenas: breves o solo referencia; los textos del autor van completos.
- Todo contenido público debe ser aprobado por el autor.

## Enfoques considerados
1. **Escena única en capas (SVG/CSS) controlada por la posición sobre la línea.** Elegido: ligera, funciona en tablet, permite que todo cambie a la vez.
2. Canvas/WebGL generativo: más espectacular pero riesgoso y pesado. Descartado.
3. Escenas separadas con fundido: seguro pero no cumple "que cambie todo". Descartado como base; sirve de respaldo.

## Decisiones del autor
- Forma de declaración artística, no monografía ni cronología.
- Los tres nombres como tres movimientos.
- Desarrollo en fases, con documentación primero.

## Para el constructor
Ver `docs/fases.md`, `docs/contexto-ella.md`, `docs/voz-y-reglas.md` y `docs/fuentes-simbolicas.md`.
