// Auto-destruction et contournement pour éviter le blocage de Firebase
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName); // Supprime tous les anciens caches bloquants
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Transmet toutes les requêtes (surtout Firebase) directement vers Internet sans bloquer
  event.respondWith(fetch(event.request));
});
