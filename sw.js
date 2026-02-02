const CACHE_NAME = 'byu-pathway-v2'; // Incremented version to force refresh
const urlsToCache = [
  '/',
  '/index.html',
  '/registration.html',
  '/post-registration.html',
  '/jobs.html',
  '/how-to.html',
  '/tutorials-data.js',
  '/main.js',
  '/responsive.css',  // Changed from 'styles.css' to 'responsive.css'
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js',
  'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js',
  'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version if available, otherwise fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});