// CODELAB: Register service worker.
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('../sw.js').then(function (reg) {
		console.log('Service worker registered.', reg);
	});
};

var url = document.getElementById("aa").attributes["href"].value;

let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

// CODELAB: Add event listener for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
	installButton.innerText = "安装到任务栏";
  // CODELAB: Add code to save event & show the install button.
	deferredInstallPrompt = evt;
	installButton.removeAttribute('hidden');
}

function installPWA(evt) {
  // CODELAB: Add code show install prompt & hide the install button.
	deferredInstallPrompt.prompt();
  // Hide the install button, it can't be called twice.
	evt.srcElement.setAttribute('hidden', true);
  // CODELAB: Log user response to prompt.
	deferredInstallPrompt.userChoice
		.then((choice) => {
		  if (choice.outcome === 'accepted') 
            document.location.href = url;
		  deferredInstallPrompt = null;
		});

}

// CODELAB: Add event listener for appinstalled event
window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt) {
  // CODELAB: Add code to log the event
	//alert ('App was installed.');
    document.location.href = url;
}