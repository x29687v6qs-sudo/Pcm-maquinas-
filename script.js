(() => {
  const responsiveFix=document.createElement("link");
  responsiveFix.rel="stylesheet";
  responsiveFix.href="responsive-fix.css";
  document.head.appendChild(responsiveFix);

  const WHATSAPP_NUMBER = "5511985881264";
  const products = [
    {name:"Batedeira Profissional RHINO BATI-20 110V",image:"https://i.ibb.co/M4Zn7Yq/IMG-4125.webp",desc:"Equipamento profissional robusto para produção em cozinhas comerciais, confeitarias e padarias."},
    {name:"Cervejeira Imbera CCV355 Porta de Vidro (522 L)",image:"https://i.ibb.co/jkbLpN6M/IMG-4119.webp",desc:"Refrigeração eficiente e econômica, com excelente exposição para bebidas."},
    {name:"Mesa Inox Industrial com Prateleira Inferior",image:"https://i.ibb.co/1tMKFqmS/IMG-4126.webp",desc:"Diversos tamanhos e alta resistência para rotina profissional."},
    {name:"Fogão Industrial 4 Bocas 30x30 – Inox 430",image:"https://i.ibb.co/0pSnCGBm/IMG-4116.webp",desc:"Alto desempenho, construção robusta e praticidade para sua cozinha."},
    {name:"Refrigerador Expositor Metalfrio VBM3 All Black – Porta Dupla",image:"https://i.ibb.co/kgct48vr/IMG-4121.webp",desc:"Grande capacidade, iluminação LED e apresentação profissional."},
    {name:"Forno Convector Venâncio Smart Basic",image:"https://i.ibb.co/G4kRYcrh/IMG-4118.webp",desc:"Circulação de ar forçada para assamento uniforme em cozinhas profissionais."},
    {name:"Liquidificador Industrial Skymsen LB25 (25 L)",image:"https://i.ibb.co/cS1xh0v8/IMG-4124.webp",desc:"Alta capacidade e desempenho para grandes volumes."},
    {name:"Estufa Vidro Reto Dupla – 12 Bandejas",image:"https://i.ibb.co/5fXdPKP/IMG-4114.webp",desc:"Exposição aquecida com excelente visualização dos produtos."}
  ];
  const track=document.getElementById("productsTrack"), modal=document.getElementById("productModal"), modalImg=document.getElementById("modalImg"), modalTitle=document.getElementById("modalTitle"), modalDesc=document.getElementById("modalDesc"), modalWpp=document.getElementById("modalWpp");
  const makeWppLink=n=>`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o produto ${n}.`)}`;
  function closeModal(){if(!modal)return;modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
  function openModal(p){modalImg.src=p.image;modalImg.alt=p.name;modalTitle.textContent=p.name;modalDesc.textContent=p.desc;modalWpp.href=makeWppLink(p.name);modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
  products.forEach(p=>{const c=document.createElement("article");c.className="product-card";c.innerHTML=`<img class="product-img" src="${p.image}" alt="${p.name}" loading="lazy"><div class="product-info"><p class="product-name">${p.name}</p><p class="product-desc">${p.desc}</p><span class="product-link">Ver detalhes →</span></div>`;c.onclick=()=>openModal(p);track?.appendChild(c)});
  document.getElementById("leftBtn")?.addEventListener("click",()=>track.scrollBy({left:-590,behavior:"smooth"}));document.getElementById("rightBtn")?.addEventListener("click",()=>track.scrollBy({left:590,behavior:"smooth"}));modal?.addEventListener("click",e=>{if(e.target?.dataset?.close==="true")closeModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
  const menu=document.getElementById("nav-menu"),toggle=document.querySelector(".menu-toggle");toggle?.addEventListener("click",()=>menu.classList.toggle("open"));
})();