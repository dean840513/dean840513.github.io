if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('../sw.js').then(function (reg) {
		console.log('Service worker registered.', reg);
	});
};
var url = document.getElementById("aa").attributes["href"].value;
let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
function saveBeforeInstallPromptEvent(evt) {
	installButton.innerText = "安装到任务栏";
	deferredInstallPrompt = evt;
	installButton.removeAttribute('hidden');
}
function installPWA(evt) {
	deferredInstallPrompt.prompt();
	evt.srcElement.setAttribute('hidden', true);
	deferredInstallPrompt.userChoice
		.then((choice) => {
		  if (choice.outcome === 'accepted') 
            document.location.href = url;
		  deferredInstallPrompt = null;
		});

}
window.addEventListener('appinstalled', logAppInstalled);
function logAppInstalled(evt) {
    document.location.href = url;
}
setTimeout (function(){
	installButton.innerText = "安装到任务栏";
}, 20000)