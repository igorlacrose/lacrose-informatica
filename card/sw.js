// Retira o cache da versão anterior sem afetar outras páginas do domínio.
const prefix = 'lacrose-card:' + self.registration.scope + ':';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil((async () => {
  const keys = await caches.keys();
  await Promise.all(keys.filter(key => key.startsWith(prefix)).map(key => caches.delete(key)));
  await self.clients.claim();
  await self.registration.unregister();
})()));
