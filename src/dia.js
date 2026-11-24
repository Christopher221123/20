/* ===================== Parte 3 · El día ===================== */
/* El día avanza al deslizar. La escena queda fija; en cada cuadro solo se
   escriben transform y opacity de unas pocas capas. Las estaciones (una por
   fragmento) se dibujan una vez, poco antes de necesitarse. */
const FRAG=@@FRAG@@;
const dia=document.getElementById('dia'),escena=dia.querySelector('.escena');
const K={muro:'#f1dcc0',muro2:'#ecd5bb',fondo:'#f6e4c8',techo:'#c0627f',techo2:'#9c4f8a',madera:'#a8774f',madera2:'#c08c5e',oscuro:'#4f3446',vidrio:'#dfe0ec',
  luz:'#f7dc96',luzC:'#fff1c4',toldo:'#e07ba0',verde:'#9aa765',verde2:'#7f8f4f',tallo:'#6f8a45',petalo:'#e6c77e',centro:'#6b3f2a',olla:'#8a6a5a',canasta:'#c79a5c',
  pan:'#d49a5c',mesa:'#b98a62',plato:'#fffaf0',taza:'#e07ba0',cobija:'#8a3a8f',libreta:'#a8446c',iglesia:'#efe2cf',piel:'#9a5e3c',pelo:'#2a1a17',vestido:'#8a3a8f',
  concha:'#7a4a2c',concha2:'#9c6640',mia:'#b8875a',mia2:'#d2a57a'};
const SW=700,NF=FRAG.length;
dia.style.setProperty('--n',NF);
const div=(c,p)=>{const d=document.createElement('div');d.className=c;if(p)p.append(d);return d};
/* dibujo: trazo de crayón; g=true añade la pasada con grano (solo en formas grandes) */
const D=(sv,forma,args,o={},g=false)=>crayon(sv,forma,args,{strokeWidth:1.7,roughness:1,...o},g);
const F_=(c,o={})=>({fill:c,fillStyle:'solid',...o});
const SIN={stroke:'none'};
function pieza(cont,x,y,w,h,cls,dibuja){
  const d=div('pz '+(cls||''),cont);d.style.cssText=`left:${x/7}%;top:${y/10}%;width:${w/7}%;height:${h/10}%`;
  if(dibuja){const sv=lienzo(`0 0 ${w} ${h}`);dibuja(sv,w,h);d.append(sv)}
  return d;
}
const brilla=(cont,x,y,w,h,cls,color=K.luz)=>{const d=pieza(cont,x,y,w,h,cls);d.style.background=`radial-gradient(closest-side,${color},${color}99 35%,transparent)`;d.style.borderRadius='50%';return d};
function casa(sv,x,y,w,h,{techo=K.techo,muro=K.muro,alto=90,seed=1}={}){
  D(sv,'rectangle',[x,y,w,h],F_(muro,{seed}),true);
  D(sv,'polygon',[[[x-18,y+4],[x+w/2,y-alto],[x+w+18,y+4]]],F_(techo,{seed:seed+1}),true);
}
function ventana(sv,x,y,w,h,vidrio=K.vidrio,seed=3){
  D(sv,'rectangle',[x,y,w,h],F_(vidrio,{seed}));D(sv,'line',[x+w/2,y,x+w/2,y+h],{seed:seed+1,strokeWidth:1.3});D(sv,'line',[x,y+h/2,x+w,y+h/2],{seed:seed+2,strokeWidth:1.3});
}
const vidrioLuz=(sv,w,h)=>{D(sv,'rectangle',[2,2,w-4,h-4],F_(K.luz,{seed:7}));D(sv,'line',[w/2,2,w/2,h-2],{seed:8,strokeWidth:1.3});D(sv,'line',[2,h/2,w-2,h/2],{seed:9,strokeWidth:1.3})};
function pared(sv,x=60,w=580){D(sv,'polygon',[[[x-22,474],[x+w/2,392],[x+w+22,474]]],F_(K.techo,{seed:1}),true);D(sv,'rectangle',[x,470,w,350],F_(K.muro2,{seed:2}),true);D(sv,'rectangle',[x+20,490,w-40,330],F_(K.fondo,{seed:4,stroke:K.madera,strokeWidth:1}))}
function perroCara(sv,cx,cy,c1,c2,s=1){
  D(sv,'ellipse',[cx-22*s,cy+12*s,22*s,40*s],F_(c2,{seed:31}));D(sv,'ellipse',[cx+22*s,cy+12*s,22*s,40*s],F_(c2,{seed:32}));
  D(sv,'circle',[cx,cy,52*s],F_(c1,{seed:33}));
  D(sv,'ellipse',[cx,cy+10*s,22*s,14*s],F_(c2,{seed:34,strokeWidth:1}));
  D(sv,'circle',[cx,cy+6*s,6*s],F_(TINTA,{seed:35,strokeWidth:.6}));
}

/* ---------- estaciones: k → dibujo base (sv), piezas (E) y luces (L) ---------- */
const EST=[
 /* S1 ventana con luz · puerta entreabierta con luz */
 (sv,E,L)=>{casa(sv,170,520,300,300,{seed:11});ventana(sv,352,580,86,78);
   D(sv,'rectangle',[205,672,74,148],F_(K.oscuro,{seed:14}));
   D(sv,'polygon',[[[205,672],[258,684],[258,808],[205,820]]],F_(K.madera,{seed:15}));
   pieza(L,252,668,140,160,'',(s)=>{D(s,'polygon',[[[8,6],[26,4],[26,150],[8,150]]],F_(K.luz,{...SIN,roughness:.4}));D(s,'ellipse',[26,150,44,8],F_(K.luzC,{...SIN,roughness:.4}))});
   pieza(L,352,580,86,78,'rayo-ventana',vidrioLuz);brilla(L,300,520,190,200,'rayo-ventana',K.luzC);
   D(sv,'line',[480,820,480,700],{stroke:K.tallo,seed:17});D(sv,'circle',[480,694,22],F_(K.toldo,{seed:18}));},
 /* S2 flor que se gira (girasol) */
 (sv,E)=>{D(sv,'path',['M380 820 Q372 700 380 575'],{stroke:K.tallo,strokeWidth:4,seed:21});
   D(sv,'ellipse',[350,700,60,24],F_(K.verde,{seed:22}));D(sv,'ellipse',[410,660,60,24],F_(K.verde,{seed:23}));
   [[200,790],[236,800],[262,786],[520,796],[560,788]].forEach(([x,y],i)=>{D(sv,'line',[x,820,x,y],{stroke:K.tallo,seed:24+i,strokeWidth:1.2});D(sv,'circle',[x,y,16],F_(i%2?K.toldo:K.rosadoC||'#f6c9d8',{seed:30+i,strokeWidth:1}))});
   pieza(E,316,452,128,128,'girasol',(s)=>{for(let i=0;i<14;i++){const a=i/14*Math.PI*2;D(s,'ellipse',[64+Math.cos(a)*36,64+Math.sin(a)*36,30,14],F_(K.petalo,{seed:50+i,strokeWidth:1,roughness:.7}))}
     D(s,'circle',[64,64,50],F_(K.centro,{seed:70,fillStyle:'cross-hatch',hachureGap:5,fillWeight:1.2}))});},
 /* S3 camino, la perrita se adelanta · puesto con toldo */
 (sv)=>{D(sv,'line',[232,820,232,560],{strokeWidth:2.4,seed:81});D(sv,'line',[498,820,498,560],{strokeWidth:2.4,seed:82});
   D(sv,'path',['M200 560 L215 495 L515 495 L530 560 Q512 580 494 560 Q476 580 458 560 Q440 580 422 560 Q404 580 386 560 Q368 580 350 560 Q332 580 314 560 Q296 580 278 560 Q260 580 242 560 Q224 580 200 560Z'],F_(K.toldo,{seed:83}),true);
   for(let i=0;i<5;i++)D(sv,'line',[250+i*60,497,244+i*62,560],{stroke:'#fbf3e4',strokeWidth:6,seed:84+i});
   D(sv,'rectangle',[240,700,250,22],F_(K.madera,{seed:90}),true);D(sv,'line',[256,722,256,820],{seed:91});D(sv,'line',[474,722,474,820],{seed:92});
   D(sv,'path',['M282 700 L276 650 Q312 638 348 650 L342 700Z'],F_(K.olla,{seed:93}));D(sv,'ellipse',[312,648,80,14],F_('#a3867a',{seed:94}));
   D(sv,'path',['M392 700 L384 664 L462 664 L454 700Z'],F_(K.canasta,{seed:95,fillStyle:'cross-hatch',hachureGap:6}));
   [[402,656],[422,652],[442,656]].forEach(([x,y],i)=>D(sv,'circle',[x,y,24],F_(K.pan,{seed:96+i,strokeWidth:1.2})));},
 /* S4 cajón cerrado que se abre */
 (sv,E)=>{pared(sv,140,440);ventana(sv,420,540,90,80,K.vidrio,101);
   D(sv,'rectangle',[285,636,190,184],F_(K.madera,{seed:102}),true);D(sv,'rectangle',[275,626,210,14],F_(K.madera2,{seed:103}));
   D(sv,'rectangle',[300,656,160,62],F_(K.oscuro,{seed:104}));
   D(sv,'rectangle',[300,734,160,62],F_(K.madera2,{seed:105}));D(sv,'circle',[380,765,10],F_(K.petalo,{seed:106,strokeWidth:1}));
   pieza(E,306,600,150,70,'dentro',(s)=>{D(s,'ellipse',[40,48,56,30],F_(K.pan,{seed:107}));D(s,'line',[90,64,98,14],{stroke:K.tallo,seed:108});D(s,'circle',[98,14,20],F_(K.petalo,{seed:109}));D(s,'rectangle',[112,30,30,36],F_(K.libreta,{seed:110}))});
   pieza(E,298,652,164,68,'cajon',(s)=>{D(s,'rectangle',[2,2,160,64],F_(K.madera2,{seed:111}));D(s,'circle',[82,34,12],F_(K.petalo,{seed:112,strokeWidth:1}))});},
 /* S5 manos que reparten */
 (sv,E)=>{[[320,0],[430,1]].forEach(([x,i])=>{const P={h:.55,p:i?4:1,pelo:i?'coletas':'corto',pc:i?'negro':'castano',r:i?1:2,c:i?'vestido':'camisa',e:'',nino:1};
     const p=pieza(E,x-80,520,160,300,'');[figura(P,'cuerpo',90+i),figura(P,'arriba',90+i)].forEach(s=>p.append(s))});
   D(sv,'path',['M120 820 Q140 760 170 820'],F_(K.verde,{seed:120}));D(sv,'path',['M600 820 Q620 770 650 820'],F_(K.verde,{seed:121}));
   [[268,'pan',0],[362,'flor',380],[470,'naranja',760]].forEach(([x,t,dl],i)=>{const p=pieza(E,x,560,54,54,'reparte',(s)=>{
       if(t==='pan')D(s,'ellipse',[27,30,50,30],F_(K.pan,{seed:130}));
       if(t==='flor'){D(s,'line',[27,54,27,22],{stroke:K.tallo,seed:131});D(s,'circle',[27,18,26],F_(K.toldo,{seed:132}))}
       if(t==='naranja')D(s,'circle',[27,30,38],F_(K.petalo,{seed:133}))});
     p.style.cssText+=`;--sx:${-520-i*160}%;--sy:160%;--dl:${dl}ms`;});},
 /* S6 mediodía, sin sombra */
 (sv,E)=>{pieza(E,330,806,300,34,'sombra-arbol',(s)=>{D(s,'ellipse',[150,17,290,26],F_('rgba(74,22,80,.22)',{...SIN,roughness:.3}))});
   D(sv,'path',['M450 820 Q444 720 452 610'],{stroke:K.madera,strokeWidth:9,seed:141});
   [[450,560,150],[392,600,110],[510,604,120],[450,500,110]].forEach(([x,y,r],i)=>D(sv,'circle',[x,y,r],F_(i%2?K.verde2:K.verde,{seed:142+i,fillStyle:i===0?'solid':'solid'}),i===0));
   [[180,812],[230,816],[620,814]].forEach(([x,y],i)=>D(sv,'path',[`M${x-12} ${y+6} L${x} ${y-16} L${x+12} ${y+6}`],{stroke:K.tallo,seed:150+i,strokeWidth:1.3}));},
 /* C1 el cielo se pone rojo y se enciende la luz de la cocina */
 (sv,E,L)=>{casa(sv,110,570,230,250,{seed:161,techo:K.techo2});ventana(sv,180,630,74,62,K.vidrio,163);
   casa(sv,390,520,240,300,{seed:165});ventana(sv,462,600,80,70,K.vidrio,167);D(sv,'rectangle',[560,430,26,60],F_(K.madera,{seed:169}));
   pieza(L,180,630,74,62,'luz-cocina',vidrioLuz);pieza(L,462,600,80,70,'luz-cocina',vidrioLuz).style.setProperty('--dl','500ms');
   brilla(L,130,580,170,160,'luz-cocina');brilla(L,420,550,170,170,'luz-cocina').style.setProperty('--dl','500ms');},
 /* C2 mesa con un plato de más · la otra perrita asoma */
 (sv,E,L)=>{pared(sv,60,640);D(sv,'line',[380,490,380,560],{seed:171,strokeWidth:1.2});D(sv,'path',['M350 590 L360 560 L400 560 L410 590Z'],F_(K.petalo,{seed:172}));
   brilla(L,300,520,160,160,'luz-cocina');
   pieza(E,180,690,420,140,'',(s)=>{D(s,'rectangle',[10,10,360,20],F_(K.mesa,{seed:173}),true);D(s,'line',[30,30,30,130],{seed:174,strokeWidth:2});D(s,'line',[350,30,350,130],{seed:175,strokeWidth:2});
     [80,170].forEach((x,i)=>D(s,'ellipse',[x,8,64,14],F_(K.plato,{seed:176+i,strokeWidth:1.2})))});
   pieza(E,416,684,80,24,'plato-mas',(s)=>D(s,'ellipse',[40,12,66,14],F_(K.plato,{seed:178,strokeWidth:1.2})));},
 /* C3 taza, cobija y pan */
 (sv,E,L)=>{pared(sv,0,620);brilla(L,250,500,200,180,'luz-cocina');
   D(sv,'line',[190,620,190,820],{stroke:K.madera,strokeWidth:5,seed:181});D(sv,'rectangle',[186,700,110,14],F_(K.madera,{seed:182}));D(sv,'line',[292,714,292,820],{stroke:K.madera,strokeWidth:4,seed:183});
   pieza(E,192,624,100,100,'cobija',(s)=>{D(s,'rectangle',[4,4,92,90],F_(K.cobija,{seed:184}));[22,44,66].forEach((x,i)=>D(s,'line',[x,6,x,92],{stroke:K.toldo,strokeWidth:2.4,seed:185+i}))});
   D(sv,'rectangle',[370,720,170,14],F_(K.mesa,{seed:188}),true);D(sv,'line',[386,734,386,820],{seed:189});D(sv,'line',[524,734,524,820],{seed:190});
   pieza(E,392,668,56,54,'',(s)=>{D(s,'path',['M6 8 L50 8 L44 50 L12 50Z'],F_(K.taza,{seed:191}));D(s,'ellipse',[52,26,16,20],{seed:192})});
   [0,700,1400].forEach((dl,i)=>{const p=pieza(E,396+i*10,590,40,80,'vapor',(s)=>D(s,'path',['M20 78 Q4 58 20 40 Q36 22 20 2'],{stroke:'#8a6f8c',strokeWidth:1.6,seed:193+i}));p.style.setProperty('--dl',dl+'ms')});
   pieza(E,462,676,70,48,'pan',(s)=>{D(s,'ellipse',[35,28,64,36],F_(K.pan,{seed:197}));[22,35,48].forEach((x,i)=>D(s,'line',[x-4,18,x+4,34],{seed:198+i,strokeWidth:1}))});},
 /* C4 libreta que se cierra sola */
 (sv,E)=>{pared(sv,40,600);D(sv,'rectangle',[210,700,300,14],F_(K.madera,{seed:201}),true);D(sv,'path',['M230 714 L230 744 L260 714'],{seed:202});D(sv,'path',['M490 714 L490 744 L460 714'],{seed:203});
   D(sv,'rectangle',[286,650,62,48],F_(K.plato,{seed:204}));[662,672,682].forEach((y,i)=>D(sv,'line',[294,y,340,y],{stroke:'#b9a6ba',strokeWidth:1,seed:205+i}));
   pieza(E,348,650,62,48,'tapa',(s)=>{D(s,'rectangle',[1,1,60,46],F_(K.plato,{seed:208}));[12,22,32].forEach((y,i)=>D(s,'line',[8,y,54,y],{stroke:'#b9a6ba',strokeWidth:1,seed:209+i}))});
   pieza(E,284,648,66,52,'cerrada',(s)=>{D(s,'rectangle',[2,2,62,48],F_(K.libreta,{seed:212}));D(s,'line',[10,2,10,50],{seed:213,stroke:K.petalo,strokeWidth:2})});
   D(sv,'line',[420,696,470,672],{stroke:K.petalo,strokeWidth:4,seed:214});
   D(sv,'path',['M150 700 L160 650 L200 650 L210 700Z'],F_(K.techo,{seed:215}));D(sv,'circle',[180,630,40],F_(K.verde,{seed:216}));},
 /* C5 marcas en la pared que se borran */
 (sv,E)=>{pared(sv,80,560);
   for(let i=0;i<6;i++){const x=150+(i%3)*150,y=i<3?560:660;const p=pieza(E,x,y,100,70,'marca',(s)=>{for(let j=0;j<4;j++)D(s,'line',[14+j*18,8,12+j*18,62],{stroke:'#6b3f6f',strokeWidth:2.2,seed:220+i*7+j});D(s,'line',[4,52,90,18],{stroke:'#6b3f6f',strokeWidth:2.2,seed:226+i*7})});
     p.style.setProperty('--dl',(i*320)+'ms')}},
 /* C6 el sol toca el cielo (el sol y el rojo son del cielo) */
 (sv)=>{D(sv,'rectangle',[160,760,380,60],F_(K.muro,{seed:231}),true);D(sv,'rectangle',[150,748,400,14],F_(K.madera2,{seed:232}));
   [[200,740],[500,740]].forEach(([x,y],i)=>{D(sv,'path',[`M${x-20} ${y} L${x-14} ${y-36} L${x+14} ${y-36} L${x+20} ${y}Z`],F_(K.techo,{seed:233+i}));D(sv,'circle',[x,y-50,22],F_(i?K.toldo:K.petalo,{seed:235+i}))});},
 /* C7 el sol se esconde · iglesia pequeña con luz */
 (sv,E,L)=>{D(sv,'rectangle',[420,580,170,240],F_(K.iglesia,{seed:241}),true);D(sv,'polygon',[[[404,584],[505,520],[606,584]]],F_(K.techo2,{seed:242}));
   D(sv,'rectangle',[470,470,70,70],F_(K.iglesia,{seed:243}));D(sv,'polygon',[[[462,474],[505,430],[548,474]]],F_(K.techo2,{seed:244}));
   D(sv,'line',[505,430,505,398],{seed:245,strokeWidth:2});D(sv,'line',[492,412,518,412],{seed:246,strokeWidth:2});
   D(sv,'path',['M482 820 L482 744 Q505 716 528 744 L528 820Z'],F_(K.madera,{seed:247}));D(sv,'circle',[505,640,34],F_(K.vidrio,{seed:248}));
   pieza(L,488,623,34,34,'',(s)=>D(s,'circle',[17,17,30],F_(K.luz,{seed:249})));brilla(L,455,590,100,100,'');
   D(sv,'path',['M80 820 Q200 760 330 820'],F_(K.verde2,{seed:250}));},
 /* N1 cada casa con su ventana encendida */
 (sv,E,L)=>{[[50,600,170,220],[250,560,180,260],[460,590,180,230]].forEach(([x,y,w,h],i)=>{casa(sv,x,y,w,h,{seed:260+i*5,techo:i%2?K.techo2:K.techo,alto:70});
     const vx=x+w/2-30,vy=y+50;ventana(sv,vx,vy,60,56,K.vidrio,263+i*5);pieza(L,vx,vy,60,56,'ventana-luz',vidrioLuz).style.setProperty('--dl',(i*420)+'ms');
     brilla(L,vx-50,vy-50,160,156,'ventana-luz').style.setProperty('--dl',(i*420)+'ms')})},
 /* N2 dos ventanas frente a frente: una se enciende, la otra guiña */
 (sv,E,L)=>{casa(sv,110,560,210,260,{seed:281});casa(sv,390,540,210,280,{seed:284,techo:K.techo2});
   ventana(sv,240,620,60,56,K.vidrio,287);ventana(sv,410,610,60,56,K.vidrio,289);
   pieza(L,240,620,60,56,'ventana-luz',vidrioLuz);brilla(L,200,580,140,136,'ventana-luz');
   const w=pieza(L,410,610,60,56,'ventana-luz');w.style.setProperty('--dl','700ms');const sv2=lienzo('0 0 60 56');vidrioLuz(sv2,60,56);sv2.classList.add('guino');w.append(sv2);
   brilla(L,370,570,140,136,'ventana-luz guino').style.setProperty('--dl','700ms');},
 /* N3 dos luces que se acercan sin tocarse */
 (sv,E,L)=>{D(sv,'rectangle',[80,770,540,50],F_(K.muro,{seed:301}),true);
   const a=brilla(L,110,520,110,110,'orbe');a.style.setProperty('--hacia','118%');const b=brilla(L,480,520,110,110,'orbe');b.style.setProperty('--hacia','-118%');},
 /* N4 las luces del barrio (unas de colores) */
 (sv,E,L)=>{D(sv,'path',['M220 820 Q300 640 420 650 Q560 570 720 700 L720 820Z'],F_('#c9b3c4',{seed:311}),true);
   D(sv,'rectangle',[520,590,40,50],F_(K.iglesia,{seed:312}));D(sv,'polygon',[[[514,592],[540,560],[566,592]]],F_(K.techo2,{seed:313}));
   const pts=[];let sem=7;const M=2**31-1,azar=()=>(sem=(sem*16807)%M)/M;for(let i=0;i<42;i++){const x=250+azar()*330,techo=x<420?820-(x-220)*.8:660+(x-420)*.12;pts.push([x,techo+20+azar()*(800-techo-30)])}
   const col=['#e07ba0','#9fcfc2','#f2b84b','#b8a0d2','#e8506f'];
   [0,1,2].forEach(g=>pieza(L,0,560,700,260,'tw',(s)=>pts.forEach(([x,y],i)=>{if(i%3!==g)return;D(s,'circle',[x,y-560,i%7===0?13:9],F_(i%7===0?col[(i/7)%col.length|0]:K.luz,{...SIN,roughness:.3,seed:320+i}))})).style.setProperty('--dl',(g*900)+'ms'));
   pieza(L,532,610,16,16,'',(s)=>D(s,'circle',[8,8,14],F_(K.luz,{...SIN,seed:370})));
   E.classList.add('barrio');L.classList.add('barrio');},
 /* N5 casita oscura sin ventana: se enciende una luz */
 (sv,E,L)=>{D(sv,'rectangle',[380,690,130,130],F_('#a08a94',{seed:381}),true);D(sv,'polygon',[[[366,694],[445,640],[524,694]]],F_('#7d6474',{seed:382}));
   D(sv,'rectangle',[428,750,34,70],F_(K.oscuro,{seed:383}));
   brilla(L,398,688,94,94,'foco');pieza(L,436,722,18,22,'foco',(s)=>D(s,'circle',[9,11,16],F_(K.luzC,{seed:384})));
   D(sv,'path',['M60 820 Q160 790 260 820'],F_(K.verde2,{seed:385}));},
 /* N6 la luz de esa casita crece y alumbra el camino */
 (sv,E,L)=>{brilla(L,-425,560,340,340,'crece',K.luzC);
   const p=pieza(L,-262,828,560,56,'camino-luz');p.style.background=`linear-gradient(90deg,${K.luz},${K.luz}88 60%,transparent)`;p.style.borderRadius='50%';
   D(sv,'path',['M380 820 Q500 780 640 820'],F_(K.verde2,{seed:391}));},
 /* N7 lámpara junto a la cama */
 (sv,E,L)=>{casa(sv,180,500,360,320,{seed:401});D(sv,'rectangle',[240,580,240,160],F_('#3a2340',{seed:403}));
   D(sv,'rectangle',[262,664,150,44],F_(K.cobija,{seed:404}));D(sv,'rectangle',[262,650,40,20],F_(K.plato,{seed:405}));D(sv,'line',[262,708,262,736],{seed:406});D(sv,'line',[412,708,412,736],{seed:407});
   D(sv,'rectangle',[424,690,40,46],F_(K.madera,{seed:408}));D(sv,'line',[444,690,444,660],{seed:409});
   D(sv,'path',['M428 662 L436 636 L452 636 L460 662Z'],F_(K.petalo,{seed:410}));
   D(sv,'path',['M216 820 L216 760 L250 760 L250 820Z'],F_(K.madera,{seed:411}));
   pieza(L,240,580,240,160,'lampara',(s)=>{const g=rough.svg(s).rectangle(2,2,236,156,F_(K.luz,{...SIN,roughness:.3,seed:412}));g.setAttribute('opacity','.42');s.append(g)});
   brilla(L,384,586,120,120,'lampara',K.luzC);
   pieza(L,426,634,36,30,'lampara',(s)=>D(s,'path',['M2 28 L10 2 L26 2 L34 28Z'],F_(K.luzC,{seed:413})));},
];

/* ---------- capas del cielo y del paisaje (se dibujan una vez) ---------- */
const capas={};
['amanecer','mediodia','atardecer','noche'].forEach(n=>{capas[n]=escena.querySelector('.c-'+n)});
const sol=escena.querySelector('.sol'),rojo=escena.querySelector('.rojo'),brillo=escena.querySelector('.brillo'),luna=escena.querySelector('.luna'),estrellas=escena.querySelector('.estrellas');
const veloT=escena.querySelector('.velo-tarde'),veloN=escena.querySelector('.velo-noche');
const mundo=escena.querySelector('.mundo'),luces=escena.querySelector('.luces');
const ella=escena.querySelector('.ella'),perrita=escena.querySelector('.perrita.concha'),otra=escena.querySelector('.perrita.mia'),sombra=escena.querySelector('.sombra');
const frags=escena.querySelector('.frags'),momentos=[...escena.querySelectorAll('.momentos li')];
const bandas=[];
let diaArmado=false;
function banda(par,ancho,dibuja,seed){
  const b=div('banda',escena.querySelector('.paisaje'));
  for(let i=0;i<2;i++){const sv=lienzo(`0 0 ${ancho} 1000`);sv.setAttribute('preserveAspectRatio','xMinYMax meet');dibuja(sv);b.append(sv)}
  bandas.push({b,par,ancho});
}
function armaDia(){
  if(diaArmado)return;diaArmado=true;
  // sol, luna y estrellas
  const ss=lienzo('-60 -60 120 120');D(ss,'circle',[0,0,92],F_('#f6c45a',{stroke:'#d99a3a',seed:501}));for(let i=0;i<12;i++){const a=i/12*Math.PI*2;D(ss,'line',[Math.cos(a)*56,Math.sin(a)*56,Math.cos(a)*72,Math.sin(a)*72],{stroke:'#d99a3a',seed:502+i,strokeWidth:2})}sol.append(ss);
  const ls=lienzo('-50 -50 100 100');D(ls,'path',['M10 -44 A44 44 0 1 0 10 44 A34 34 0 1 1 10 -44Z'],F_('#fbf3e4',{stroke:'#e6c77e',seed:520}));luna.append(ls);
  const es=lienzo('0 0 1000 600');es.setAttribute('preserveAspectRatio','xMidYMid slice');for(let i=0;i<46;i++){const x=(i*211)%1000,y=(i*97)%560;D(es,'path',[`M${x} ${y-7} L${x+2} ${y-2} L${x+7} ${y} L${x+2} ${y+2} L${x} ${y+7} L${x-2} ${y+2} L${x-7} ${y} L${x-2} ${y-2}Z`],F_('#fbf3e4',{...SIN,roughness:.3,seed:530+i}))}estrellas.append(es);
  // montañas lejanas, colinas y camino
  banda(.16,2000,sv=>{D(sv,'path',['M0 700 Q160 560 330 620 Q480 520 660 600 Q820 540 1000 610 Q1180 520 1340 600 Q1500 560 1660 620 Q1830 540 2000 700 L2000 1000 L0 1000Z'],F_('#e2c4cf',{stroke:'#b48aa6',strokeWidth:1.4,seed:540}));
    D(sv,'path',['M0 740 Q200 650 420 700 Q620 640 820 700 Q1040 640 1240 700 Q1460 650 1660 700 Q1840 660 2000 740 L2000 1000 L0 1000Z'],F_('#d3aec2',{stroke:'#a8809c',strokeWidth:1.4,seed:541}))});
  banda(.5,2000,sv=>{D(sv,'path',['M0 780 Q250 700 520 750 Q800 690 1060 750 Q1320 700 1580 752 Q1800 710 2000 780 L2000 1000 L0 1000Z'],F_('#c7cf9f',{stroke:'#8f9a62',strokeWidth:1.4,seed:542}));
    for(let i=0;i<9;i++){const x=110+i*220,y=760-(i%3)*18;D(sv,'circle',[x,y-20,40],F_(i%2?K.verde2:K.verde,{seed:543+i,strokeWidth:1.2}))}});
  banda(1,1400,sv=>{D(sv,'rectangle',[-10,808,1420,90],F_('#ecdab8',{stroke:'#b9a070',strokeWidth:1.4,seed:560}));
    D(sv,'rectangle',[-10,898,1420,110],F_('#c2c78f',{stroke:'#8f9a62',strokeWidth:1.4,seed:561}));
    for(let i=0;i<7;i++)D(sv,'line',[60+i*200,852,140+i*200,852],{stroke:'#c9ad7c',strokeWidth:2.4,seed:562+i})});
  // ella y la perrita: dibujos cuadro a cuadro (se alternan por opacidad)
  [0,1,2].forEach(fr=>ella.append(ellaSVG(fr)));
  [0,1].forEach(fr=>{perrita.append(perritaSVG(fr,K.concha,K.concha2,620));otra.append(perritaSVG(fr,K.mia,K.mia2,640))});
  [ella,perrita,otra].forEach(p=>[...p.children].forEach(sv=>{const g=document.createElementNS(NS,'g');g.setAttribute('class','sil');[...sv.childNodes].forEach(n=>g.append(n.cloneNode(true)));sv.append(g)}));
  cuadros={ella:[...ella.children],concha:[...perrita.children],mia:[...otra.children]};
  Object.entries({ella:1,concha:0,mia:0}).forEach(([q,n])=>{cuadros[q].forEach((sv,i)=>sv.style.opacity=i===n?1:0);ultimo['p'+q]=n});
  // fragmentos: texto real, escrito dentro del cielo
  FRAG.forEach((F,i)=>{const p=document.createElement('p');p.className='frag m-'+F.m+(F.t.length>150?' largo':'');p.textContent=F.t;p.id='fr'+i;frags.append(p)});
  medir();construyeCerca(0);
}
/* ella, de frente: cabello claro a los hombros, blusa morada, jean y zapatillas.
   fr: 0 pie izquierdo adelante, 1 de pie, 2 pie derecho adelante */
function ellaSVG(fr){
  const sv=lienzo('0 0 160 300'),PIEL='#d9a57c',PELO='#3d2820',MECHON='#eadbc6',JEAN='#5f76a8',JEAN2='#4b5f8c';
  const pie=[[[60,282],[96,296]],[[62,296],[98,296]],[[64,296],[100,282]]][fr];
  const brazo=[[[42,176],[120,170]],[[44,174],[116,174]],[[40,170],[118,176]]][fr];
  // cabello por detrás, hasta los hombros
  D(sv,'path',['M38 74 Q34 26 80 22 Q126 26 122 74 L126 118 Q112 126 102 112 L58 112 Q48 126 34 118Z'],F_(PELO,{seed:601}));
  D(sv,'path',['M36 98 L34 118 Q46 127 56 114 L58 100Z'],F_(MECHON,{seed:621,strokeWidth:1.2}));D(sv,'path',['M124 98 L126 118 Q114 127 104 114 L102 100Z'],F_(MECHON,{seed:622,strokeWidth:1.2}));
  [[42,100,40,116],[118,100,120,116]].forEach((a,i)=>D(sv,'line',a,{stroke:'#6b4a36',strokeWidth:1,seed:623+i}));
  // piernas (jean) y zapatillas
  [0,1].forEach(l=>{const [fx,fy]=pie[l],cx=l?92:68;
    D(sv,'path',[`M${cx-15} 182 L${cx+15} 182 L${fx+10} ${fy-6} L${fx-8} ${fy-6}Z`],F_(l?JEAN2:JEAN,{seed:602+l}));
    D(sv,'ellipse',[fx+1,fy-3,30,13],F_('#fbf3e4',{seed:604+l,strokeWidth:1.3}));D(sv,'line',[fx-13,fy+2,fx+15,fy+2],{stroke:C.rosado,strokeWidth:2.2,seed:606+l})});
  // brazos con mangas
  [0,1].forEach(l=>{const [hx,hy]=brazo[l],sx=l?108:52;
    D(sv,'line',[sx,118,hx,hy],{strokeWidth:9,stroke:K.vestido,seed:608+l,roughness:.6});D(sv,'circle',[hx,hy+4,13],F_(PIEL,{seed:610+l,strokeWidth:1}))});
  // blusa
  D(sv,'path',['M50 114 Q80 102 110 114 L114 186 L46 186Z'],F_(K.vestido,{seed:612}),true);
  D(sv,'line',[48,184,112,184],{stroke:JEAN2,strokeWidth:3,seed:613});
  D(sv,'rectangle',[72,96,16,14],F_(PIEL,{...SIN,seed:614}));
  // cabeza, flequillo, mejillas y aretes dorados
  D(sv,'circle',[80,64,60],F_(PIEL,{seed:615}));
  D(sv,'path',['M50 62 Q50 30 80 32 Q110 30 110 62 Q100 44 80 46 Q60 44 50 62Z'],F_(PELO,{seed:616}));
  [-1,1].forEach(l=>{const m=rough.svg(sv).circle(80+l*16,76,11,F_(C.rosado,{...SIN,roughness:.3,seed:617+l}));m.setAttribute('opacity','.55');sv.append(m);
    D(sv,'circle',[80+l*31,80,5],F_(C.dorado,{seed:619+l,strokeWidth:.8}))});
  return sv;
}
function perritaSVG(fr,c1,c2,semilla){
  const sv=lienzo('0 0 130 90'),y=88,pp=fr?[[34,40],[52,46],[80,74],[96,90]]:[[40,34],[46,52],[86,80],[90,96]];
  pp.forEach(([a,b],i)=>D(sv,'line',[a+i%2*2,64,b,y],{stroke:c1,strokeWidth:3,seed:semilla+i}));
  D(sv,'path',['M26 46 Q4 30 18 14 Q30 4 40 18 Q34 30 40 40Z'],F_(c2,{seed:semilla+5}));
  D(sv,'ellipse',[62,56,84,40],F_(c1,{seed:semilla+6}));
  for(let i=0;i<6;i++)D(sv,'line',[34+i*11,66,32+i*11,78],{stroke:c1,strokeWidth:2.2,seed:semilla+7+i});
  perroCara(sv,104,40,c2,c1,.62);
  return sv;
}
/* ---------- medidas (solo al cambiar el tamaño) ---------- */
let W=0,H=0,u=1,topDia=0,largo=1,chx=.22;
function medir(){
  W=escena.clientWidth;H=escena.clientHeight;u=Math.min(H/1000,W/540);escena.style.setProperty('--wh',(1000*u).toFixed(1)+'px');
  const r=dia.getBoundingClientRect();topDia=r.top+scrollY;largo=Math.max(1,dia.offsetHeight-H);
  chx=.30;
  pinta(true);
}
const camEn=k=>((k===18?17:k)*SW+350)*u-(.66)*W+(chx-.22)*W*.3; // N6 ocurre en la misma casita de N5: la cámara no se mueve

/* ---------- estaciones: se construyen cerca del recorrido ---------- */
const estaciones=[];
function construye(k){
  if(k<0||k>=NF||estaciones[k])return;
  const E=div('est',mundo),L=div('est',luces);E.style.display=L.style.display='none';
  const sv=lienzo('0 0 700 1000');E.append(sv);
  EST[k](sv,E,L);
  estaciones[k]={E,L,vis:false,on:false};
}
function construyeCerca(k){for(let j=k-1;j<=k+2;j++)construye(j)}

/* ---------- el cuadro ---------- */
const lerp=(a,b,x)=>a+(b-a)*x,cl=x=>Math.max(0,Math.min(1,x)),rampa=(f,a,b)=>cl((f-a)/(b-a));
const suave=x=>x*x*(3-2*x);
const SOL=[[0,10,60],[2.5,28,38],[5.5,50,26],[6.5,58,44],[9,64,56],[11.5,68,69],[12.5,70,86],[13.2,70,94]];
function solEn(f){for(let i=1;i<SOL.length;i++){if(f<=SOL[i][0]){const a=SOL[i-1],b=SOL[i],x=suave(cl((f-a[0])/(b[0]-a[0])));return[lerp(a[1],b[1],x),lerp(a[2],b[2],x)]}}return SOL[SOL.length-1].slice(1)}
let ultimo={},activo=-2,frag=-1,cuadros=null,recorrido=0,quieta=99,camPrev=null,fSuave=null,bucle=0,tPrev=0;
const fijo=(el,k,v)=>{if(ultimo[k]!==v){ultimo[k]=v;el.style[k.split('|')[0]]=v}};
function pasos(q,n){if(!cuadros||ultimo['p'+q]===n)return;const prev=ultimo['p'+q];ultimo['p'+q]=n;cuadros[q][n].style.opacity=1;if(prev!=null&&prev!==n)cuadros[q][prev].style.opacity=0}
const VIAJE=.55,LLEGA=.5; // cada tramo: camina el 55 %, el texto aparece al 50 % (casi llegando)
const suave5=x=>x*x*x*(x*(x*6-15)+10);
function objetivo(){return Math.min(cl((scrollY-topDia)/largo)*NF,NF-.0001)}
function pinta(forzar){
  if(!diaArmado||dia.hidden)return;
  const red=quieto.matches;
  const f=fSuave==null||red?objetivo():fSuave;
  const k=Math.floor(f),fr=f-k;
  // cámara: se mueve continua y suave hacia la estación de cada tramo
  const c0=k?camEn(k-1):camEn(0)-260*u,c1=camEn(k);
  const viaje=fr<VIAJE;
  const cam=red?(fr<LLEGA?c0:c1):(viaje?lerp(c0,c1,suave5(fr/VIAJE)):c1);
  const fs=red?(fr<LLEGA?Math.max(0,k-.01):k+.6):f; // en movimiento reducido el cielo salta entre paradas
  construyeCerca(k);
  // estaciones: se muestran un poco antes de entrar, para que el dibujo ya esté listo
  estaciones.forEach((S,j)=>{if(!S)return;const sx=j*SW*u-cam,ve=sx<W*1.35&&sx>-W*.6-SW*u;
    if(ve!==S.vis){S.vis=ve;S.E.style.display=S.L.style.display=ve?'':'none'}
    if(ve){const t=`translate3d(${sx.toFixed(1)}px,0,0)`;if(S.t!==t){S.t=t;S.E.style.transform=S.L.style.transform=t}}
    const on=j<k||(j===k&&fr>=LLEGA);if(on!==S.on){S.on=on;S.E.classList.toggle('on',on);S.L.classList.toggle('on',on)}});
  bandas.forEach((B,i)=>{const bw=B.ancho*u;const t=-(((cam+400*u)*B.par)%bw+bw)%bw;fijo(B.b,'transform|b'+i,`translate3d(${t.toFixed(1)}px,0,0)`)});
  // cielo
  fijo(capas.mediodia,'opacity|m',rampa(fs,.3,4).toFixed(3));
  fijo(capas.atardecer,'opacity|a',rampa(fs,6,6.5).toFixed(3));
  fijo(capas.noche,'opacity|n',rampa(fs,13.05,13.5).toFixed(3));
  const [sxp,syp]=solEn(fs);
  fijo(sol,'transform|s',`translate3d(${(sxp/100*W-.055*H).toFixed(1)}px,${(syp/100*H-.055*H).toFixed(1)}px,0)`);
  fijo(rojo,'opacity|r',(rampa(fs,10.9,11.6)*(1-rampa(fs,12.9,13.4))).toFixed(3));fijo(rojo,'transform|rt',`scale(${(.3+.7*rampa(fs,10.9,12)).toFixed(3)})`);
  fijo(brillo,'transform|bt',`translate3d(${(70/100*W).toFixed(0)}px,${(.72*H).toFixed(0)}px,0)`);
  fijo(brillo,'opacity|bo',(rampa(fs,11.7,12.4)*(1-rampa(fs,13.05,13.5))).toFixed(3));
  const no=rampa(fs,13.05,13.7);fijo(luna,'opacity|lo',no.toFixed(3));fijo(estrellas,'opacity|eo',no.toFixed(3));
  fijo(veloT,'opacity|vt',(.13*rampa(fs,6,6.5)*(1-rampa(fs,13.05,13.5))).toFixed(3));
  fijo(veloN,'opacity|vn',(.6*rampa(fs,13.05,13.5)).toFixed(3));
  const sil=(.1*rampa(fs,6,6.5)+.45*rampa(fs,13.05,13.5)).toFixed(2);if(ultimo.sil!==sil){ultimo.sil=sil;[ella,perrita,otra].forEach(e=>e.style.setProperty('--sil',sil))}
  const bajo=cl((syp-11)/50);fijo(sombra,'transform|so',`scaleX(${(.12+.88*bajo).toFixed(3)})`);fijo(sombra,'opacity|soo',(1-rampa(fs,12,12.6)).toFixed(2));
  // la perrita se adelanta desde S3; en N7 entran a casa
  const ade=k>2||(k===2&&fr>=LLEGA);if(ultimo.ade!==ade){ultimo.ade=ade;perrita.classList.toggle('adelante',ade)}
  const casa=k===NF-1&&fr>=LLEGA;if(ultimo.casa!==casa){ultimo.casa=casa;[ella,perrita,otra].forEach(e=>e.classList.toggle('entra',casa))}
  // fragmento visible y momento
  const nf=fr>=LLEGA?k:(fr<.05&&k>0?k-1:-1);
  if(nf!==frag){if(frag>=0)frags.children[frag].classList.remove('vis');if(nf>=0)frags.children[nf].classList.add('vis');frag=nf}
  const mo=k<6?0:k<13?1:2;if(mo!==activo){activo=mo;momentos.forEach((li,i)=>i===mo?li.setAttribute('aria-current','step'):li.removeAttribute('aria-current'));escena.classList.toggle('de-noche',mo===2)}
  // camina solo mientras la cámara se mueve
  // los pasos siguen a la distancia recorrida (no a un reloj): no hay parpadeo al parar y seguir
  const mov=camPrev===null?0:Math.abs(cam-camPrev);camPrev=cam;
  if(!red&&!forzar&&mov>.2){recorrido+=mov;quieta=0}else quieta++;
  const anda=quieta<6;
  pasos('ella',anda?[0,1,2,1][Math.floor(recorrido/(22*u))%4]:1);
  pasos('concha',anda?Math.floor(recorrido/(14*u))%2:0);pasos('mia',anda?Math.floor(recorrido/(14*u)+1)%2:0);
}
/* el día sigue al dedo con un poco de inercia: cada cuadro se acerca al punto real */
function cuadro(t){
  const dt=Math.min(64,t-(tPrev||t));tPrev=t;
  const obj=objetivo();if(fSuave==null)fSuave=obj;
  fSuave+=(obj-fSuave)*(1-Math.exp(-dt/110));
  if(Math.abs(obj-fSuave)<.0004)fSuave=obj;
  pinta();
  bucle=fSuave!==obj?requestAnimationFrame(cuadro):0;
  if(!bucle){tPrev=0;quieta=99;pasos('ella',1);pasos('concha',0);pasos('mia',0)}
}
addEventListener('scroll',()=>{if(quieto.matches){pinta();return}if(!bucle)bucle=requestAnimationFrame(cuadro)},{passive:true});
addEventListener('resize',()=>{if(diaArmado)medir()});
quieto.addEventListener('change',()=>pinta(true));
