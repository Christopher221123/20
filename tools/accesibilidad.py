"""Teclado, movimiento reducido, regiones aria-live. Uso: python3 tools/accesibilidad.py"""
import os
from playwright.sync_api import sync_playwright
u = 'file://' + os.path.abspath('index.html') + '?abierto=1&fase=dia'
with sync_playwright() as p:
    b = p.chromium.launch()
    # 1) teclado
    pg = b.new_context(viewport={'width': 390, 'height': 844}).new_page(); pg.goto(u); pg.wait_for_timeout(300)
    pg.focus('#linea')
    for _ in range(8): pg.keyboard.press('ArrowRight')
    v = pg.get_attribute('#linea', 'aria-valuenow'); print('slider con flechas: valuenow =', v, '| valuetext =', pg.get_attribute('#linea', 'aria-valuetext'))
    pg.keyboard.press('Home'); pg.wait_for_timeout(200)
    nombres = []
    for _ in range(4):
        pg.keyboard.press('Tab'); nombres.append(pg.evaluate("document.activeElement.getAttribute('aria-label')"))
    print('Tab recorre:', nombres)
    pg.keyboard.press('Enter'); pg.wait_for_timeout(300)
    print('Enter activa; textos:', pg.evaluate("document.querySelectorAll('#texto p').length"))
    print('aria-live:', pg.get_attribute('#texto', 'aria-live'), pg.get_attribute('#estrofas', 'aria-live'))
    print('objetos sin nombre:', pg.evaluate("[...document.querySelectorAll('.obj')].filter(o=>!o.getAttribute('aria-label')).length"))
    print('decoración aria-hidden:', pg.evaluate("document.querySelectorAll('svg g[aria-hidden=true]').length"), 'grupos')
    # 2) movimiento reducido
    pg = b.new_context(viewport={'width': 390, 'height': 844}, reduced_motion='reduce').new_page(); pg.goto(u); pg.wait_for_timeout(300)
    an = pg.evaluate("""['.pa','.rebote','.nota','#texto p'].map(s=>{const e=document.querySelector(s);return e?[s,getComputedStyle(e).animationName]:[s,'(no existe)']})""")
    print('reduce -> animaciones:', an)
    pg.focus('#linea'); pg.keyboard.press('ArrowRight'); pg.wait_for_timeout(200); a = pg.get_attribute('#linea', 'aria-valuenow')
    pg.keyboard.press('ArrowRight'); pg.wait_for_timeout(200); c = pg.get_attribute('#linea', 'aria-valuenow')
    print('reduce -> el día salta entre paradas:', a, '->', c)
    # 3) portada cerrada
    pg = b.new_context(viewport={'width': 390, 'height': 844}).new_page(); pg.goto('file://' + os.path.abspath('index.html')); pg.wait_for_timeout(300)
    print('cerrada: aria-disabled =', pg.get_attribute('#btn-desbloquear', 'aria-disabled'), '| "aún no" visible =', pg.is_visible('#aun'))
    pg.click('#btn-desbloquear', force=True); pg.wait_for_timeout(300)
    print('cerrada: al tocar, luz =', pg.evaluate("document.getElementById('app').dataset.luz"))
    b.close()
