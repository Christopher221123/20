"""Capturas y medidas. Uso: python3 tools/capturas.py <carpeta_salida> [url_base]"""
import sys, os, json
from playwright.sync_api import sync_playwright
out = sys.argv[1]; os.makedirs(out, exist_ok=True)
base = sys.argv[2] if len(sys.argv) > 2 else 'file://' + os.path.abspath('index.html')
tamanos = {'celular': (390, 844), 'tablet': (820, 1180), 'pc': (1440, 900)}
with sync_playwright() as p:
    b = p.chromium.launch()
    for rm in ('no-preference', 'reduce'):
        for n, (w, h) in tamanos.items():
            c = b.new_context(viewport={'width': w, 'height': h}, reduced_motion=rm)
            pg = c.new_page(); errs = []
            pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
            pg.on('pageerror', lambda e: errs.append(str(e)))
            pg.goto(base + '?abierto=1'); pg.wait_for_timeout(300)
            pg.screenshot(path=f'{out}/{n}-{rm}-0-portada-cerrada.png')
            pg.goto(base); pg.wait_for_timeout(200)
            pg.screenshot(path=f'{out}/{n}-{rm}-0-cerrada.png')
            pg.goto(base + '?abierto=1'); pg.click('#btn-desbloquear'); pg.wait_for_timeout(1800)
            pg.screenshot(path=f'{out}/{n}-{rm}-1-cartel.png')
            for t in (0, .3, .55, .9):
                pg.goto(f'{base}?abierto=1&fase=dia&t={t}'); pg.wait_for_timeout(700)
                pg.screenshot(path=f'{out}/{n}-{rm}-2-t{int(t*100):02d}.png')
            nodos = pg.evaluate("document.querySelectorAll('svg *').length")
            print(n, rm, 'nodos SVG:', nodos, 'errores:', errs)
            c.close()
    b.close()
