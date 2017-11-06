let CACHE_NAME = 'service-worker-class-1';
let urlsToCache = [
	'index.html',
	'/images/tie-fighter.png',
	'/images/turret.png'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache){
			console.log('opened cache!');
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response){
			if(response) return response;
			return fetch(event.request);
		})
	);
});