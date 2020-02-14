window.onload = function(){
	// CODELAB: Register service worker.
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('../sw.js').then((reg) => {
			console.log('Service worker registered.', reg);
		});
	};
};

window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
});