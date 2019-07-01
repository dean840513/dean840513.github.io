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
	deferredInstallPrompt = evt;
	document.getElementById('pg').value = 100;
	document.getElementById('aa').innerHTML = '<a href="#" onclick="installPWA()">点击安装</a>';
	//document.getElementById("aa").click();
	installPWA();
	evt.preventDefault();
    return false;
});

function installPWA(evt) {
	console.log ("installPWA");
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
			if(document.getElementById('pg').value!=100) {
				document.getElementById('pg').value++;
			}
			else {
				console.log ("showInstallButton");
				clearInterval(timer);
				if (document.getElementById('aa').innerHTML != "已安装") document.getElementById('aa').innerHTML = '<a href="#" onclick="installPWA()">点击安装</a>';
				
			};
		},110);	
	};
};


function showInstallButton() {
	clearInterval(timer);
	console.log ("showInstallButton");
	if (document.getElementById('aa').innerHTML != "已安装") document.getElementById('aa').innerHTML = '<a href="#">点击安装</a>';
	
};