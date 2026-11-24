"""Recorrido completo deslizando la página. Uso: python3 tools/recorrido.py <carpeta> [url]"""
import sys, os
from playwright.sync_api import sync_playwright
out = sys.argv[1]; os.makedirs(out, exist_ok=True)
base = sys.argv[2] if len(sys.argv) > 2 else 'file://' + os.path.abspath('index.html')

def run(nombre, vp, rm):
    fallos = []
    with sync_playwright() as p:
        b = p.chromium.launch(); pg = b.new_context(viewport=vp, reduced_motion=rm).new_page(); errs = []
        pg.on('console', lambda m: errs.append(m.text) if m.type == 'error' else None)
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto(base + '?abierto=1'); pg.wait_for_timeout(400)
        pg.click('#btn-desbloquear'); pg.wait_for_timeout(3200)
        if pg.evaluate("document.body.dataset.estado") != 'abierta': fallos.append('no se abrió')
        pg.screenshot(path=f'{out}/{nombre}-2.png')
        top = pg.evaluate("document.getElementById('s-dia').getBoundingClientRect().top+scrollY")
        largo = pg.evaluate("document.getElementById('s-dia').offsetHeight-innerHeight")
        vistos = set()
        # deslizar con la rueda, como una persona
        pg.mouse.move(vp['width'] / 2, vp['height'] / 2)
        while pg.evaluate("scrollY") < top + largo:
            pg.mouse.wheel(0, 160); pg.wait_for_timeout(40)
            vistos |= set(pg.evaluate("[...document.querySelectorAll('#textos p.on')].map(p=>p.dataset.f)"))
        for t in (.05, .3, .5, .63, .82, .97):
            pg.evaluate(f"scrollTo(0,{top + t * largo})"); pg.wait_for_timeout(900)
            pg.screenshot(path=f'{out}/{nombre}-3-{int(t*100):02d}.png')
        marcas = pg.evaluate("document.querySelectorAll('.marcas i.on').length")
        if len(vistos) != 20: fallos.append(f'fragmentos vistos={len(vistos)} (esperado 20)')
        if marcas != 20: fallos.append(f'marcas={marcas}')
        # volver atrás oculta lo que aún no llega
        pg.evaluate(f"scrollTo(0,{top + .1 * largo})"); pg.wait_for_timeout(300)
        n = pg.evaluate("document.querySelectorAll('#textos p.on').length")
        if n != 2: fallos.append(f'al volver a t=.1 se ven {n} (esperado 2)')
        pg.evaluate("document.getElementById('s-carta').scrollIntoView()")
        for e in pg.query_selector_all('.estrofa'): e.scroll_into_view_if_needed(); pg.wait_for_timeout(400)
        pg.wait_for_timeout(1500); pg.screenshot(path=f'{out}/{nombre}-4.png')
        if pg.evaluate("document.querySelectorAll('.estrofa.visto').length") != 4: fallos.append('estrofas')
        print(nombre, 'nodos', pg.evaluate("document.querySelectorAll('svg *').length"), 'errores', errs, 'FALLOS', fallos or 'ninguno')
        b.close()

run('celular', {'width': 390, 'height': 844}, 'no-preference')
run('tablet-rm', {'width': 820, 'height': 1180}, 'reduce')
run('pc', {'width': 1440, 'height': 900}, 'no-preference')
