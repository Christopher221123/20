# Pruebas (rehacer desde cero · rama `rehacer`)

## Paso 0 · Paleta y tokens (24/11)
- El autor eligió la paleta C "Papel y crayón" entre cuatro (A Ciruela y vela, B Cacao y lila, C Papel y crayón, D Buganvilla).
- Tokens en `src/index.html` (`:root`): papel #fbf3e4, papel-2 #f4e7cf, tinta #4a1650 (12,5:1), tinta-suave #6b3f6f (7,4:1), morado #8a3a8f (6,2:1), rosado-tinta #a8446c (5,1:1); rosado #e07ba0, rosado-claro #f6c9d8, dorado #e6c77e y dorado-palido #f3e3b5 solo decorativos (menos de 4,5:1).
- Letra: Caveat 600 (a mano) y Newsreader 400 normal e itálica, incrustadas y recortadas a los caracteres del español (licencia OFL). Espacios en base 4. Curvas: sale (.23,1,.32,1), mueve (.77,0,.175,1), cae (.55,0,.85,.35). Duraciones: 140, 240, 520, 900 y 1600 ms.
- `index.html` se arma con `python3 tools/build.py` desde `src/` (fuentes, rough.js y grano del papel).

## Parte 1 · Contador (24/11) · pendiente de aprobación
- Fichas de calendario con dos cartas detrás (dibujadas una vez, sin repintar). Al cambiar, una copia de la hoja vieja gira desde su argolla y cae (solo transform y opacity, 900 ms). Días aparece solo si falta 1 día o más.
- Simulación: faltan 2 horas al cargar; `?faltan=SEGUNDOS` o `#faltan-N` para probar otra cuenta.
- Botón "Desbloquear": apagado con "aún no" (`aria-disabled`, contorno punteado); con `?abierto=1` o `#abierto` se activa (morado con halo que respira). **No es seguridad.** Al tocarlo activo solo avisa que la apertura llega en la Parte 2.
- Texto para lector de pantalla (no visible): "Faltan N horas, N minutos", se actualiza cada minuto; en cero, "La cuenta está en cero." (texto de interfaz nuevo, a revisar por el autor).
- Resultados: capturas en 390×844, 820×1180 y 1440×900, con y sin movimiento reducido: 0 errores. Cuenta a cero correcta. Teclado: Tab llega al botón; Enter con el botón apagado no hace nada. Botón 220×69 px. 86 nodos SVG. Peso 98,8 KB (fuentes ~57 KB, rough.js ~27 KB).
- Fluidez (Chromium sin tarjeta gráfica, CPU 4 veces más lenta, solo comparativa): 60 cuadros por segundo de media, ningún cuadro de más de 25 ms en 300. **No verificado en una tablet real.**
- Movimiento reducido: la hoja no cae; el número cambia directo y el halo queda quieto.

## Parte 2 · Feliz cumpleaños (24/11) · pendiente de aprobación
- Ajuste (24/11): la cumpleañera está al centro del grupo (la misma figura del día) con el gorro más grande y bonito: cono morado con rayas, lunares dorados, pompón y una estrellita. Los invitados ya no llevan gorro de fiesta. Sin errores en los tres tamaños, con y sin movimiento reducido; 169,6 KB.
- Coreografía (ms desde el toque): fichas caen escalonadas (0–900) · chispa (560) · la luz se abre desde el centro del título (820) con rayos (900) y tres anillos (1000, 1180, 1360) · "Feliz cumpleaños" se escribe letra por letra (1250–2600; cada letra se descubre con una ventana que avanza, solo transform) y se rellena de morado a rosado (≈2800) · la gente sube del centro hacia los lados (2650–3500) · confeti (3500, dos caídas) · la ola (3700, dos pasadas, brazos que suben por opacidad) · frases (4300 y 4750).
- 14 personas (11 en celular), todas juntas al pie: abuela con moño gris y chal, abuelo con sombrero, señor mayor con bastón, mamá de pelo largo con flores, papá con una niña en los hombros, chica con globo, joven de pelo rizado, joven con gorro de fiesta, señora con moño y aretes dorados, niñas con coletas, flores o moño, niños con globo y gorro de fiesta; siete tonos de piel y alturas distintas. Sin rasgos de cara, solo mejillas.
- El dibujo se arma antes de tocar el botón (mientras se ve el contador), para que la apertura no espere.
- Accesibilidad: el título es un `h1` real ("Feliz cumpleaños") y recibe el foco al abrir; las frases son texto real. Con movimiento reducido no hay caídas, ola ni confeti en movimiento: aparece la composición final con unos confetis quietos.
- Resultados: capturas en 390×844, 820×1180 y 1440×900, con y sin movimiento reducido: 0 errores. `check.py` en verde. Peso 116,5 KB (el límite del script pasó de 150 a 200 KB por las fuentes incrustadas). ~920 nodos SVG en total (cada persona tiene cuerpo, brazos abajo y brazos arriba en capas separadas); en animación solo se mueven capas con transform y opacity.
- Fluidez (Chromium sin tarjeta gráfica, CPU 4 veces más lenta, solo comparativa; toda la apertura, 12 s): tablet 58 fps de media (21 cuadros de más de 25 ms en 719), celular 60 fps, computador 45 fps. Se mejoró poniendo el confeti detrás de la gente (antes, tablet 50 fps). **No verificado en una tablet real.**
- Prueba directa: `?abierto=1&fase=portada` (o `#abierto-portada`) salta a la apertura.

## Parte 4 · La carta (24/11) · pendiente de aprobación
- Después de la noche (N7) sube una hoja de papel sobre el mismo cielo de noche: margen rosado, renglones suaves, un trozo de cinta arriba y el borde dibujado a mano. Las 4 estrofas van escritas a mano (Caveat), cada verso en su renglón; si un verso no cabe (celular), sigue con sangría francesa. Sin firma, sin fecha, sin "fin".
- Un dibujo pequeño por estrofa, en el margen como garabato: 1 camino que da la vuelta al mar con una luz al final (la luz late dos veces); 2 barco que se aleja y vuelve, y la ventana se enciende cuando regresa; 3 ella caminando de frente con notas que suben detrás (solo imagen, sin sonido); 4 jardín de noche cuya puerta se abre.
- Cada estrofa aparece al llegar a ella (los versos uno tras otro) y se queda. Abajo, "volver al inicio del día": la pantalla se cubre un instante, salta al comienzo del día y se descubre (no recorre todo el día de golpe).
- Textos: las estrofas se toman de `docs/texto-final.md` al armar la página; `check.py` comprueba los 20 fragmentos, las 16 líneas y las 2 frases de la portada.
- Resultados: 390×844, 820×1180 y 1440×900, con y sin movimiento reducido: 0 errores, las 4 estrofas aparecen, ningún verso se sale de la pantalla, "volver" deja la página exactamente al inicio del día. Peso total: 168,3 KB. Fluidez del día sin cambios (58–59 fps con CPU 4×). Movimiento reducido: todo aparece directo, dibujos quietos y la puerta ya abierta.

## Parte 3 · El día (24/11) · pendiente de aprobación
- Sin deslizador: la sección mide 20 × 85 % de pantalla + 1 pantalla; la escena queda fija (`position: sticky`) y el día avanza al bajar. Cada fragmento es un tramo: en el primer 30 % ella camina hacia la estación (la cámara se mueve) y en el resto se queda; al llegar, el objeto se anima solo y el texto aparece escrito en el cielo. Al volver atrás, el texto se oculta y el objeto regresa.
- Momentos: Solecito (S1–S6, amanecer → mediodía), Cielito (C1–C7, el cielo se pone rojo al llegar a C1; el sol toca el horizonte en C6 y se esconde en C7 dejando un brillo), Negrita (N1–N7, noche con luna y estrellas). Abajo, tres palabras marcan el momento actual.
- Referencias implícitas: puerta entreabierta con luz (S1), puesto con toldo con olla y canasta (S3), iglesia pequeña con su luz (C7 y en el cerro de N4), luces de colores entre las del barrio (N4), la otra perrita asoma tras la mesa (C2). Ninguna se nombra.
- Ella (morena, vestido morado, arete dorado) camina cuadro a cuadro (tres dibujos que se alternan por opacidad) solo mientras avanza; la perrita se adelanta desde S3; en N7 ambas entran a casa.
- Textos: los 20 fragmentos se toman automáticamente de `docs/texto-final.md` al armar la página (`tools/build.py`), así que son literales. Están todos en el documento como texto real (el lector de pantalla los lee en orden).
- Rendimiento: en cada cuadro solo se escriben transform y opacity (cielo en 4 capas que se funden, sol, luna, velos de tarde y noche, 3 bandas de paisaje con paralaje, estaciones cercanas). No se cambian variables CSS por cuadro (`--wh` solo al cambiar el tamaño). Las estaciones se dibujan poco antes de necesitarse y las lejanas quedan con `display:none`.
- Resultados: capturas de las 20 paradas en tablet y de varias en celular y computador, con y sin movimiento reducido: 0 errores. Fluidez recorriendo todo el día en 24 s (CPU 4 veces más lenta, sin tarjeta gráfica, solo comparativa): tablet 56 fps de media, celular 59 fps, ningún cuadro de más de 50 ms. **No verificado en una tablet real.** Peso: 155,6 KB. Hasta ~2250 nodos SVG cuando todas las estaciones ya se dibujaron (más que antes; no se repintan).
- Movimiento reducido: la cámara y el cielo saltan entre paradas, ella no camina, los objetos quedan directo en su estado final.
- Prueba directa: `?abierto=1&fase=dia&f=7.5` salta a ese punto del día.
- Ajuste 3 (24/11, revisión cuadro por cuadro): N5 y N6 ocurren en la misma casita y la cámara no se mueve entre ambos, así que la luz nace de la casita que se ve (antes venía de fuera de la pantalla). Ella y las perritas van delante de las luces (ninguna luz les pasa por encima) y de tarde y de noche se oscurecen con su propia capa. La otra perrita ya no asoma en la mesa (camina con ellas). El sol ya va bajando cuando el cielo se pone rojo. Las casas por dentro llevan techo. Sin postes en N3. La luna bajó para no tapar el texto. Cabello de ella oscuro, apenas castaño, con mechones claros bajo el cuello. Portada: tonos de piel tomados del de ella con matices; sin la niña en hombros; la gente empieza más abajo (no asoman globos ni gorros antes de tiempo); las letras del título no se ven antes de escribirse; la luz es un círculo (no se ve un borde cuadrado al abrirse); el contador se detiene al desbloquear; el día se arma antes y se muestra cuando la apertura terminó. Medición (CPU 4×; varía ±3 fps entre corridas): apertura en tablet 53–57 fps, día 57–58 fps.
- Ajuste 2 (24/11, revisión en tablet): ella de frente, piel más clara, cabello castaño claro a los hombros, blusa morada, jean y zapatillas; dos perritas que caminan con ella, separadas (la café adelante a la derecha, la más clara atrás a la izquierda). Parpadeo: los pasos ya no son una animación con reloj que se reiniciaba al parar y seguir (podía dejar la figura sin ningún cuadro visible); ahora el cuadro depende de la distancia recorrida y siempre hay uno visible. Se quitaron capas compuestas innecesarias (cielo, velos, estrellas, resplandor) y el resplandor rojo es más pequeño, para gastar menos memoria de la tarjeta gráfica. Medición (CPU 4×): tablet 58 fps, celular 60 fps. **El parpadeo no se pudo reproducir aquí; falta confirmarlo en la tablet.**
- Ajuste tras la revisión en la tablet (24/11): la luz de la ventana (S1) ya no son franjas sobre el techo, es un brillo suave en el vidrio. Fluidez: la cámara se mueve continua durante el 55 % de cada tramo (antes 30 %, con una parada brusca), con curva suave, y el día sigue al dedo con inercia (cada cuadro se acerca al punto real, ~110 ms). Ella camina solo mientras la cámara se mueve. Las estaciones se muestran una pantalla antes de entrar, para que su dibujo ya esté listo. No se reescriben estilos que no cambiaron. Medición (CPU 4×, sin tarjeta gráfica): tablet 58 fps, celular 59 fps. **Falta confirmarlo en la tablet real.**

## Historial de la versión anterior (rama `respaldo/version-1`)


## Versión 4 · crayón y fluidez (24/11, a pedido del autor)
- Trazo de crayón: rough.js 4.6.6 (licencia MIT, incluido dentro de `index.html`, sin conexión externa) vuelve a dibujar cada línea a mano, dos pasadas, la segunda con grano. Trazo más fino (1,15).
- Fluidez: la apertura ya no usa `clip-path` ni anima dentro del SVG; disco de luz, rayos, anillos, gente y confeti son capas HTML que se mueven solo con transform y opacity. En el día, el sol y los dos personajes van en capas propias que se desplazan sin repintar el paisaje; los colores se actualizan por pasos.
- Medición (Chromium sin tarjeta gráfica, CPU 4 veces más lenta; solo comparativa): apertura 39 → 45 cuadros por segundo. En una tablet real con tarjeta gráfica debería ir mejor; **no verificado en el aparato**.
- Peso: 77 KB (con rough.js). Nodos SVG: ~350.

## Versión 3 · morado y deslizar (24/11, a pedido del autor)
- Paleta: fondo morado oscuro (#1a0f24), rosado (#eba3c3) y dorado pálido casi blanco (#f0e2b8). La carta es papel dorado pálido (#f6eedc) con tinta morada.
- Se quitó el deslizador. El día avanza al bajar la página (la escena queda fija mientras pasa); cada fragmento aparece en su punto y se oculta si se vuelve atrás. Abajo queda solo una barra de avance con Solecito, Cielito y Negrita.
- Los objetos ya no se tocan: se animan solos al llegar su fragmento.
- Pruebas: recorrido deslizando con la rueda en celular, tablet con movimiento reducido y computador: 20 fragmentos, 4 estrofas, 0 errores; 258 a 274 nodos SVG.
- Plan por partes: 1 contador, 2 felicitación, 3 el día, 4 la carta; se corrige una por una.

## Versión 2 · rediseño minimalista de líneas (24/11, a pedido del autor)
Cuatro secciones: 1) contador central (única vista hasta desbloquear); 2) "Feliz cumpleaños" que se abre desde el centro hacia afuera, con las personas alrededor del mensaje en una sola composición; 3) el día con el deslizador, los textos escritos dentro del cielo de la escena (sin caja aparte); 4) la carta con las 4 estrofas.
- Dibujo: solo líneas SVG (trazo 1,5), rellenos mínimos para las luces. El efecto de dibujarse usa `stroke-dashoffset` con `pathLength="1"` (desviación consciente de "solo transform y opacity"; es barato). La apertura usa `clip-path` en círculo.
- No se usó ningún plugin ni MCP: lo que había (Icons8, SVG.new, Stewdio) añade imágenes externas o librerías.
- Resultados v2: 43 KB; 295 a 311 nodos SVG (las personas se reparten según el ancho, máx. ~54); recorrido completo sin fallos en celular, computador y tablet con movimiento reducido; 0 errores; objetos de 45 px o más; textos literales comprobados por script.
- Mientras está cerrada, el resto de la página está oculto e `inert` (no se llega con Tab).
- Decisiones nuevas: tras el desbloqueo el contador desaparece; la carta está debajo del día y se llega bajando o sola después de la lámpara (N7); cada estrofa aparece al llegar a ella; en la carta no hay firma ni encabezado (no están en `texto-final.md`).
- Sin verificar: tablet real, 60 fps, lector de pantalla. El contraste baja un momento mientras el cielo pasa de atardecer a noche (t ≈ 0,64–0,70); en las paradas está sobre 4,5:1.

## Versión 1 (histórico)

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
