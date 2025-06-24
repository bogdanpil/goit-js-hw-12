import{a as f,S as h,i}from"./assets/vendor-67BWzQEt.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="50819756-11248eda55a36e78284ebe321",L=o=>{const r={key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(g,{params:r}).then(s=>s.data).catch(s=>{throw new Error("Oops! Something went wrong. Please try again later.")})},l=document.querySelector(".gallery"),p=document.querySelector(".loader"),v=new h(".gallery a",{captionsData:"alt",captionDelay:250}),w=o=>{const r=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:a,comments:d,downloads:m})=>`
    <li class="gallery-item">
    <a href="${n}">
    <img src="${s}" alt="${e}"/>
    </a>
    <div class="info">
    <p class="properties">Likes <span class="value">${t}</span></p>
    <p class="properties">Views <span class="value">${a}</span></p>
    <p class="properties">Comments <span class="value">${d}</span></p>
    <p class="properties">Downloads <span class="value">${m}</span></p>
    </div>

    </li>`).join("");l.insertAdjacentHTML("beforeend",r),v.refresh()},b=()=>{l.innerHTML=""},P=()=>{p.classList.remove("hidden")},S=()=>{p.classList.add("hidden")},u=document.querySelector(".form"),c=u.elements["search-text"];u.addEventListener("submit",o=>{o.preventDefault();const r=c.value.trim();if(!r){i.error({message:"Please enter a search term!",position:"topRight"});return}b(),P(),L(r).then(s=>{if(!s.hits.length){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}w(s.hits)}).catch(s=>{i.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{S(),c.value=""})});
//# sourceMappingURL=index.js.map
