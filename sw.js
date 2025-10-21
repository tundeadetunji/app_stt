self.addEventListener('install', event => {
    self.skipWaiting(); // take control quickly
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    // Simple network-first fetch; you can expand caching here if needed
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
