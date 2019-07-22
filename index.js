window.onload = function(){
	$("#pre").hide();
	$("#main").fadeIn(1000);
	
	$("a").click(function(){
		var r = confirm("是否安装应用？" + this.name);
		if (r == false) 
			return false;	
	});
	
	// CODELAB: Register service worker.
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('./app/sw.js').then((reg) => {
			console.log('Service worker registered.', reg);
		});
	};
};