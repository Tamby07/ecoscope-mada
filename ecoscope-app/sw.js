// ============ SERVICE WORKER — EcoScope App ============
// Stratégie : cache-first pour l'app shell + les librairies externes,
// pour permettre la saisie de fiches et l'usage de la carte hors-ligne
// (les tuiles de fond de carte non encore visitées nécessitent toujours une connexion).

const CACHE_NAME = 'ecoscope-app-v3';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './species-data.js',
  './icon-192.png',
  './icon-192-maskable.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './apple-touch-icon.png',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Roboto:wght@400;500;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.css',
  'https://unpkg.com/leaflet-draw@1.0.4/dist/leaflet.draw.js',
  'https://unpkg.com/@turf/turf@6/turf.min.js'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return Promise.all(
        ASSETS_TO_CACHE.map(function (url) {
          return cache.add(url).catch(function (err) {
            console.warn('Échec de mise en cache :', url, err);
          });
        })
      );
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) { return caches.delete(key); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (event) {
  // Ne pas intercepter les requêtes vers les tuiles de carte (trop nombreuses/variables pour un cache simple)
  if (event.request.url.indexOf('tile.openstreetmap.org') !== -1) {
    return;
  }

  var url = event.request.url;
  var isAppShell = event.request.mode === 'navigate' ||
    url.indexOf('index.html') !== -1 ||
    url.indexOf('manifest.json') !== -1 ||
    url.indexOf('species-data.js') !== -1;

  if (isAppShell) {
    // RÉSEAU D'ABORD : on veut toujours la dernière version de l'app quand la connexion est disponible.
    // Le cache ne sert que de secours si l'utilisateur est hors-ligne.
    event.respondWith(
      fetch(event.request).then(function (networkResponse) {
        var clone = networkResponse.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, clone); });
        return networkResponse;
      }).catch(function () {
        return caches.match(event.request);
      })
    );
    return;
  }

  // CACHE D'ABORD pour tout le reste (librairies externes, icônes, polices) : elles changent rarement,
  // donc autant les servir instantanément depuis le cache et les rafraîchir en arrière-plan.
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(function (networkResponse) {
        if (networkResponse && networkResponse.status === 200) {
          var responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(function () {
        // Hors-ligne et pas en cache : on ne peut rien faire de plus pour cette ressource
        return new Response('', { status: 408, statusText: 'Hors-ligne et non mis en cache' });
      });
    })
  );
});
