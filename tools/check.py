"""Comprobaciones estáticas. Uso: python3 tools/check.py  (desde la raíz del repo)"""
import re, subprocess, sys, os
ok = True
def res(n, c, d=''):
    global ok; ok &= bool(c); print(('OK   ' if c else 'FALLA'), n, d)
html = open('index.html', encoding='utf-8').read()
src = open('src/index.html', encoding='utf-8').read()
res('peso < 200 KB', len(html.encode()) < 200_000, f'{len(html.encode())/1024:.1f} KB')
res('sin "Kuromi"', 'kuromi' not in html.lower())
res('sin "vos"/voseo', not re.search(r'\bvos\b|\bsos\b|\btenés\b|\bquerés\b', html, re.I))
res('sin enlaces externos ni fuentes remotas', not re.search(r'https?://(?!www\.w3\.org)', html))
res('sin <img>, <audio>, <video>, filter/blur', not re.search(r'<img|<audio|<video|<filter|blur\(|feGaussian|filter:', html))
res('sin librerías (<script src>)', '<script src' not in html)
# textos literales (lo que ya está construido)
fuente = open('docs/texto-final.md', encoding='utf-8').read()
portada = ['Esto se canta bajito, y es tuyo.', 'Hoy el cielo se pone más bonito por ti.']
res('portada: dos líneas literales en la página y en texto-final.md', all(t in html and t in fuente for t in portada))
import json as _j, re as _r
_txt = fuente
_carta = _r.search(r'const CARTA=(\[.*?\]\]);', html)
_frag = _r.search(r'const FRAG=(\[.*?\]);', html)
res('20 fragmentos literales de texto-final.md', _frag and len(_j.loads(_frag.group(1)))==20 and all(f['t'] in _txt for f in _j.loads(_frag.group(1))))
res('4 estrofas (16 líneas) literales de texto-final.md', _carta and sum(map(len,_j.loads(_carta.group(1))))==16 and all(l in _txt for e in _j.loads(_carta.group(1)) for l in e))
res('sin "fin" visible', '>fin<' not in html.lower())
# privacidad
tracked = subprocess.run(['git', 'ls-files'], capture_output=True, text=True).stdout
res('notas-privadas/ no está en el repo', 'notas-privadas' not in tracked)
priv = re.findall(r'\b\d{10}\b|[\w.]+@[\w.]+\.\w+|\+593\d+|\b\d{3}[- ]\d{3}[- ]\d{4}\b', html)
res('sin teléfonos/correos/cédulas en index.html', not priv, str(priv))
for nombre in ['Salomé', 'Endara', 'Christopher', 'Muzo', 'Concha', 'Mía']:
    res(f'index.html no nombra "{nombre}"', nombre not in html)
sys.exit(0 if ok else 1)
