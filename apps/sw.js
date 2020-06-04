self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('app-v1')
            .then(cache => {
                console.log('open cache')
                return cache.addAll([
                    'go.html'
                ])
            })
    )
})


self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            if (res) {
                return res
            } 
		return fetch(e.request);
        })
	)
})	