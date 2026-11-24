"""Mide cuadros por segundo de la apertura y del día con la CPU 4x más lenta (aprox. tablet media). Uso: python3 tools/fluidez.py [ref]"""
import os, sys
from playwright.sync_api import sync_playwright
u = 'file://' + os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else 'index.html')
JS = "window._f=[];(function l(t){_f.push(t);requestAnimationFrame(l)})(performance.now())"
RES = "(()=>{const d=_f.slice(1).map((t,i)=>t-_f[i]);return [Math.round(1000*d.length/d.reduce((a,b)=>a+b,0)),d.filter(x=>x>34).length,d.length]})()"
with sync_playwright() as p:
    b = p.chromium.launch(); c = b.new_context(viewport={'width': 820, 'height': 1180}); pg = c.new_page()
    cdp = c.new_cdp_session(pg); cdp.send('Emulation.setCPUThrottlingRate', {'rate': 4})
    pg.goto(u + '?abierto=1'); pg.wait_for_timeout(1500)
    pg.evaluate(JS); pg.click('#btn-desbloquear'); pg.wait_for_timeout(6000)
    fps, largos, n = pg.evaluate(RES); print(f'apertura: {fps} cps, {largos} cuadros lentos de {n}')
    top = pg.evaluate("document.getElementById('s-dia').getBoundingClientRect().top+scrollY")
    pg.evaluate(f"scrollTo(0,{top})"); pg.wait_for_timeout(500); pg.evaluate(JS)
    pg.mouse.move(400, 600)
    for _ in range(60): pg.mouse.wheel(0, 120); pg.wait_for_timeout(50)
    fps, largos, n = pg.evaluate(RES); print(f'día (deslizando): {fps} cps, {largos} cuadros lentos de {n}')
    b.close()
