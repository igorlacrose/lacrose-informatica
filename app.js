'use strict';
const menu=document.getElementById('menu'),links=document.getElementById('links');
function closeMenu(){menu.setAttribute('aria-expanded','false');links.classList.remove('open')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));links.classList.toggle('open',open)});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
document.querySelectorAll('[data-interest]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('interest').value=a.dataset.interest}));
document.getElementById('brief').addEventListener('submit',e=>{e.preventDefault();const interest=document.getElementById('interest').value,detail=document.getElementById('message').value.trim();const message='Olá, Igor! Vim pelo site da Lacrose Informática. Gostaria de conversar sobre: '+interest+'.'+(detail?'\n\n'+detail:'');window.open('https://wa.me/5573981097097?text='+encodeURIComponent(message),'_blank','noopener,noreferrer')});
