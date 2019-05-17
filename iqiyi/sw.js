self.addEventListener('fetch', function(event) {
  // it can be empty if you just want to get rid of that error
  console.log ("fetch");
});


// 监听 service worker 的 install 事件
this.addEventListener('install', function (event) {
    // 如果监听到了 service worker 已经安装成功的话，就会调用 event.waitUntil 回调函数
     event.waitUntil(console.log("install"));
        // 安装成功后操作 CacheStorage 缓存，使用之前需要先通过 caches.open() 打开对应缓存空间。
		
	
});