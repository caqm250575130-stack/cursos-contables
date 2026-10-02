const PRESENTATION_COURSES={
'catalogo-cuentas':{
 title:'¿Qué es un catálogo de cuentas?',
 slides:[
  {k:'01',h:'¿Qué es un catálogo de cuentas?',p:'Es una lista ordenada y codificada de las cuentas que una empresa utiliza para registrar sus operaciones contables.',b:['Organiza la información contable','Facilita el registro de operaciones','Permite identificar cada cuenta con claridad']},
  {k:'02',h:'¿Para qué sirve?',p:'Ayuda a mantener un mismo criterio al registrar las operaciones y a localizar rápidamente la información contable.',b:['Ordena las cuentas','Evita confusiones entre conceptos','Facilita la elaboración de estados financieros']},
  {k:'03',h:'¿Cómo se estructura?',p:'Normalmente las cuentas se agrupan según su naturaleza y pueden identificarse mediante códigos.',b:['Activo','Pasivo','Capital contable','Ingresos','Costos y gastos']},
  {k:'04',h:'Ejemplo sencillo',p:'Una empresa puede utilizar códigos como los siguientes:',b:['1101 · Caja','1102 · Bancos','1201 · Clientes','2101 · Proveedores','3101 · Capital social']},
  {k:'05',h:'En resumen',p:'El catálogo de cuentas es la guía que indica qué cuentas existen y cómo se identifican dentro de la contabilidad.',b:['Ordena','Clasifica','Codifica','Facilita el registro']}
 ]
},
'cuenta-t':{
 title:'¿Qué es una cuenta T?',
 slides:[
  {k:'01',h:'¿Qué es una cuenta T?',p:'Es una representación sencilla de una cuenta contable. Se llama cuenta T porque su forma recuerda a la letra T.',b:['Lado izquierdo: DEBE','Lado derecho: HABER','Permite visualizar movimientos']},
  {k:'02',h:'Debe y Haber',p:'Cada operación contable se registra en uno o ambos lados de las cuentas, según corresponda.',b:['DEBE → lado izquierdo','HABER → lado derecho','Los registros deben mantener equilibrio']},
  {k:'03',h:'Ejemplo',p:'Si una empresa recibe efectivo por una operación, el movimiento se refleja en la cuenta correspondiente.',b:['Caja → movimiento en DEBE','La cuenta que origina la salida o contrapartida se registra en HABER','Siempre existe correspondencia entre cargos y abonos']},
  {k:'04',h:'¿Para qué sirve?',p:'La cuenta T facilita el aprendizaje y el análisis de los movimientos de una cuenta antes de llevarlos al libro mayor.',b:['Visualizar cargos y abonos','Analizar movimientos','Comprobar la lógica de una operación']},
  {k:'05',h:'En resumen',p:'Una cuenta T es una herramienta visual para entender cómo se distribuyen los movimientos entre DEBE y HABER.',b:['DEBE = izquierda','HABER = derecha','Ayuda a analizar operaciones']}
 ]
},
'leyes-consumidor-salarios':{
 title:'Leyes de protección al consumidor y salarios',
 slides:[
  {k:'01',h:'¿Qué aprenderás?',p:'Una introducción práctica a las normas salvadoreñas relacionadas con la protección del consumidor, el trabajo y los salarios.',b:['Derechos básicos del consumidor','Protección en las relaciones de consumo','Derechos laborales y salario mínimo','Dónde consultar los textos oficiales']},
  {k:'02',h:'Protección al consumidor',p:'La Ley de Protección al Consumidor establece reglas sobre las relaciones entre consumidores y proveedores y reconoce derechos básicos del consumidor.',b:['Información clara y oportuna','Protección frente a prácticas abusivas','Condiciones y garantías de los productos y servicios','Consulta de la ley en fuentes oficiales']},
  {k:'03',h:'Trabajo y salarios',p:'La Constitución y el Código de Trabajo contienen normas relacionadas con el trabajo y la remuneración. El salario mínimo se fija mediante el marco legal correspondiente.',b:['Derecho al trabajo y protección laboral','Salario mínimo legal','Jornadas, descansos y vacaciones','Consulta de la normativa vigente']},
  {k:'04',h:'Documentos oficiales',p:'Usa estos enlaces para consultar directamente las fuentes institucionales. Las normas pueden ser reformadas, por lo que conviene revisar siempre la versión oficial vigente.',b:['Constitución de la República','Ley de Protección al Consumidor','Código de Trabajo','Información oficial sobre salario mínimo']},
  {k:'05',h:'Fuentes oficiales para descargar',p:'Consulta y descarga los documentos desde los sitios institucionales de El Salvador.',b:['Asamblea Legislativa → Constitución','Asamblea Legislativa → Ley de Protección al Consumidor','MTPS → Código de Trabajo','MTPS → información y descargas sobre salario mínimo']}
 ],
 links:[
  {label:'📄 Constitución de la República',url:'https://www.asamblea.gob.sv/node/13639'},
  {label:'📄 Ley de Protección al Consumidor',url:'https://biblioteca.asamblea.gob.sv/185816_ley-y-reglamento-de-proteccin-al-consumidor'},
  {label:'📄 Código de Trabajo',url:'https://www.mtps.gob.sv/download/decreto-no-15-codigo-de-trabajo-de-el-salvador/'},
  {label:'💰 Salario mínimo · MTPS',url:'https://www.mtps.gob.sv/descargas/'}
],
},
'libro-mayor':{
 title:'¿Qué es un libro mayor?',
 slides:[
  {k:'01',h:'¿Qué es el libro mayor?',p:'Es el registro donde se concentran y clasifican los movimientos de cada cuenta contable.',b:['Reúne los movimientos por cuenta','Permite conocer saldos','Es fundamental para el control contable']},
  {k:'02',h:'¿Qué contiene?',p:'Cada cuenta muestra sus movimientos de manera ordenada para poder analizar cargos, abonos y saldo.',b:['Fecha','Concepto','Debe','Haber','Saldo']},
  {k:'03',h:'Relación con la cuenta T',p:'La cuenta T ayuda a visualizar la lógica de los movimientos; el libro mayor presenta esos movimientos de forma organizada y formal.',b:['Cuenta T → herramienta visual','Libro mayor → registro organizado','Ambos trabajan con DEBE y HABER']},
  {k:'04',h:'Ejemplo',p:'En la cuenta Bancos pueden registrarse depósitos y pagos, acumulando los movimientos para obtener el saldo de la cuenta.',b:['Depósito → movimiento registrado','Pago → movimiento registrado','Saldo → resultado de los movimientos']},
  {k:'05',h:'En resumen',p:'El libro mayor permite conocer qué ocurrió en cada cuenta y cuál es su saldo después de registrar las operaciones.',b:['Clasifica movimientos','Facilita el análisis','Permite obtener saldos']}
 ]
}
};

function presentationFor(c){return c&&c.presentation?PRESENTATION_COURSES[c.presentation]:null}
function isPresentation(c){return !!presentationFor(c)}
function presentationHtml(c,compact=false){
 const data=presentationFor(c); if(!data)return '';
 const slides=data.slides;
 return `<div class="presentation ${compact?'presentation-compact':''}" data-presentation="${esc(c.id)}"><div class="presentation-stage"><div class="presentation-kicker">PRESENTACIÓN · ${esc(c.category)}</div><div class="presentation-counter"><span class="presentation-current">1</span> / ${slides.length}</div><div class="presentation-progress"><i style="width:${100/slides.length}%"></i></div><div class="presentation-slide-wrap">${slides.map((sl,i)=>`<article class="presentation-slide ${i===0?'active':''}" data-slide="${i}"><div class="presentation-number">${esc(sl.k)}</div><h3>${esc(sl.h)}</h3><p>${esc(sl.p)}</p><ul>${sl.b.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article>`).join('')}</div><div class="presentation-controls"><button type="button" class="btn soft presentation-prev" disabled>← Anterior</button><button type="button" class="btn primary presentation-next">Siguiente →</button></div></div></div>`;
}
function initPresentation(root){
 if(!root)return;
 const slides=[...root.querySelectorAll('.presentation-slide')], current=root.querySelector('.presentation-current'), progress=root.querySelector('.presentation-progress i'), prev=root.querySelector('.presentation-prev'), next=root.querySelector('.presentation-next');
 let index=0;
 const update=()=>{slides.forEach((s,i)=>s.classList.toggle('active',i===index));if(current)current.textContent=index+1;if(progress)progress.style.width=((index+1)/slides.length*100)+'%';if(prev)prev.disabled=index===0;if(next)next.textContent=index===slides.length-1?'✓ Finalizar':'Siguiente →'};
 prev?.addEventListener('click',()=>{if(index>0){index--;update()}});next?.addEventListener('click',()=>{if(index<slides.length-1){index++;update()}else{index=0;update()}});
 root.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'&&index>0){index--;update()}if(e.key==='ArrowRight'&&index<slides.length-1){index++;update()}});root.tabIndex=0;
 update();
}

const DEFAULT={courses:[
{id:'c1',title:'Excel aplicado a ISR · Artículo 45 LISR',category:'Excel',level:'Práctico',duration:'1:15 min',description:'Clase práctica sobre el uso de Excel para cálculos relacionados con el Artículo 45 de la Ley del Impuesto Sobre la Renta, trabajando con datos y fórmulas en una hoja de cálculo.',topics:['Artículo 45 LISR','Cálculos en Excel','Datos y fórmulas','Aplicación práctica'],video:'curso-01-excel-isr.mp4',access:'pro'},
{id:'c2',title:'Capital contable y estados financieros',category:'Contabilidad',level:'Intermedio',duration:'1:15 min',description:'Clase enfocada en la lectura del capital contable, sus principales componentes y la comprobación de la relación entre activo, pasivo y capital contable.',topics:['Capital social','Reserva legal','Resultados de ejercicios anteriores','Resultado del ejercicio','Pasivo + capital contable'],video:'curso-02-capital-contable.mp4',access:'pro'},
{id:'c3',title:'Cómo calcular el precio con y sin impuestos',category:'Impuestos',level:'Práctico',duration:'1:07 min',description:'Aprende a obtener el precio de venta a partir del costo y margen, y a calcular el IVA y el precio final con impuestos.',topics:['Costo y margen','Precio sin IVA','Cálculo del IVA','Precio incluido IVA'],video:'curso-03-precio-impuestos.mp4',access:'pro'},
{id:'c4',title:'Utilidad neta: estado de resultados',category:'Contabilidad',level:'Práctico',duration:'2:59 min',description:'Aprende a identificar y relacionar ventas, costo de ventas, utilidad bruta, gastos operativos, utilidad antes de impuestos y la utilidad neta dentro de un estado de resultados.',topics:['Ventas','Costo de ventas','Utilidad bruta','Gastos operativos','Utilidad antes de impuestos','Utilidad neta'],video:'curso-04-utilidad-neta.mp4',access:'pro'},
{id:'c5',title:'¿Qué es un catálogo de cuentas?',category:'Contabilidad',level:'Principiante',duration:'Presentación · 5 temas',description:'Presentación introductoria para comprender qué es un catálogo de cuentas, para qué sirve y cómo se organiza.',topics:['Concepto','Utilidad','Estructura','Ejemplo','Resumen'],access:'normal',type:'presentation',presentation:'catalogo-cuentas'},
{id:'c6',title:'¿Qué es una cuenta T?',category:'Contabilidad',level:'Principiante',duration:'Presentación · 5 temas',description:'Presentación introductoria para comprender el DEBE, el HABER y la utilidad de la cuenta T en contabilidad.',topics:['Concepto','Debe y Haber','Ejemplo','Utilidad','Resumen'],access:'normal',type:'presentation',presentation:'cuenta-t'},
{id:'c7',title:'¿Qué es un libro mayor?',category:'Contabilidad',level:'Principiante',duration:'Presentación · 5 temas',description:'Presentación introductoria sobre el libro mayor, sus elementos y su relación con la cuenta T.',topics:['Concepto','Contenido','Cuenta T','Ejemplo','Resumen'],access:'normal',type:'presentation',presentation:'libro-mayor'},
{id:'c8',title:'Leyes de protección al consumidor y salarios',category:'Leyes y derechos',level:'Principiante',duration:'Presentación · 5 temas',description:'Presentación gratuita sobre protección al consumidor, derechos laborales y salarios, con enlaces directos a fuentes oficiales de El Salvador.',topics:['Protección al consumidor','Derechos laborales','Salario mínimo','Constitución','Fuentes oficiales'],access:'normal',type:'presentation',presentation:'leyes-consumidor-salarios'},
{id:'c9',title:'Ecuación contable fundamental',category:'Contabilidad',level:'Principiante',duration:'0:25 min',description:'Video introductorio sobre la ecuación contable fundamental y la relación entre activos, pasivos y patrimonio.',topics:['Activos','Pasivos','Patrimonio','Ecuación contable','Estado de resultados'],video:'curso-09-ecuacion-contable.mp4',access:'normal'},
{id:'c10',title:'¿Dónde va cada cuenta T?',category:'Contabilidad',level:'Principiante',duration:'0:15 min',description:'Video práctico para reconocer en qué lado de la cuenta T se registran movimientos de distintas cuentas contables.',topics:['Debe','Haber','Activos','Pasivos','Ingresos','Gastos','Capital'],video:'curso-10-cuenta-t.mp4',access:'normal'},
{id:'c11',title:'Error común al calcular el precio de venta (PVP)',category:'Impuestos',level:'Práctico',duration:'1:35 min',description:'Video práctico que muestra un error frecuente al calcular el precio de venta y trabaja la relación entre costos, margen y PVP.',topics:['PVP','Costos','Margen','Cálculo del precio de venta'],video:'curso-11-error-pvp.mp4',access:'pro'},
{id:'pro1',title:'Contabilidad PRO · Curso 1',category:'Contabilidad',level:'Avanzado',duration:'24:38 min',description:'Curso PRO de práctica contable. Incluye resolución de operaciones, compras, ventas, bancos, mobiliario, alquiler y tratamiento de IVA mediante ejercicios.',topics:['Operaciones contables','Compras de mercadería','Ventas al contado','Bancos y efectivo','Mobiliario y equipo','Alquiler e IVA'],video:'pro-01-contabilidad.mp4',access:'pro'},
{id:'pro2',title:'Contabilidad PRO · Curso 2',category:'Contabilidad',level:'Avanzado',duration:'11:51 min',description:'Contenido PRO de apoyo para profundizar en el aprendizaje contable mediante una clase audiovisual práctica.',topics:['Repaso práctico','Análisis de ejercicios','Aplicación contable','Resolución guiada'],video:'pro-02-contabilidad.mp4',access:'pro'},
{id:'excel-tip-01',title:'Truco de Excel 01 · Inventario y almacenes',category:'Trucos de Excel',level:'Truco rápido',duration:'0:27 min',description:'Tip breve de productividad para trabajar con inventarios y almacenes en una hoja de cálculo.',topics:['Inventario','Almacenes','Organización de datos'],video:'excel-tip-01.mp4',access:'normal',featured:'excel-tip'},
{id:'excel-tip-02',title:'Truco de Excel 02 · Datos rápidos',category:'Trucos de Excel',level:'Truco rápido',duration:'0:23 min',description:'Tip corto de Excel centrado en agilizar el trabajo con datos y una tabla.',topics:['Datos','Tablas','Productividad'],video:'excel-tip-02.mp4',access:'normal',featured:'excel-tip'},
{id:'excel-tip-03',title:'Truco de Excel 03 · Imprimir una imagen en varias hojas',category:'Trucos de Excel',level:'Truco rápido',duration:'0:19 min',description:'Aprende un método rápido para imprimir una imagen distribuida en varias hojas de Excel.',topics:['Impresión','Configuración de página','Imágenes'],video:'excel-tip-03.mp4',access:'normal',featured:'excel-tip'},
{id:'excel-tip-04',title:'Truco de Excel 04 · Hoja cuadriculada',category:'Trucos de Excel',level:'Truco rápido',duration:'0:21 min',description:'Tip para preparar una hoja con apariencia cuadriculada y usarla como plantilla.',topics:['Plantillas','Cuadrícula','Formato'],video:'excel-tip-04.mp4',access:'normal',featured:'excel-tip'},
{id:'excel-tip-05',title:'Truco de Excel 05 · Abrir PDF para editar en Word',category:'Trucos de Excel',level:'Truco rápido',duration:'0:28 min',description:'Truco de productividad de Office para convertir y abrir un PDF como documento editable.',topics:['PDF','Word','Productividad Office'],video:'excel-tip-05.mp4',access:'normal',featured:'excel-tip'},
{id:'excel-tip-06',title:'Truco de Excel 06 · Documento y formato',category:'Trucos de Excel',level:'Truco rápido',duration:'0:20 min',description:'Tip breve de productividad para trabajar y presentar información con herramientas de Office.',topics:['Formato','Documentos','Productividad'],video:'excel-tip-06.mp4',access:'normal',featured:'excel-tip'},
{id:'excel-tip-07',title:'Truco de Excel 07 · Registro de préstamos',category:'Trucos de Excel',level:'Truco rápido',duration:'3:22 min',description:'Ejemplo práctico de una hoja para organizar y registrar información de préstamos.',topics:['Registros','Tablas','Control de préstamos'],video:'excel-tip-07.mp4',access:'normal',featured:'excel-tip'},
{id:'excel-tip-08',title:'Truco de Excel 08 · Tabla de clientes y estados',category:'Trucos de Excel',level:'Truco rápido',duration:'2:28 min',description:'Tip práctico para organizar clientes, meses, montos y estados en una tabla.',topics:['Clientes','Estados','Tablas'],video:'excel-tip-08.mp4',access:'normal',featured:'excel-tip'},
{id:'excel-tip-09',title:'Truco de Excel 09 · Registro de empleados',category:'Trucos de Excel',level:'Truco rápido',duration:'0:30 min',description:'Tip práctico para montar un registro de empleados con campos organizados.',topics:['Empleados','Registro','Campos de datos'],video:'excel-tip-09.mp4',access:'normal',featured:'excel-tip'}]};
const FORCED_PRO_COURSES=new Set(['c1','c2','c3','c4','c11','pro1','pro2']);
const PRO_PLAYLIST_ORDER=['c2','c4','c3','c11','c1','pro1','pro2'];
let state=load(),filter='Todos',adminFilter='Todos',editing=null,proUnlocked=false,pendingProCourse=null,authBusy=false;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
async function authRequest(path,body={}){
 try{const r=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},credentials:'same-origin',body:JSON.stringify(body)});let data={};try{data=await r.json()}catch(e){};return {ok:r.ok,status:r.status,data}}catch(e){return {ok:false,status:0,data:{message:'No se pudo conectar con el servidor de autenticación.'}}}
}
async function logoutAuth(){
 try{await fetch('/api/auth/logout',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'}})}catch(e){}
 proUnlocked=false;
}
async function hasServerSession(role){
 try{const r=await fetch('/api/auth/session',{method:'GET',credentials:'same-origin',cache:'no-store'});if(!r.ok)return false;const data=await r.json();return data.authenticated===true&&data.role===role}catch(e){return false}
}
function load(){
 try{const raw=JSON.parse(localStorage.getItem('antonioSolutionsAcademy'));
  if(raw?.courses){
   const saved=raw.courses.map(c=>({...c,access:c.access||'normal'}));
   const ids=new Set(saved.map(c=>c.id));
   DEFAULT.courses.forEach(c=>{if(!ids.has(c.id))saved.push(structuredClone(c))});
   saved.forEach(c=>{if(FORCED_PRO_COURSES.has(c.id))c.access='pro'});
   return {courses:saved};
  }
 }catch(e){}
 return structuredClone(DEFAULT);
}
function save(){localStorage.setItem('antonioSolutionsAcademy',JSON.stringify(state))}
function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function isPro(c){return c.access==='pro'}
function isExcelTip(c){return c.category==='Trucos de Excel'}
function cardIcon(c){return isExcelTip(c)?'⚡':c.category==='Excel'?'▦':c.category==='Contabilidad'?'▤':c.category==='Leyes y derechos'?'⚖':'◈'}
function render(){
 const q=$('#search').value.trim().toLowerCase();
 const arr=state.courses.filter(c=>{const mf=filter==='Todos'||(filter==='PRO'?isPro(c):c.category===filter);const ms=`${c.title} ${c.description} ${c.category} ${c.topics.join(' ')}`.toLowerCase().includes(q);return mf&&ms});
 $('#courseCount').textContent=state.courses.length;
 $('#courses').innerHTML=arr.map(c=>`
 <article class="card ${isPro(c)?'pro-card':''} ${isExcelTip(c)?'excel-tip-card':''}" style="--glow:${isExcelTip(c)?'#22c55e':c.category==='Excel'?'#22d3ee':c.category==='Contabilidad'?'#8b5cf6':'#f59e0b'}">
 <div class="card-badges"><span class="tag">${esc(c.category)}</span>${isPro(c)?'<span class="pro-badge">🔒 PRO</span>':isExcelTip(c)?'<span class="excel-tip-badge">⚡ TRUCO</span>':'<span class="normal-badge">NORMAL</span>'}</div>
 <span class="card-icon">${cardIcon(c)}</span>
 <h3>${esc(c.title)}</h3><p>${esc(c.description)}</p>
 <div class="meta"><span>◷ ${esc(c.duration)}</span><span>•</span><span>${esc(c.level)}</span></div>
 <button class="btn ${isPro(c)?'pro-btn':isExcelTip(c)?'excel-tip-btn':'primary'} view" data-open="${esc(c.id)}">${isPro(c)?'🔒 Acceder al curso PRO':isPresentation(c)?'📖 Ver presentación':isExcelTip(c)?'⚡ Ver truco':'Ver curso y clase'}</button>
 </article>`).join('');
 $('#noResults').classList.toggle('hidden',arr.length!==0);
 $$('[data-open]').forEach(b=>b.onclick=()=>openCourse(b.dataset.open));
}
async function openCourse(id){
 const c=state.courses.find(x=>x.id===id);if(!c)return;
 if(isPro(c)){
  if(!proUnlocked || !(await hasServerSession('pro'))){proUnlocked=false;openProLogin(id);return;}
 }
 const accessBadge=isPro(c)?'<span class="pro-badge large">🔓 PRO DESBLOQUEADO</span>':isExcelTip(c)?'<span class="excel-tip-badge large">⚡ TRUCO DE EXCEL</span>':'<span class="normal-badge large">CURSO NORMAL</span>';
 const links=presentationFor(c)?.links||[];
 const linksHtml=links.length?`<div class="official-links"><h3>📚 Documentos y fuentes oficiales</h3><p class="muted">Consulta siempre la versión oficial vigente.</p><div class="official-link-grid">${links.map(l=>`<a class="btn soft official-link" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)} ↗</a>`).join('')}</div></div>`:'';
 const courseBody=isPresentation(c)?presentationHtml(c):`<div class="video-wrap"><video controls preload="metadata" playsinline><source src="src/videos/${esc(c.video||'')}" type="video/mp4">Tu navegador no puede reproducir este video.</video></div>`;
 $('#courseView').innerHTML=`<div class="course-access-line">${accessBadge}</div><span class="eyebrow">${esc(c.category)} · ${esc(c.level)}</span><h2>${esc(c.title)}</h2><p class="muted">${esc(c.description)}</p>${courseBody}${linksHtml}<div class="detail-grid"><div class="detail"><h3>En esta clase</h3><ul>${c.topics.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div><div class="detail"><h3>Información</h3><p><b>Duración:</b> ${esc(c.duration)}</p><p><b>Nivel:</b> ${esc(c.level)}</p><p><b>Acceso:</b> ${isPro(c)?'PRO · protegido por contraseña':'Gratis'}</p><p><b>Categoría:</b> ${esc(c.category)}</p></div></div>`;
 if(isPresentation(c))initPresentation($('#courseView [data-presentation]'));
 $('#courseModal').classList.add('show');
}
function openProLogin(id){pendingProCourse=id;$('#proPassword').value='';$('#proModal').classList.add('show');setTimeout(()=>$('#proPassword').focus(),50)}
$('#proUnlock').onclick=async()=>{
 if(authBusy)return;
 authBusy=true;$('#proUnlock').disabled=true;
 const result=await authRequest('/api/auth/login',{scope:'pro',password:$('#proPassword').value});
 authBusy=false;$('#proUnlock').disabled=false;
 if(result.ok){proUnlocked=true;$('#proModal').classList.remove('show');if(pendingProCourse)openCourse(pendingProCourse);pendingProCourse=null}
 else alert(result.data?.message||'No se pudo validar el acceso PRO.');
};
$$('[data-pro-close]').forEach(b=>b.onclick=async()=>{await logoutAuth();$('#proModal').classList.remove('show');pendingProCourse=null});
$('#proPassword').addEventListener('keydown',e=>{if(e.key==='Enter')$('#proUnlock').click()});
$('#toggleProPassword').onclick=()=>{const i=$('#proPassword');const visible=i.type==='text';i.type=visible?'password':'text';$('#toggleProPassword').textContent=visible?'◉':'◌';$('#toggleProPassword').setAttribute('aria-label',visible?'Mostrar contraseña':'Ocultar contraseña')};
function closeAll(){ $$('.modal').forEach(x=>x.classList.remove('show'));pendingProCourse=null }
async function closeAdminSession(){
 await logoutAuth();
 $('#adminView').classList.add('hidden');$('#loginView').classList.remove('hidden');$('#password').value='';clearEditor();
 const v=$('#adminModal').querySelectorAll('video');v.forEach(x=>{try{x.pause()}catch(e){}});
 $('#adminModal').classList.remove('show');
}
async function openAdmin(){await logoutAuth();closeAll();$('#adminModal').classList.add('show');$('#loginView').classList.remove('hidden');$('#adminView').classList.add('hidden');$('#password').value='';clearEditor()}
$('#adminOpen').onclick=openAdmin;$('#footerAdmin').onclick=openAdmin;
$('#courseModal').querySelector('[data-close]').onclick=()=>$('#courseModal').classList.remove('show');
$('#adminModal').querySelector('[data-close]').onclick=closeAdminSession;
$$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target!==m)return;if(m.id==='adminModal')closeAdminSession();else m.classList.remove('show')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('#adminModal').classList.contains('show'))closeAdminSession();else closeAll()}});
$('#search').oninput=render;
$('#filters').onclick=e=>{if(!e.target.matches('button'))return;filter=e.target.dataset.filter;$$('#filters button').forEach(b=>b.classList.toggle('active',b===e.target));render()};
$('#continueBtn').onclick=()=>{const c=state.courses.find(c=>!isPro(c));if(c)openCourse(c.id)};
$('#login').onclick=async()=>{
 if(authBusy)return;
 authBusy=true;$('#login').disabled=true;
 const result=await authRequest('/api/auth/login',{scope:'admin',password:$('#password').value});
 authBusy=false;$('#login').disabled=false;
 if(result.ok){$('#loginView').classList.add('hidden');$('#adminView').classList.remove('hidden');clearEditor();renderAdmin()}
 else alert(result.data?.message||'No se pudo validar el acceso administrativo.');
};
$('#password').addEventListener('keydown',e=>{if(e.key==='Enter')$('#login').click()});
$('#logout').onclick=()=>closeAdminSession();
$$('[data-admin-filter]').forEach(b=>b.onclick=()=>{adminFilter=b.dataset.adminFilter;$$('[data-admin-filter]').forEach(x=>x.classList.toggle('active',x===b));renderAdmin()});
function renderAdmin(){
 const arr=state.courses.filter(c=>adminFilter==='Todos'||(adminFilter==='PRO'?isPro(c):adminFilter==='Normal'?!isPro(c):c.category===adminFilter));
 $('#adminList').innerHTML=arr.map(c=>`<div class="admin-item ${isPro(c)?'admin-pro-item':''} ${isExcelTip(c)?'admin-excel-tip-item':''}" draggable="true" data-id="${esc(c.id)}"><div class="drag">☷</div><div><h4>${esc(c.title)}</h4><small>${esc(c.category)} · ${isPresentation(c)?'Presentación integrada':esc(c.video||'')}</small></div><span class="admin-access ${isPro(c)?'pro':isExcelTip(c)?'excel-tip':'normal'}">${isPro(c)?'🔒 PRO':isExcelTip(c)?'⚡ TRUCO':'NORMAL'}</span><div class="item-actions"><button data-edit="${esc(c.id)}">Editar</button><button data-delete="${esc(c.id)}">Eliminar</button></div></div>`).join('');
 $$('[data-edit]').forEach(b=>b.onclick=()=>editCourse(b.dataset.edit));$$('[data-delete]').forEach(b=>b.onclick=()=>deleteCourse(b.dataset.delete));setupDrag();
}
function setupDrag(){let drag=null;$$('.admin-item').forEach(el=>{el.addEventListener('dragstart',()=>{drag=el;el.classList.add('dragging')});el.addEventListener('dragend',()=>{el.classList.remove('dragging');if(drag)commitOrder()});el.addEventListener('dragover',e=>{e.preventDefault();if(!drag||drag===el)return;const r=el.getBoundingClientRect();el.parentNode.insertBefore(drag,e.clientY>r.top+r.height/2?el.nextSibling:el)})})}
function commitOrder(){const ids=$$('.admin-item').map(x=>x.dataset.id);const visible=new Set(ids);const ordered=state.courses.filter(c=>visible.has(c.id)).sort((a,b)=>ids.indexOf(a.id)-ids.indexOf(b.id));let pos=0;state.courses=state.courses.map(c=>visible.has(c.id)?ordered[pos++]:c);save();render();renderPlaylistButtons();renderAdmin()}
function clearEditor(){$('#editor').classList.add('hidden');editing=null}
function editCourse(id){const c=state.courses.find(x=>x.id===id);if(!c)return;editing=id;$('#editorTitle').textContent='Editar curso';fill(c);$('#editor').classList.remove('hidden');$('#editor').scrollIntoView({behavior:'smooth',block:'nearest'})}
function fill(c){$('#fTitle').value=c.title||'';$('#fCategory').value=c.category||'Excel';$('#fLevel').value=c.level||'Práctico';$('#fDuration').value=c.duration||'';$('#fDescription').value=c.description||'';$('#fTopics').value=(c.topics||[]).join('\n');if($('#fType'))$('#fType').value=isPresentation(c)?'presentation':'video';$('#fVideo').value=c.video||'curso-01-excel-isr.mp4';$('#fAccess').value=c.access||'normal'}
$('#newCourse').onclick=()=>{editing=null;$('#editorTitle').textContent='Nuevo curso';fill({title:'',category:'Excel',level:'Principiante',duration:'',description:'',topics:[],video:'curso-01-excel-isr.mp4',access:'normal'});$('#editor').classList.remove('hidden');$('#editor').scrollIntoView({behavior:'smooth',block:'nearest'})};$('#cancelEdit').onclick=clearEditor;$('#cancelEdit2').onclick=clearEditor;
$('#saveCourse').onclick=()=>{const c={id:editing||'c-'+Date.now(),title:$('#fTitle').value.trim(),category:$('#fCategory').value,level:$('#fLevel').value.trim()||'Práctico',duration:$('#fDuration').value.trim()||'A tu ritmo',description:$('#fDescription').value.trim(),topics:$('#fTopics').value.split('\n').map(x=>x.trim()).filter(Boolean),video:$('#fVideo').value,access:$('#fAccess').value,type:$('#fType')?.value||'video',presentation:$('#fType')?.value==='presentation'?(editing&&state.courses.find(x=>x.id===editing)?.presentation||'catalogo-cuentas'):undefined};if(!c.title||!c.description){alert('Completa el nombre y la descripción.');return}if(editing){const i=state.courses.findIndex(x=>x.id===editing);state.courses[i]=c}else state.courses.push(c);save();render();renderPlaylistButtons();renderAdmin();clearEditor();alert(c.access==='pro'?'Curso PRO guardado correctamente.':'Curso guardado correctamente.')};
function deleteCourse(id){if(state.courses.length===1){alert('Debe existir al menos un curso.');return}if(confirm('¿Eliminar este curso?')){state.courses=state.courses.filter(c=>c.id!==id);save();render();renderPlaylistButtons();renderAdmin()}}
$('#saveIndex').onclick=()=>{save();const payload={version:3,updatedAt:new Date().toISOString(),brand:"Antonio's Solutions",courses:state.courses};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='antonios-solutions-index.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),500);alert('Index guardado y descargado correctamente.')};

const GRADUATE_PLAYLIST_ORDER=['c9','c5','c6','c10','c7','c2','c4','c11','c3','c8','c1','excel-tip-01','excel-tip-02','excel-tip-03','excel-tip-04','excel-tip-05','excel-tip-06','excel-tip-07','excel-tip-08','excel-tip-09','pro1','pro2'];
const PLAYLIST_CATEGORIES=[
  {key:'Ruta del egresado',label:'Ruta del egresado',icon:'🎓',tone:'graduate'},
  {key:'Excel',label:'Excel',icon:'▦',tone:'excel'},
  {key:'Word',label:'Word',icon:'W',tone:'word'},
  {key:'Contabilidad',label:'Contabilidad',icon:'▤',tone:'accounting'},
  {key:'Impuestos',label:'Impuestos',icon:'%',tone:'tax'},
  {key:'Trucos de Excel',label:'Trucos de Excel',icon:'⚡',tone:'tricks'},
  {key:'Leyes y derechos',label:'Leyes y derechos',icon:'⚖',tone:'laws'},
  {key:'PRO',label:'Cursos PRO',icon:'🔒',tone:'pro'}
];
let playlistCourses=[], playlistIndex=0, currentPlaylistKey='';
function playlistListFor(key){if(key==='Ruta del egresado'){const byId=new Map(state.courses.map(c=>[c.id,c]));const ordered=GRADUATE_PLAYLIST_ORDER.map(id=>byId.get(id)).filter(Boolean);const used=new Set(ordered.map(c=>c.id));return ordered.concat(state.courses.filter(c=>!used.has(c.id)));}if(key==='PRO'){const byId=new Map(state.courses.map(c=>[c.id,c]));const ordered=PRO_PLAYLIST_ORDER.map(id=>byId.get(id)).filter(Boolean);const used=new Set(ordered.map(c=>c.id));return ordered.concat(state.courses.filter(c=>isPro(c)&&!used.has(c.id)));}return state.courses.filter(c=>c.category===key)}
function renderPlaylistButtons(){
 const box=$('#playlistButtons'); if(!box)return;
 box.innerHTML=PLAYLIST_CATEGORIES.map(cat=>{const count=playlistListFor(cat.key).length;return `<button class="playlist-category ${cat.tone}" data-playlist="${esc(cat.key)}"><span class="playlist-icon">${cat.icon}</span><span><b>${esc(cat.label)}</b><small>${count} ${count===1?'curso':'cursos'}</small></span><strong>▶</strong></button>`}).join('');
 $$('[data-playlist]').forEach(b=>b.onclick=()=>openPlaylist(b.dataset.playlist));
}
function openPlaylist(key){
 currentPlaylistKey=key;
 playlistCourses=playlistListFor(key);
 $('#playlistTitle').textContent=key==='PRO'?'Cursos PRO':key==='Ruta del egresado'?'🎓 Ruta del egresado':key;
 if(!playlistCourses.length){
   $('#playlistMeta').textContent='Aún no hay cursos en esta categoría.';
   $('#playlistItems').innerHTML='<div class="playlist-empty">No hay cursos disponibles en esta categoría todavía.</div>';
   $('#playlistCounter').textContent='0 / 0';
   const v=$('#playlistVideo');v.pause();v.classList.remove('hidden');v.removeAttribute('src');v.load();const pp=$('#playlistPresentation');if(pp){pp.classList.add('hidden');pp.innerHTML=''}
   $('#playlistNowTitle').textContent='Sin clases disponibles';$('#playlistNowDescription').textContent='';
 }else{playlistIndex=0;renderPlaylistItems();selectPlaylistCourse(0)}
 $('#playlistModal').classList.add('show');
}
function renderPlaylistItems(){
 $('#playlistMeta').textContent=currentPlaylistKey==='Ruta del egresado'?`${playlistCourses.length} ${playlistCourses.length===1?'curso':'cursos'} · secuencia recomendada para un egresado`:currentPlaylistKey==='PRO'?`${playlistCourses.length} ${playlistCourses.length===1?'curso':'cursos'} · contenido práctico y avanzado`:`${playlistCourses.length} ${playlistCourses.length===1?'curso':'cursos'} · orden del catálogo`;
 $('#playlistItems').innerHTML=playlistCourses.map((c,i)=>`<button class="playlist-item ${i===playlistIndex?'active':''} ${isPro(c)?'locked':''}" data-play-index="${i}"><span class="playlist-number">${String(i+1).padStart(2,'0')}</span><span class="playlist-item-copy"><b>${esc(c.title)}</b><small>${isPro(c)?'🔒 PRO':'▶ '+esc(c.duration)}</small></span><span class="playlist-item-mark">${isPro(c)?'🔒':'▶'}</span></button>`).join('');
 $$('[data-play-index]').forEach(b=>b.onclick=()=>selectPlaylistCourse(Number(b.dataset.playIndex)));
}
async function selectPlaylistCourse(index){
 if(index<0||index>=playlistCourses.length)return;
 playlistIndex=index;const c=playlistCourses[index];
 if(isPro(c)){
  if(!proUnlocked || !(await hasServerSession('pro'))){proUnlocked=false;openProLogin(c.id);return;}
 }
 $('#playlistNowTitle').textContent=c.title;$('#playlistNowDescription').textContent=c.description;
 $('#playlistAccess').className=isPro(c)?'pro-badge large':'normal-badge large';$('#playlistAccess').textContent=isPro(c)?'🔓 PRO DESBLOQUEADO':(isExcelTip(c)?'⚡ TRUCO DE EXCEL':'CURSO NORMAL');
 const pv=$('#playlistPresentation'); if(pv){pv.classList.toggle('hidden',!isPresentation(c));pv.innerHTML=isPresentation(c)?presentationHtml(c,true):'';if(isPresentation(c))initPresentation(pv.querySelector('.presentation'));} const v=$('#playlistVideo');v.pause();v.classList.toggle('hidden',isPresentation(c));if(!isPresentation(c)){v.src='src/videos/'+esc(c.video||'');v.load();}else{v.removeAttribute('src');v.load();}
 $('#playlistCounter').textContent=`${index+1} / ${playlistCourses.length}`;
 $$('[data-play-index]').forEach((b,i)=>b.classList.toggle('active',i===index));
 const active=$(`[data-play-index="${index}"]`);if(active)active.scrollIntoView({block:'nearest',behavior:'smooth'});
}
$('#playlistPrev').onclick=()=>{if(playlistIndex>0)selectPlaylistCourse(playlistIndex-1)};
$('#playlistNext').onclick=()=>{if(playlistIndex<playlistCourses.length-1)selectPlaylistCourse(playlistIndex+1)};
$('#playlistClose').onclick=()=>{const v=$('#playlistVideo');v.pause();$('#playlistModal').classList.remove('show')};
$('#playlistModal').addEventListener('click',e=>{if(e.target.id==='playlistModal')$('#playlistClose').click()});
$('#playlistVideo').addEventListener('ended',()=>{if(playlistIndex<playlistCourses.length-1)selectPlaylistCourse(playlistIndex+1)});

function setupShare(){const url=location.href.split('#')[0],qr=$('#qrImage'),hint=$('#shareHint');if(qr){qr.src='https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=12&data='+encodeURIComponent(url);qr.onerror=()=>{if(hint)hint.textContent='No se pudo cargar el QR ahora. Copia el enlace para compartir la academia.'}}const share=$('#shareWeb'),copy=$('#copyWeb');if(share)share.onclick=async()=>{if(navigator.share){try{await navigator.share({title:"Antonio's Solutions · Academia Contable",text:'Mira esta academia de cursos de contabilidad.',url})}catch(e){}}else{await copyText(url);if(hint)hint.textContent='Enlace copiado. Ahora puedes compartirlo.'}};if(copy)copy.onclick=async()=>{await copyText(url);if(hint)hint.textContent='Enlace copiado al portapapeles.'}}
async function copyText(t){try{await navigator.clipboard.writeText(t)}catch(e){const ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove()}}
function logoAnimation(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});const wrap=$('#logoFx'),particles=$('#fxParticles');if(!wrap||!particles)return;particles.innerHTML='';const symbols=['$','IVA','Σ','DR','CR','=','+','−','A=P+C','▦','45','%','∑','EXCEL'];symbols.forEach((s,i)=>{const p=document.createElement('span');p.className='fx-p';p.textContent=s;p.style.setProperty('--i',i);p.style.setProperty('--x',(Math.random()*82+9)+'%');p.style.setProperty('--rot',(Math.random()*80-40)+'deg');p.style.setProperty('--delay',(Math.random()*.22)+'s');particles.appendChild(p)});wrap.classList.remove('play');void wrap.offsetWidth;wrap.classList.add('play');setTimeout(()=>wrap.classList.remove('play'),2200)}
setupShare();renderPlaylistButtons();const brand=$('.brand');if(brand)brand.addEventListener('click',logoAnimation);render();
