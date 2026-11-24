/* ===================== Parte 4 · La carta ===================== */
const CARTA=@@CARTA@@;
const carta=document.getElementById('carta');
let cartaArmada=false;
function dib(cont,x,y,w,h,cls,dibuja){ // pieza dentro de un dibujo de 120×120
  const d=div('pz '+(cls||''),cont);d.style.cssText=`left:${x/1.2}%;top:${y/1.2}%;width:${w/1.2}%;height:${h/1.2}%`;
  const sv=lienzo(`0 0 ${w} ${h}`);dibuja(sv);d.append(sv);return d;
}
const MAR='#b8a0d2',o1={strokeWidth:1.3};
const DIBUJOS=[
 /* 1 · camino que da la vuelta al mar y termina en una luz */
 c=>{dib(c,0,0,120,120,'',s=>{D(s,'path',['M4 70 Q30 60 60 66 Q92 72 116 62 L116 116 L4 116Z'],F_(MAR,{...o1,seed:701}));
     [84,96].forEach((y,i)=>D(s,'path',[`M14 ${y} Q24 ${y-5} 34 ${y} Q44 ${y+5} 54 ${y} Q64 ${y-5} 74 ${y}`],{...o1,stroke:'#fbf3e4',seed:702+i}));
     D(s,'path',['M6 112 Q2 60 40 46 Q80 32 104 40'],{strokeWidth:3,stroke:K.madera2,seed:704});
     D(s,'rectangle',[100,22,10,22],F_(K.muro,{...o1,seed:705}))});
   dib(c,92,6,26,26,'faro',s=>D(s,'circle',[13,13,20],F_(K.luz,{...o1,stroke:C.dorado,seed:706})))},
 /* 2 · un barco que se aleja y vuelve; una ventana con luz que lo espera */
 c=>{dib(c,0,0,120,120,'',s=>{D(s,'path',['M0 92 Q20 86 40 92 Q60 98 80 92 Q100 86 120 92'],{...o1,stroke:MAR,strokeWidth:2,seed:711});
     D(s,'rectangle',[84,40,30,36],F_(K.muro,{...o1,seed:712}));D(s,'polygon',[[[80,42],[99,26],[118,42]]],F_(K.techo,{...o1,seed:713}));
     D(s,'rectangle',[92,50,14,14],F_(K.vidrio,{...o1,seed:714}))});
   dib(c,92,50,14,14,'ventana-c',s=>D(s,'rectangle',[1,1,12,12],F_(K.luz,{...o1,seed:715})));
   dib(c,30,48,46,46,'barco',s=>{D(s,'path',['M4 32 L42 32 L36 42 L10 42Z'],F_(K.madera,{...o1,seed:716}));D(s,'line',[22,32,22,4],{...o1,seed:717});D(s,'polygon',[[[23,6],[23,28],[40,28]]],F_('#fbf3e4',{...o1,seed:718}))})},
 /* 3 · alguien camina de frente y detrás suena una música suave */
 c=>{dib(c,0,0,120,120,'',s=>{D(s,'line',[10,108,112,108],{...o1,stroke:K.madera2,seed:721});
     D(s,'circle',[78,40,18],F_('#d9a57c',{...o1,seed:722}));D(s,'path',['M70 50 L86 50 L90 82 L66 82Z'],F_(K.vestido,{...o1,seed:723}));
     D(s,'line',[72,82,70,106],{...o1,stroke:'#5f76a8',strokeWidth:4,seed:724});D(s,'line',[84,82,88,106],{...o1,stroke:'#5f76a8',strokeWidth:4,seed:725})});
   [[22,40,0],[36,22,700],[12,16,1400]].forEach(([x,y,dl],i)=>{const n=dib(c,x,y,22,26,'nota',s=>{D(s,'ellipse',[7,20,11,8],F_(C.rosado,{...o1,seed:726+i}));D(s,'line',[12,20,12,3],{...o1,seed:729+i});if(i!==1)D(s,'line',[12,3,19,7],{...o1,seed:732+i})});n.style.setProperty('--dl',dl+'ms')})},
 /* 4 · un jardín de noche con la puerta abierta */
 c=>{dib(c,0,0,120,120,'',s=>{D(s,'circle',[100,18,14],F_('#fbf3e4',{...o1,stroke:C.dorado,seed:741}));
     for(let i=0;i<5;i++){const x=8+i*9;D(s,'line',[x,104,x,70],{...o1,stroke:K.madera,seed:742+i})}D(s,'line',[4,78,50,78],{...o1,stroke:K.madera,seed:747});
     for(let i=0;i<4;i++){const x=78+i*11;D(s,'line',[x,104,x,72],{...o1,stroke:K.madera,seed:748+i})}D(s,'line',[74,80,116,80],{...o1,stroke:K.madera,seed:752});
     [[16,62],[30,58],[96,64],[110,60]].forEach(([x,y],i)=>D(s,'circle',[x,y,10],F_(i%2?C.rosado:K.petalo,{...o1,seed:753+i})));
     D(s,'line',[4,106,116,106],{...o1,stroke:K.tallo,seed:757})});
   dib(c,52,66,24,40,'puerta-c',s=>{D(s,'rectangle',[1,1,22,38],F_(K.madera2,{...o1,seed:758}));D(s,'line',[1,14,23,14],{...o1,seed:759});D(s,'line',[1,28,23,28],{...o1,seed:760})})},
];
function armaCarta(){
  if(cartaArmada)return;cartaArmada=true;
  const cs=lienzo('0 0 1000 1000');cs.setAttribute('preserveAspectRatio','xMidYMid slice');
  for(let i=0;i<34;i++){const x=(i*293)%1000,y=(i*131)%1000;D(cs,'circle',[x,y,i%5?3:5],F_('#fbf3e4',{...SIN,roughness:.3,seed:800+i}))}
  carta.querySelector('.cielo-c').append(cs);
  const hoja=carta.querySelector('.hoja-c');
  const bs=lienzo('0 0 100 100');bs.setAttribute('preserveAspectRatio','none');bs.classList.add('borde');
  bs.append(rough.svg(bs).rectangle(.4,.3,99.2,99.4,{stroke:'#c9b59a',strokeWidth:.6,roughness:.5,seed:810}));
  hoja.prepend(bs);
  CARTA.forEach((lineas,i)=>{
    const e=document.createElement('div');e.className='estrofa';
    const p=document.createElement('p');
    lineas.forEach((t,j)=>{const v=document.createElement('span');v.className='v';v.textContent=t;v.style.setProperty('--dl',(j*140)+'ms');p.append(v)});
    const d=div('dib',null);d.setAttribute('aria-hidden','true');DIBUJOS[i](d);
    e.append(p,d);hoja.append(e);
  });
  // cada estrofa aparece al llegar a ella y se queda
  const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('on');io.unobserve(en.target)}}),{threshold:.45});
  hoja.querySelectorAll('.estrofa').forEach(e=>io.observe(e));
  // volver al inicio del día: se cubre un instante, salta y se descubre (sin recorrer todo el día de golpe)
  const cort=document.querySelector('.cortina');
  carta.querySelector('.volver').addEventListener('click',()=>{
    const salta=()=>{medir();scrollTo({top:topDia,behavior:'instant'});fSuave=null;pinta(true);cort.classList.remove('on')};
    if(quieto.matches){salta();return}
    cort.classList.add('on');setTimeout(salta,340);
  });
}
