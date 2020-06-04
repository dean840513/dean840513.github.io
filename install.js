if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('sw.js').then(function (reg) {
		console.log('Service worker registered.', reg);
	});
};
let deferredInstallPrompt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
function saveBeforeInstallPromptEvent(evt) {
	deferredInstallPrompt = evt;
	installButton.removeAttribute('hidden');
}
function installPWA(evt) {
	deferredInstallPrompt.prompt();
	evt.srcElement.setAttribute('hidden', true);
	deferredInstallPrompt.userChoice
		.then((choice) => {
		  deferredInstallPrompt = null;
		});

}
setTimeout (function(){
	installButton.innerText = "安装到任务栏";
}, 20000)