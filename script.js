(() => {
 const W='5511985881264';
 const products=[
 {name:'Batedeira Profissional RHINO BATI-20 110V',image:'https://i.ibb.co/M4Zn7Yq/IMG-4125.webp',desc:'Equipamento profissional robusto para produção em cozinhas comerciais, confeitarias e padarias.',category:'Preparação de Alimentos'},
 {name:'Cervejeira Imbera CCV355 Porta de Vidro (522 L)',image:'https://i.ibb.co/jkbLpN6M/IMG-4119.webp',desc:'Refrigeração eficiente e econômica, com excelente exposição para bebidas.',category:'Refrigeração'},
 {name:'Mesa Inox Industrial com Prateleira Inferior',image:'https://i.ibb.co/1tMKFqmS/IMG-4126.webp',desc:'Alta resistência e praticidade para a rotina profissional.',category:'Aço Inox'},
 {name:'Fogão Industrial 4 Bocas 30x30 – Inox 430',image:'https://i.ibb.co/0pSnCGBm/IMG-4116.webp',desc:'Alto desempenho e construção robusta para cozinhas profissionais.',category:'Cocção'},
 {name:'Refrigerador Expositor Metalfrio VBM3 All Black – Porta Dupla',image:'https://i.ibb.co/kgct48vr/IMG-4121.webp',desc:'Grande capacidade, iluminação LED e apresentação profissional.',category:'Refrigeração'},
 {name:'Forno Convector Venâncio Smart Basic',image:'https://i.ibb.co/G4kRYcrh/IMG-4118.webp',desc:'Circulação de ar forçada para assamento uniforme.',category:'Cocção'},
 {name:'Liquidificador Industrial Skymsen LB25 (25 L)',image:'https://i.ibb.co/cS1xh0v8/IMG-4124.webp',desc:'Alta capacidade e desempenho para grandes volumes.',category:'Preparação de Alimentos'},
 {name:'Estufa Vidro Reto Dupla – 12 Bandejas',image:'https://i.ibb.co/5fXdPKP/IMG-4114.webp',desc:'Exposição aquecida com excelente visualização dos produtos.',category:'Linha Hotelaria'}
 ];
 const icons={
  mixer:'<svg viewBox="0 0 48 48"><path d="M14 9h20v8H14zM18 17v5h12v-5M24 22v16M18 38h12M15 27h18"/><path d="M20 27c0 7 1 11 4 11s4-4 4-11"/></svg>',
  grinder:'<svg viewBox="0 0 48 48"><path d="M10 11h19v9H10zM15 20v18M29 15h5a5 5 0 0 1 5 5v8H25M25 24v8M21 32h8M12 38h17"/><circle cx="35" cy="28" r="5"/></svg>',
  oven:'<svg viewBox="0 0 48 48"><rect x="9" y="7" width="30" height="34" rx="2"/><path d="M9 16h30M15 11h2m6 0h2m6 0h2M15 22h18v13H15z"/></svg>',
  fridge:'<svg viewBox="0 0 48 48"><rect x="14" y="5" width="20" height="38" rx="2"/><path d="M14 21h20M29 11v6M29 27v6"/></svg>',
  slicer:'<svg viewBox="0 0 48 48"><path d="M11 36h27M14 32l17-20M28 11a10 10 0 1 1-8 18M14 32h16M34 27l4 9"/><circle cx="24" cy="20" r="7"/></svg>',
  grill:'<svg viewBox="0 0 48 48"><path d="M9 18h30v17H9zM12 13h24l3 5H9zM14 35v5M34 35v5M14 24h20M14 29h20"/></svg>',
  service:'<svg viewBox="0 0 48 48"><path d="M15 9l7 7-6 6-7-7M33 39l-9-9M33 9a8 8 0 0 0-8 10L10 34a3 3 0 0 0 4 4l15-15a8 8 0 0 0 10-8l-5 5-6-6 5-5Z"/></svg>',
  more:'<svg viewBox="0 0 48 48"><path d="m15 8 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Zm19 15 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z"/></svg>'
 };
 const categoryTypes=['mixer','grinder','oven','fridge','slicer','grill','service'];
 document.querySelectorAll('.equipment-category').forEach((button,i)=>{const el=button.querySelector('.category-icon');if(el)el.innerHTML=icons[categoryTypes[i]]||icons.more;});
 const catalog=document.getElementById('equipmentCatalog'),grid=document.getElementById('equipmentGrid'),expand=document.getElementById('expandProductsBtn'),load=document.getElementById('loadMoreProducts');let filter='Todos',limit=6;
 const link=p=>`https://wa.me/${W}?text=${encodeURIComponent('Olá, gostaria de saber mais sobre o produto '+p.name+'.')}`;
 function render(){if(!grid)return;const list=products.filter(p=>filter==='Todos'||p.category===filter);grid.innerHTML=list.slice(0,limit).map(p=>`<article class="equipment-card"><div class="equipment-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="equipment-info"><span class="equipment-tag">${p.category}</span><h3>${p.name}</h3><p>${p.desc}</p><a href="${link(p)}" target="_blank" rel="noopener">Ver detalhes →</a></div></article>`).join('');if(load)load.hidden=list.length<=limit;}
 function open(category='Todos'){filter=category;limit=6;catalog.hidden=false;requestAnimationFrame(()=>catalog.classList.add('is-open'));document.querySelectorAll('#productFilters button').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));render();catalog.scrollIntoView({behavior:'smooth',block:'start'});}
 expand?.addEventListener('click',()=>open('Todos'));document.querySelectorAll('.equipment-category').forEach(b=>b.addEventListener('click',()=>open(b.dataset.category)));document.querySelectorAll('#productFilters button').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;limit=6;document.querySelectorAll('#productFilters button').forEach(x=>x.classList.toggle('active',x===b));render()}));load?.addEventListener('click',()=>{limit+=6;render()});
 const removeObsoleteFispalPhoto=()=>document.querySelectorAll('.fispal-photo-placeholder').forEach(el=>el.remove());
 removeObsoleteFispalPhoto();
 const fispalLogo=document.querySelector('.fispal-brand-placeholder');
 if(fispalLogo){fispalLogo.classList.remove('placeholder');fispalLogo.innerHTML='<img src="assets/fispal/fispal-logo.png?v=1" alt="Fispal Food Service" loading="lazy" style="display:block;width:100%;height:100%;object-fit:contain;padding:8px">';fispalLogo.style.overflow='hidden';fispalLogo.style.background='#fff';}
 removeObsoleteFispalPhoto();
 const timelineFispal=document.querySelector('.history-timeline .timeline article:nth-child(2)');
 if(timelineFispal){const year=timelineFispal.querySelector('strong'),text=timelineFispal.querySelector('p');if(year)year.textContent='2018 • 2019';if(text)text.textContent='Participações da PCM Máquinas na Fispal Food Service em 2018 e 2019.';}
 const fispalTitle=document.querySelector('.fispal-copy h2');
 const fispalText=document.querySelector('.fispal-copy p');
 if(fispalTitle)fispalTitle.textContent='FISPAL 2018 & 2019';
 if(fispalText)fispalText.textContent='A PCM Máquinas participou da Fispal Food Service em 2018 e 2019, fortalecendo relacionamentos, acompanhando inovações e ampliando sua presença no setor.';
 const clientStat=[...document.querySelectorAll('.about-stat-card')].find(card=>card.textContent.includes('Clientes atendidos'));
 if(clientStat){const value=clientStat.querySelector('strong');if(value)value.textContent='+15 mil';}
 const headerLogo=document.querySelector('.site-header .logo');
 const sizeHeaderLogo=()=>{if(!headerLogo)return;const w=window.innerWidth;headerLogo.style.width=w<=600?'132px':w<=1180?'225px':'270px';headerLogo.style.height='auto';headerLogo.style.maxHeight=w<=600?'64px':'92px';headerLogo.style.objectFit='contain';headerLogo.style.objectPosition='left center';};
 sizeHeaderLogo();window.addEventListener('resize',sizeHeaderLogo,{passive:true});
 const menu=document.getElementById('nav-menu'),toggle=document.querySelector('.menu-toggle');toggle?.addEventListener('click',()=>menu?.classList.toggle('open'));
})();