# Construcción de la página (Prompt 5) · Plan de implementación

> **Para quien ejecute:** usar superpowers:executing-plans (o subagent-driven-development). Los pasos usan casillas `- [ ]`.

**Meta:** construir `index.html` (un solo SVG inline, sin librerías) según `docs/escena.md` y `docs/texto-final.md`, más `docs/pruebas.md`.

**Arquitectura:** un SVG por capas; variable `--t` (0–1) en el contenedor mueve cielo, astros y paisaje. Los objetos son `<button>` con estado propio (`data-estado`). Un script pequeño: `setT`, `activar`, `siguiente`. Solo `transform` y `opacity` animados.

**Tecnología:** HTML + CSS + JS vanilla; verificación con un script Node (`tools/check.mjs`) y capturas con Playwright.

**Fuentes:** `docs/escena.md` (manda), `docs/texto-final.md` (textos, sin cambiar una palabra), `docs/voz-y-reglas.md`, `docs/contexto-ella.md`.

## Restricciones globales
- Un solo `index.html`, < 150 KB, < ~400 nodos SVG; sin imágenes de trama, filtros ni desenfoques.
- Español de Ecuador, "tú"; textos de `texto-final.md` literales; sin fechas en el texto.
- Sin música ni audio. Sin Kuromi. Ninguna perrita se nombra en el texto.
- Paleta: cacao/tierra/ámbar; acento dorado (Solecito), rosado (Cielito), morado (Negrita); ella con un toque dorado mínimo.
- Táctil primero: objetos ≥ 44 px; línea del día `role="slider"`; textos en `aria-live="polite"`; contraste ≥ 4.5:1; `prefers-reduced-motion` respetado.
- Desbloqueo provisional por parámetro en el enlace (`?abierto=1`): NO es seguridad (repo público).
- Nada de `notas-privadas/` en el repo.

## Review Focus
1. Reducir movimiento activado: ningún bucle ni ola; el día salta entre paradas.
2. Teclado solo: flechas mueven el día, Tab recorre objetos, Enter/Espacio activan.
3. Pantalla de 360 px de ancho: nada se corta, objetos ≥ 44 px.
4. Activar un objeto fuera de orden o dos veces: el texto no se duplica ni se pierde.
5. Pestaña oculta: animaciones en pausa; sin errores en consola.

---

### Tarea 1: Esqueleto, portada, contador y desbloqueo provisional
**Archivos:** crear `index.html`, `tools/check.mjs`.
**Produce:** `estaAbierto(): boolean` (lee `?abierto=1`), `actualizarContador(): void`.
- [ ] Escribir `check.mjs`: falla si falta `index.html`, pesa >150 KB, contiene "Kuromi", o hay >400 nodos SVG.
- [ ] Ejecutar `node tools/check.mjs`; esperado: FALLA (no existe).
- [ ] Crear portada oscura (cacao), contador que corre hasta el 24/11/2026, botón "Desbloquear" apagado con "aún no" si `estaAbierto()` es falso.
- [ ] Verificar: sin parámetro el botón está deshabilitado; con `?abierto=1` se activa. `check.mjs` pasa.
- [ ] Commit + vista previa.

### Tarea 2: Escenario por capas con `--t`
**Archivos:** modificar `index.html`.
**Produce:** `setT(t: number): void` (0–1, actualiza `--t` con rAF); línea del día `role="slider"` con `aria-valuetext`.
- [ ] Capas 0–4 de escena.md §2 (cielo, astros, montañas, suelo, camino).
- [ ] Verificar: arrastrar la línea cambia cielo, sol, luna y color de forma continua; flechas del teclado la mueven.
- [ ] Commit + vista previa.

### Tarea 3: Chica, Concha y caminata
**Consume:** `setT`. **Produce:** grupo `#personajes`, ciclo de camino con `transform`.
- [ ] Figura sencilla, sin rasgos finos; toque dorado mínimo; la Concha se adelanta.
- [ ] Verificar: se ven bien en `--t` = 0, 0.3, 0.55, 0.9.
- [ ] Commit + vista previa.

### Tarea 4: Solecito (6 fragmentos)
**Produce:** `activar(id: string): void`, `siguiente(): string | null`, región `#texto` con `aria-live`.
- [ ] Objetos S1–S6 (ventana, flor, Concha/puerta/puesto, cajón, manos, sol alto) con textos literales; halo en el siguiente objeto.
- [ ] Verificar: cada gesto muestra su texto y se queda; reactivar no duplica.
- [ ] Commit + vista previa.

### Tarea 5: Cielito (7 fragmentos, con la Mía)
- [ ] Objetos C1–C7, iglesia con luz, la Mía asoma en la mesa; Mt 18,22 literal.
- [ ] Verificar igual que la Tarea 4. Commit + vista previa.

### Tarea 6: Negrita (7 fragmentos)
- [ ] Objetos N1–N7, luces de colores entre las del barrio, Mt 25,40 literal, lámpara final.
- [ ] Verificar igual que la Tarea 4. Commit + vista previa.

### Tarea 7: Escrito final y cierre
**Consume:** `activar`. **Produce:** `mostrarCierre(): void`.
- [ ] Al activar N7: noche fija, línea del día se desvanece, 4 estrofas (E1–E4) una por objeto, notas solo imagen, "volver al inicio del día" discreto, sin "fin".
- [ ] Verificar: estrofas literales; el enlace reinicia a `--t` = 0.
- [ ] Commit + vista previa.

### Tarea 8: Accesibilidad y movimiento reducido
- [ ] `prefers-reduced-motion`: sin bucles; fundidos de 150 ms; el día salta entre paradas.
- [ ] Verificar contraste ≥ 4.5:1 (franja bajo el texto) y recorrido solo con teclado.
- [ ] Commit.

### Tarea 9: Rendimiento y pruebas
**Archivos:** crear `docs/pruebas.md`.
- [ ] Capturas con Playwright: tablet vertical (820×1180), celular (390×844), computador (1440×900), con y sin movimiento reducido.
- [ ] `check.mjs` final: peso, nodos, "Kuromi", ortografía básica, sin datos privados. Registrar resultados en `pruebas.md`; marcar lo no medido como "no verificado" (60 fps en tablet real).
- [ ] Commit + push.

### Tarea 10: Revisión del autor
- [ ] El autor la ve en su tablet; ajustes; aprobación.

## Autorrevisión
- Cobertura: los 10 pasos de escena.md §9 están, mapeados 1:1.
- Pendientes que no bloquean: color favorito, detalles de RC4/RC5, RE5 (no se añade por defecto).
