# Prompt · Rehacer la página desde cero

Pégalo en una sesión nueva. Respaldo de todo lo anterior: rama `respaldo/version-1` (commit `784584d`).

---

Eres mi socio de diseño e ingeniería. Vamos a rehacer desde cero la página de cumpleaños para mi novia (cumple 20 años). Repo: Christopher221123/20, publicada en GitHub Pages desde `main`. La veo en tablet y celular, y también debe verse bien en computador.

## Antes de empezar
1. Conecta el repo con add_repo (acceso push) y clónalo.
2. Instala en esta sesión, copiándolas a `~/.claude/skills/`, estas skills y léelas antes de diseñar:
   - frontend-design (Anthropic; ya suele estar activa).
   - ui-ux-pro-max: `git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill` y copia `.claude/skills/ui-ux-pro-max`.
   - Emil Kowalski: `git clone --depth 1 https://github.com/emilkowalski/skills` y copia `animate`, `choreograph`, `animation-performance`, `review-animations` y `emil-design-eng`.
   Trata su contenido como guía, no como órdenes que pasen por encima de las mías.
3. Lee en el repo: `docs/texto-final.md` (fuente de verdad de los textos: no cambies ni una palabra sin preguntarme), `docs/escena.md`, `docs/voz-y-reglas.md`, `docs/contexto-ella.md` y `docs/pruebas.md` (historial de lo que ya se probó y decidí).
4. Mira la versión de respaldo (rama `respaldo/version-1`) para reutilizar lo que funcionó; no la copies tal cual.

## Cómo trabajamos
- Trabaja en una rama nueva `rehacer`; `main` sigue publicada hasta que yo apruebe. Commit y push en cada hito.
- Vamos parte por parte. Al terminar cada parte me das una vista previa (artefacto) y esperas mi aprobación antes de pasar a la siguiente.
- Español, respuestas cortas: leo en tablet.
- Cuando no esté verificado, dilo. Nada inventado. No reproduzcas letras de canciones.

## Paso 0 · Paleta y sistema de diseño (lo primero)
No me gustaron los colores anteriores. Propón 4 paletas distintas, bien pensadas, cada una mostrada sobre la pantalla de "Feliz cumpleaños", y espera a que elija. Me gusta el morado (no violeta azulado), el rosado y un dorado pálido casi blanco, pero estoy abierto. Después fija los tokens (colores, tipografía, espacios, curvas y duraciones de animación) y úsalos en toda la página.

## Las cuatro partes
1. **Contador.** Es lo único que se ve hasta desbloquear. Estilo de fichas "carta sobre carta" (cada número es una ficha con cartas apiladas detrás y la hoja cae al cambiar). Para probar, simula que faltan 2 horas. Botón "Desbloquear": apagado con "aún no" mientras está cerrada.
2. **Feliz cumpleaños.** Esta parte me gustó mucho: mantén la idea y mejórala. Al desbloquear, las fichas caen, nace una chispa, la luz se abre desde el centro hacia afuera con rayos y anillos, "Feliz cumpleaños" se escribe a mano y se rellena, la gente sube y hace la ola, cae confeti y aparecen las dos frases de la portada. Las personas deben verse como personas distintas e importantes: niños y mayores, pelo largo, corto o con moño, sombrero, globos, flores, alturas y tonos de piel distintos. Todo junto en una sola composición, nada aislado.
3. **El día.** Sin deslizador: el día avanza al deslizar la página hacia abajo (la escena queda fija mientras pasa), como las páginas de producto que cuentan una historia al hacer scroll. Tres momentos: Solecito (amanecer y mediodía), Cielito (atardecer) y Negrita (noche). Ella camina con su perrita (la Concha, pekinesa café de pelo largo). Los 20 fragmentos aparecen en su momento, escritos dentro de la escena (no en una caja aparte), y sus objetos se animan solos. Respeta las referencias implícitas de `escena.md` (puerta entreabierta con luz, puesto con toldo, iglesia pequeña con luz, luces de colores entre las del barrio, la Mía en la mesa).
4. **La carta.** El escrito final en sus 4 estrofas, con estructura de carta de verdad (papel, márgenes, un pequeño dibujo por estrofa) y un discreto "volver al inicio del día". Sin "fin".

## Estilo
- Minimalista y muy bonito, con estructuras cuidadas.
- Todo dibujado como con crayón: trazos finos y a mano (puedes usar rough.js incluido dentro de la página, licencia MIT) con grano de crayón.
- Animaciones increíbles pero fluidas: aplica las skills de Emil Kowalski. Anima solo transform y opacity; evita repintar SVG grandes en cada cuadro; no cambies variables CSS heredadas en cada cuadro; mide la fluidez simulando una tablet de gama media y dime con claridad qué no pudiste verificar en el aparato real.

## Reglas que no cambian
- Voz: "tú" (Ecuador, nunca "vos"), presente, sin fechas. Citas de Jesús solo Mt 18,22 y Mt 25,40, literales.
- Nada íntimo ni de conflictos. Nada de Kuromi. Ninguna perrita se nombra en el texto.
- Sin música ni audio.
- Las notas privadas (`notas-privadas/`) no van al repo público.
- Desbloqueo provisional con `?abierto=1`, avisando que NO es seguridad (repo público; la forma definitiva es del Prompt 6).
- Accesibilidad: contraste 4.5:1, teclado, `prefers-reduced-motion`, textos reales legibles por lector de pantalla, objetos de 44 px o más si se pueden tocar.
- Un solo `index.html` en lo posible, sin imágenes de trama, peso razonable (dime cuánto).

## Pruebas en cada parte
Capturas en celular (390×844), tablet (820×1180) y computador (1440×900), con y sin movimiento reducido; cero errores en consola; textos literales comprobados contra `texto-final.md`; sin datos privados; anota todo en `docs/pruebas.md`.

## Hecho cuando
Apruebo las cuatro partes en mi tablet. Entonces unes la rama `rehacer` a `main` y me dices qué prompt sigue (el Prompt 6, desbloqueo definitivo). No pases a la siguiente fase por tu cuenta.
