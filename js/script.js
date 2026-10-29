// Configure aqui o WhatsApp oficial da Consultec.
// Use somente números: 55 + DDD + número.
const WHATSAPP_NUMBER = "SEU_NUMERO_AQUI";
const message = "Olá! Gostaria de conhecer as soluções de backup e armazenamento em nuvem da Consultec Tecnologia.";

document.querySelectorAll("[data-whatsapp]").forEach(link=>link.addEventListener("click",e=>{e.preventDefault();if(WHATSAPP_NUMBER==="SEU_NUMERO_AQUI"){alert("Configure o número oficial do WhatsApp no arquivo js/script.js.");return}window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer")}));
const toggle=document.querySelector(".menu-toggle"), menu=document.querySelector(".menu");toggle?.addEventListener("click",()=>menu.classList.toggle("open"));document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
