//Mobile Detection
var isMobile = false;

	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		isMobile = true;

		var mobilePage = document.createElement('div');

		mobilePage.classList = 'mobilePage';
		mobilePage.innerHTML = 'Mobile page is under construction...<br>Please visit on a desktop.';

		document.body.appendChild(mobilePage);
	}

console.log('Viewport detected: Mobile is ' + isMobile);

//IE Detection :: Executes on conditional comment
	if (ie_lte9 == false) {
		console.log('Compatabile browser detected');
	} else {
		var iePage = document.createElement('div');

		iePage.classList = 'iePage';
		iePage.innerHTML = 'jamesgoatcher.co is incompatible with your browser.<br><br>Please download one of the following fine browsers to experience:<br><br>'+
							'<a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a><br>' + 
							'<a href="https://www.mozilla.org/en-US/firefox/products/" target="_blank">Mozilla Firefox</a>';

		document.body.appendChild(iePage);
		console.log('MS IE browser detected');
	}