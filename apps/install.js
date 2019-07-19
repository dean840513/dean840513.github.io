window.onload = function (){
	let deferredPrompt;
	const install = document.querySelector('#install');
	var url = document.location.href;

	window.addEventListener('beforeinstallprompt', (e) => {
	  e.preventDefault();
	  deferredPrompt = e;
	  $("#pre").hide();
	  $("#install").fadeIn(1000);

	  install.addEventListener('click', (e) => {
			deferredPrompt.prompt();
			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === 'accepted') {
				  console.log('User accepted the A2HS prompt');
				} else {
				  console.log('User dismissed the A2HS prompt');
				}
				deferredPrompt = null;
		  });
	  });
	});
	
	navigator.serviceWorker.getRegistrations().then(registrations => {
		if (typeof(registrations[0]) == "undefined") {
			$("#pre").hide();
			$("#invalid").show();
		}
	});
	
	document.getElementById('openapp').href = GetUrlPara(url);
	function GetUrlPara(url) {
		var arrUrl = url.split("?");

		var para = arrUrl[1];
		return para;
	};
}