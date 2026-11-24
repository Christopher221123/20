"""Arma index.html desde src/index.html. Uso: python3 tools/build.py (desde la raíz)."""
import base64, random, urllib.parse
s = open('src/index.html', encoding='utf-8').read()
b64 = lambda p: base64.b64encode(open(p, 'rb').read()).decode()
random.seed(20)
pts = ''.join(f"<circle cx='{random.uniform(0,180):.1f}' cy='{random.uniform(0,180):.1f}' r='{random.uniform(.35,.9):.2f}'/>" for _ in range(140))
grano = f"<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><g fill='%234a1650' opacity='.07'>{pts}</g></svg>".replace('#','%23')
rep = {
  '@@CAVEAT@@': b64('src/fuentes/caveat-600.woff2'),
  '@@NR@@': b64('src/fuentes/newsreader-400.woff2'),
  '@@NRI@@': b64('src/fuentes/newsreader-400-italic.woff2'),
  '@@ROUGH@@': open('src/rough.min.js', encoding='utf-8').read().strip(),
  '@@GRANO@@': grano.replace('<','%3C').replace('>','%3E'),
}
import re, json
txt = open('docs/texto-final.md', encoding='utf-8').read()
frag = []
for sec, m in [('Solecito', 's'), ('Cielito', 'c'), ('Negrita', 'n')]:
    blk = txt.split(f'## {sec} · fragmentos')[1].split('\n## ')[0]
    for ln in blk.splitlines():
        mm = re.match(r'^(\d+)\. (.*?\)): (.*)$', ln)
        if mm: frag.append({'m': m, 't': mm.group(3)})
assert len(frag) == 20, len(frag)
rep['/*@@DIA_CSS@@*/'] = open('src/dia.css', encoding='utf-8').read()
rep['/*@@DIA_JS@@*/'] = open('src/dia.js', encoding='utf-8').read().replace('@@FRAG@@', json.dumps(frag, ensure_ascii=False))
blk = txt.split('## Escrito final')[1].split('\nMapa de referencias')[0]
estrofas = []; cur = None
for ln in blk.splitlines()[1:]:
    if re.match(r'^\d+\. ', ln): cur = []; estrofas.append(cur); continue
    if cur is not None and ln.strip(): cur.append(ln.strip())
assert len(estrofas) == 4 and sum(map(len, estrofas)) == 16, estrofas
rep['/*@@CARTA_CSS@@*/'] = open('src/carta.css', encoding='utf-8').read()
rep['/*@@CARTA_JS@@*/'] = open('src/carta.js', encoding='utf-8').read().replace('@@CARTA@@', json.dumps(estrofas, ensure_ascii=False))
for k, v in rep.items():
    assert k in s, k
    s = s.replace(k, v)
open('index.html', 'w', encoding='utf-8').write(s)
print(f'index.html: {len(s.encode())/1024:.1f} KB')
