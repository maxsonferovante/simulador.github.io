var CACHE_NAME = "SimuladorACT-v1";
var urlsToCache = [
  'index.html',
  
  'scripts/main.js',
  'scripts/jquery.min.js',
  'scripts/simulador.js',
  
  'images/icon/icon-.ico'
];

self.addEventListener('install', function(event) {
  // perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

//

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});