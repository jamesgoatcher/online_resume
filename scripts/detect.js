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

//IE Detection