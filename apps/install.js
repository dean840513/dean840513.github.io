window.onload = function(){
	// CODELAB: Register service worker.
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('../sw.js').then((reg) => {
			console.log('Service worker registered.', reg);
		});
	};
	window.addEventListener('appinstalled', function(){
		alert ("应用已安装！")
	});
};