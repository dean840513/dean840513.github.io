window.onload = function (){
	let deferredPrompt;
	const install = document.querySelector('#install');
	var url = document.location.href;

	window.addEventListener('beforeinstallprompt', (e) => {
	  // Prevent Chrome 67 and earlier from automatically showing the prompt
	  e.preventDefault();
	  // Stash the event so it can be triggered later.
	  deferredPrompt = e;
	  // Update UI to notify the user they can add to home screen
	  $("pre").hide();
	  //install.style.display = 'block';
	  $("#install").fadeIn(1000);

	  install.addEventListener('click', (e) => {
		// hide our user interface that shows our A2HS button
		//install.style.display = 'none';
		// Show the prompt
		deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
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
			document.getElementById("pre").style.display = 'none';
			document.getElementById("invalid").style.display = 'block';
		}
	});
	
	document.getElementById('openapp').href = GetUrlPara(url);
	function GetUrlPara(url) {
		var arrUrl = url.split("?");

		var para = arrUrl[1];
		return para;
	};
}