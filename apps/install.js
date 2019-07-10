let deferredInstallPrompt = null;
var timer;

// CODELAB: Register service worker.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js')
        .then((reg) => {
        console.log('Service worker registered.', reg);
		showProgress();
        });
  });
}

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', function(evt){
	// CODELAB: Add code to save event & show the install button.
	console.log ("beforeinstallprompt");
	clearInterval(timer);
	deferredInstallPrompt = evt;
	document.getElementById('pg').value = 100;
	document.getElementById('aa').innerHTML = '点击安装';
	//document.getElementById("aa").click();
	//installPWA();
	evt.preventDefault();
    return false;
});

function installPWA(evt) {
	console.log ("installPWA");
	if (deferredInstallPrompt == null) return false;
	// CODELAB: Add code to save event & show the install button.
	deferredInstallPrompt.prompt();
	// CODELAB: Log user response to prompt.
	deferredInstallPrompt.userChoice.then((choice) => {
		  if (choice.outcome === 'accepted') {
			console.log('User accepted the A2HS prompt', choice);
			document.location.href = url;
		  } else {
			console.log('User dismissed the A2HS prompt', choice);
		  }
		  deferredInstallPrompt = null;
		});
}

function showProgress(){
	if (document.getElementById('aa').innerHTML != "已安装") {
		document.getElementById('aa').innerHTML = "正在检查";
		timer = setInterval(function(e){
			if(document.getElementById('pg').value != 100) {
				if(document.getElementById('pg').value == 99) document.getElementById('pg').value = 0;
				document.getElementById('pg').value ++;
			}
			else {
				console.log ("showInstallButton");
				clearInterval(timer);
				if (document.getElementById('aa').innerHTML != "已安装") document.getElementById('aa').innerHTML = '点击安装';				
			};
		},110);	
	};
};

