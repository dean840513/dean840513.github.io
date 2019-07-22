window.onload = function(){
	// CODELAB: Register service worker.
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('../sw.js').then((reg) => {
			console.log('Service worker registered.', reg);
			document.getElementById("pre").innerHTML = "安装中。。。请稍候。";
		});
	};
};