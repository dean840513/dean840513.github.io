let deferredInstallPrompt = null;
const installButton = document.getElementById('aa');
var pg = document.getElementById('pg');
var timer;


// CODELAB: Register service worker.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
        .then((reg) => {
          console.log('Service worker registered.', reg);

		  showProgress();

        });
  });
}

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
function saveBeforeInstallPromptEvent(evt) {
	// CODELAB: Add code to save event & show the install button.
	console.log ("beforeinstallprompt");
	deferredInstallPrompt = evt;
	showInstallButton();
}


function installPWA(evt) {
	console.log ("installPWA")
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
	if (installButton.innerHTML != "已安装") {
		installButton.innerHTML = "正在检查";
		timer = setInterval(function(e){
			if(pg.value!=100) {
				pg.value++;
			}
			else {
				showInstallButton();
			};
		},110);	
	};
};


function showInstallButton() {
	clearInterval(timer);
	console.log ("showInstallButton");
	if (installButton.innerHTML != "已安装") installButton.innerHTML = '<a href="#">点击安装</a>';
	pg.value = 100;
};