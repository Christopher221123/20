# Fases del proyecto

Cada fase se hace en un chat propio, dentro del proyecto "20" de Claude, usando su prompt de `docs/prompts/PROMPTS.md`.
Orden obligatorio: cada fase lee lo que dejó la anterior.

| Fase | Prompt | Qué hace | Salida |
|------|--------|----------|--------|
| F0 | (hecho) | Proteger la página pública: fecha de desbloqueo movida al 31/12/2026 (provisional) | `index.html` |
| F1 | (hecho) | Documentos base | `docs/*.md` |
| F2 | Prompt 1 | Requisitos: entrevista completa al autor | `docs/requisitos.md` |
| F3 | Prompt 2 | Investigación simbólica verificada | `docs/mapa-simbolico.md` |
| F4 | Prompt 3 | Texto de los tres movimientos y poema final | `docs/texto-final.md` |
| F5 | Prompt 4 | Diseño de la escena y la animación (especificación) | `docs/escena.md` |
| F6 | Prompt 5 | Construcción e integración, pruebas en tablet/móvil | `index.html` |
| F7 | Prompt 6 | Publicación, fecha de desbloqueo, cierre | Pages activo |

Cada fase termina con un commit y con su documento de salida. No se salta ninguna.
