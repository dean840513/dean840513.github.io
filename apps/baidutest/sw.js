// CODELAB: Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';

// CODELAB: Add list of files to cache here.
// CODELAB: Update cache names any time any of the cached files change.
const FILES_TO_CACHE = [
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // CODELAB: Precache static resources here.

  self.skipWaiting();
  
	// CODELAB: Precache static resources here.
	// evt.waitUntil(
		// caches.open(CACHE_NAME).then((cache) => {
		  // console.log('[ServiceWorker] Pre-caching offline page');
		  // return cache.addAll(FILES_TO_CACHE);
		// })
	// );
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // CODELAB: Remove previous cached data from disk.

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  // console.log('[ServiceWorker] Fetch', evt.request.url);
  // CODELAB: Add fetch event handler here.

});
