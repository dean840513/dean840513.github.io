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
            } else {
                // 如果没有缓存，用fetch方法从网络上获取资源
                fetch(url).then(res => {
                    if (res) {
                        //对于新请求的资源缓存到cachestorage中
                    } else {
                        //提示
                    }
                })
            }
        })
    )
})