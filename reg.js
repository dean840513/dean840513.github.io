window.onload = function (){
	navigator.serviceWorker.getRegistrations().then(registrations => {
		if (typeof(registrations[0]) == "undefined" || localStorage.getItem("installed") != "Yes") {
			navigator.serviceWorker.register('./sw.js').then((reg) => {
				console.log('Service worker registered.', reg);
				SetTime(); 
			});
		} else {
			$("#pre").hide();
			$("#main").fadeIn(1000);
		};	
	});
	//  SetTime(); 
	// $("#main").fadeIn(1000);

	// window.addEventListener('beforeinstallprompt', (e) => {
		// alert ('beforeinstallprompt');
	// });
	console.log (localStorage.getItem("installed"));

};

function SetTime(){
	var i = 0;
	$("#pre").hide();
	$("#loading").fadeIn(1000);
	var timer = setInterval(function () {
		i ++;
		$("#pg").val(i);
		if (i == 100) {
			clearInterval(timer);
			$("#loading").hide();
			$("#main").fadeIn(1000);
			localStorage.setItem("installed", "Yes");
		};
	}, 100);
};