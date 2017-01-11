var globalBool = false;

window.onload = () => {

	//Load page
	// var preLoad = document.getElementById('preload');
	// var preLoadC = document.getElementById('preload').getElementsByTagName('div')[1];
	// preLoad.innerHTML = '<div>Please wait...</div><div></div><div></div>';
	// preLoadC.classList = 'anim';

	//Load images
	for(i = 1; i < 20; i++) {
		new Image().src = './img/jpgs/' + i + '.jpg';
	}
	new Image().src = './img/bg_bottom.jpg';
	new Image().src = './img/bg_middle.png';
	new Image().src = './img/bg_top.png';
	new Image().src = './img/imac.png';
	new Image().src = './img/port1.jpg';
	new Image().src = './img/port2.jpg';
	new Image().src = './img/port3.jpg';
	new Image().src = './img/port4.jpg';
	new Image().src = './img/profilePic.jpg';


	//Boolean to turn off load page
	setTimeout(function() {
		return globalBool = true;
	}, 10);

};

//Update the page
// setTimeout(function() {
// 	if (globalBool == true) {
// 		var preLoad2 = document.getElementById('preload');
// 		preLoad2.style.display = 'none';
// 	}
// }, 1000);