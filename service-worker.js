
const CACHE_NAME = 'mural-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/noticia.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/whatsapp-icon.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
