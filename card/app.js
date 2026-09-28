'use strict';
const whatsapp = 'https://wa.me/5573981097097?text=' + encodeURIComponent('Olá Igor! Vi seu cartão digital e gostaria de conversar sobre meu projeto.');
document.querySelectorAll('[data-whatsapp]').forEach(link => { link.href = whatsapp; });
const toast = document.querySelector('#toast');
let toastTimer;
function notify(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
}
const qrDialog = document.querySelector('#qr-dialog');
const shareDialog = document.querySelector('#share-dialog');
const shareUrl = document.querySelector('#share-url');
const pageUrl = location.protocol === 'file:' ? 'https://lacrose-informatica.com.br/card/' : location.href.split('#')[0];
document.querySelector('#show-qr').addEventListener('click', () => qrDialog.showModal());
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }});
});
async function copyLink() {
  if (!navigator.clipboard || !window.isSecureContext) return false;
  try { await navigator.clipboard.writeText(pageUrl); notify('Link do cartão copiado!'); return true; }
  catch { return false; }
}
document.querySelector('#share').addEventListener('click', async () => {
  if (navigator.share) {
    try { await navigator.share({ title: 'Igor Lacrose | Desenvolvimento & Tecnologia', text: 'Sistemas sob medida e páginas web para o seu negócio.', url: pageUrl }); return; }
    catch (error) { if (error.name === 'AbortError') return; }
  }
  if (await copyLink()) return;
  shareUrl.value = pageUrl;
  shareDialog.showModal();
  shareUrl.select();
});
document.querySelector('#copy-url').addEventListener('click', async () => {
  if (await copyLink()) { shareDialog.close(); return; }
  shareUrl.focus(); shareUrl.select();
  notify('Selecione e copie o endereço do cartão.');
});
