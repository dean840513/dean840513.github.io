window.onload = function (){
	//document.getElementById("main").style.display = 'none';
	// navigator.serviceWorker.getRegistrations().then(registrations => {
		// console.log (registrations);
		// if (typeof(registrations[0]) == "undefined") {
			//// CODELAB: Register service worker.
			// if ('serviceWorker' in navigator) {
			  // window.addEventListener('load', () => {
				// navigator.serviceWorker.register('./sw.js').then((reg) => {
					// console.log('Service worker registered.', reg);
					// SetTime(); 
				// });
			  // });
			// };		
		// } else {
			// document.getElementById("main").style.display = 'block';
			// document.getElementById("loading").style.display = 'none';
		// };
	// });
	navigator.serviceWorker.getRegistrations().then(registrations => {
		if (typeof(registrations[0]) == "undefined") {
			navigator.serviceWorker.register('./sw.js').then((reg) => {
				console.log('Service worker registered.', reg);
				SetTime(); 
			});
		} else {
			$("#main").fadeIn(1000);
		};	
	});
	//SetTime(); 
	//$("#main").fadeIn(1000);
};

function SetTime(){
	var i = 0;
	$("#loading").fadeIn(1000);
	var timer = setInterval(function () {
		i ++
		$("#pg").val(i);
		if (i == 100) {
			clearInterval(timer);
			$("#loading").hide();
			$("#main").fadeIn(1000);
		};
	}, 100);
};