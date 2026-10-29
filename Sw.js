// Fichier sw.js optimisé pour ne pas bloquer Firebase
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // On laisse passer toutes les requêtes (notamment Firebase) sans bloquer
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
