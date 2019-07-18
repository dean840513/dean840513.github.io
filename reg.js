window.onload = function (){
	document.getElementById("main").style.display = 'none';
	navigator.serviceWorker.getRegistrations().then(registrations => {
		console.log (registrations);
		if (typeof(registrations[0]) == "undefined") {
			// CODELAB: Register service worker.
			if ('serviceWorker' in navigator) {
			  window.addEventListener('load', () => {
				navigator.serviceWorker.register('./sw.js').then((reg) => {
					console.log('Service worker registered.', reg);
					SetTime(); 
				});
			  });
			};		
		} else {
			document.getElementById("main").style.display = 'block';
			document.getElementById("loading").style.display = 'none';
		};
	});
	//SetTime(); 
};

function SetTime(){
	var pg = document.getElementById("pg");
	var i = 0;
	var timer = setInterval(function () {
		i ++
		pg.value = i;
		if (i == 100) {
			clearInterval(timer);
			document.getElementById("main").style.display = 'block';
			document.getElementById("loading").style.display = 'none';
		};
	}, 100);
};