// GLOBAL - functions

var jpgObject = {
	'1': 'Pasadena, CA',
	'2': 'Pasadena, CA',
	'3': 'Bergen, Norway',
	'4': 'Oslo, Norway',
	'5': 'Los Angeles, CA',
	'6': 'Los Angeles, CA',
	'7': 'Morro Bay, CA',
	'8': 'Morro Bay, CA',
	'9': 'Los Angeles, CA',
	'10': 'Los Angeles, CA',
	'11': 'Los Angeles, CA',
	'12': 'Seoraksan, South Korea',
	'13': 'Nara, Japan',
	'14': 'Los Angeles, CA',
	'15': 'Orange County, CA',
	'16': 'Ube, Japan',
	'17': 'Busan, South Korea',
	'18': 'Manzanar, CA',
	'19': 'Los Angeles, CA'
};

//Main and Work move
var moveTopBG = (e) => {
	var x          = parseInt(e.clientX);
	var y          = parseInt(e.clientY);
	var topBG      = document.getElementById('main_bg_top');
	var middleBG   = document.getElementById('main_bg_middle');

	var xSaved  = (x/40) + 35;

	var ySaved  = (y/40) + 30;

	topBG.style.transform    = 'translate3d(-' + xSaved + '%, -' + ySaved + '%, 0)';
	middleBG.style.transform = 'translate3d(-' + ySaved + '%, -' + xSaved + '%, 0)';

	topBG.style.filter       = 'hue-rotate(1440deg)'; 

	// topBG.style.top     = ySaved + '%';
	// topBG.style.left    = xSaved + '%';
	// middleBG.style.left = ySaved + '%';
	// middleBG.style.top  = xSaved + '%';

	// console.log('x: ' + xSaved + ' y: ' + ySaved);

};

var clearMove = () => {
	var topBG      = document.getElementById('main_bg_top');
	var middleBG   = document.getElementById('main_bg_middle');

	topBG.style.transform    = 'translate3d(-50%, -50%, 0)';
	middleBG.style.transform = 'translate3d(-50%, -50%, 0)';

	topBG.style.filter       = 'hue-rotate(1440deg)';
};

//About move
var moveTopBG4 = (e) => {
	var x          = parseInt(e.clientX);
	var y          = parseInt(e.clientY);
	var topBG      = document.getElementById('main_bg_middle4');

	var xSaved  = (x/200) + 50;

	var ySaved  = (y/200) + 50;

	topBG.style.transform    = 'translate3d(-' + xSaved + '%, -' + ySaved + '%, 0)';

	console.log('x: ' + xSaved + ' y: ' + ySaved);
};

var clearMove4 = () => {
	var topBG   = document.getElementById('main_bg_middle4');

	topBG.style.transform    = 'translate3d(-50%, -50%, 0)';

};

// WORK - Functions
var showWork = () => {
	var mainHome  			  = document.getElementById('main_home');
	var mainWork   			  = document.getElementById('main_work');
	var mainLang 			  = document.getElementById('main_lang');
	var mainJpgs   			  = document.getElementById('main_jpgs');
	var mainAbout  			  = document.getElementById('main_about');
			  
	var mainBgT    			  = document.getElementById('main_bg_top');
	var mainBgM    			  = document.getElementById('main_bg_middle');
	var mainBgB 			  = document.querySelector('body');
	var mainBg3               = document.getElementById('main_bg_middle3');
	var mainBg4    			  = document.getElementById('main_bg_middle4');

	if (mainWork.classList == 'anim') {
		mainHome.style.display  = 'block';
		mainWork.classList      = '';
		mainBgM.style.backgroundImage = 'url(./img/bg_middle.png)';
		mainBgB.style.backgroundImage = 'url(./img/bg_bottom.jpg)';
		mainBgB.classList     	= '';
	} else {
		mainHome.style.display  = 'none';
		mainWork.classList      = 'anim';
		mainLang.classList    	= '';
		mainJpgs.classList    	= '';
		mainAbout.classList   	= '';
		mainBg3.classList     	= '';
		mainBg4.classList     	= '';
		mainBgT.style.display 	= 'block';
		mainBgM.style.display 	= 'block';
		mainBgM.style.backgroundImage = 'url(./img/bg_bottom.jpg)';
		mainBgB.style.backgroundImage = 'url(./img/bg_middle.png)';
	}		
};

	// WORK :: Portfolio 1 
	var showPort1 = () => {
		var mainPort1    		   = document.getElementById('main_work_port1');
		var interstitial 		   = document.getElementById('interstitial');
		var portFade     		   = document.getElementsByClassName('port');

		interstitial.style.display = 'block';
		mainPort1.style.display    = 'block';
		
		setTimeout(function() {
			portFade[0].classList += ' portAnim';
		}, 100);
	};

	var hidePort1 = () => {
		var mainPort1              = document.getElementById('main_work_port1');
		var interstitial           = document.getElementById('interstitial');
		var portFade               = document.getElementsByClassName('port');

		interstitial.style.display = 'none';
		portFade[0].classList      = 'port';
		mainPort1.style.display    = 'none';
	};

	// WORK :: Portfolio 2 
	var showPort2 = () => {
		var mainPort1              = document.getElementById('main_work_port2');
		var interstitial           = document.getElementById('interstitial');
		var portFade               = document.getElementsByClassName('port');

		interstitial.style.display = 'block';
		mainPort1.style.display    = 'block';

		setTimeout(function() {
			portFade[1].classList += ' portAnim';
		}, 100);
	};

	var hidePort2 = () => {
		var mainPort1              = document.getElementById('main_work_port2');
		var interstitial           = document.getElementById('interstitial');
		var portFade               = document.getElementsByClassName('port');

		interstitial.style.display = 'none';
		portFade[1].classList      = 'port';
		mainPort1.style.display    = 'none';
	};

	// WORK :: Portfolio 3 
	var showPort3 = () => {
		var mainPort1              = document.getElementById('main_work_port3');
		var interstitial           = document.getElementById('interstitial');
		var portFade               = document.getElementsByClassName('port');

		interstitial.style.display = 'block';
		mainPort1.style.display    = 'block';

		setTimeout(function() {
			portFade[2].classList += ' portAnim';
		}, 100);
	};

	var hidePort3 = () => {
		var mainPort1              = document.getElementById('main_work_port3');
		var interstitial           = document.getElementById('interstitial');
		var portFade               = document.getElementsByClassName('port');

		interstitial.style.display = 'none';
		portFade[2].classList      = 'port';
		mainPort1.style.display    = 'none';
	};

	// WORK :: Portfolio 4 
	var showPort4 = () => {
		var mainPort1              = document.getElementById('main_work_port4');
		var interstitial           = document.getElementById('interstitial');
		var portFade               = document.getElementsByClassName('port');

		interstitial.style.display = 'block';
		mainPort1.style.display    = 'block';

		setTimeout(function() {
			portFade[3].classList += ' portAnim';
		}, 100);
	};

	var hidePort4 = () => {
		var mainPort1              = document.getElementById('main_work_port4');
		var interstitial           = document.getElementById('interstitial');
		var portFade               = document.getElementsByClassName('port');

		interstitial.style.display = 'none';
		portFade[3].classList      = 'port';
		mainPort1.style.display    = 'none';
	};
	
	// WORK :: Portfolio 5 
	var showPort5 = () => {
		var mainPort1              = document.getElementById('main_work_port5');
		var interstitial           = document.getElementById('interstitial');
		var portFade               = document.getElementsByClassName('port');

		interstitial.style.display = 'block';
		mainPort1.style.display    = 'block';

		setTimeout(function() {
			portFade[4].classList += ' portAnim';
		}, 100);
	};

	var hidePort5 = () => {
		var mainPort1              = document.getElementById('main_work_port5');
		var interstitial           = document.getElementById('interstitial');
		var portFade               = document.getElementsByClassName('port');

		interstitial.style.display = 'none';
		portFade[4].classList      = 'port';
		mainPort1.style.display    = 'none';
	};

// LANGUAGES - Function
var showLang = () => {
	var mainHome   = document.getElementById('main_home');
	var mainWork   = document.getElementById('main_work');
	var mainLang   = document.getElementById('main_lang');
	var mainJpgs   = document.getElementById('main_jpgs');
	var mainAbout  = document.getElementById('main_about');

	var mainBg3    = document.getElementById('main_bg_middle3');
	var mainBg4    = document.getElementById('main_bg_middle4');
	var mainBgT    = document.getElementById('main_bg_top');
	var mainBgM    = document.getElementById('main_bg_middle');
	var mainBgB    = document.querySelector('body');

	if (mainLang.classList == 'anim') {
		mainHome.style.display  = 'block';
		mainWork.classList      = '';
		mainLang.classList      = '';
		mainAbout.classList   	= '';
		mainJpgs.classList    	= '';
		mainBg3.classList     	= '';
		mainBg4.classList     	= '';
		mainBgT.style.display 	= 'block';
		mainBgM.style.display 	= 'block';
		mainBgM.style.backgroundImage = 'url(./img/bg_middle.png)';
		mainBgB.style.backgroundImage = 'url(./img/bg_bottom.jpg)';
		mainBgB.classList     	= '';
	} else {
		mainHome.style.display  = 'none';
		mainWork.classList      = '';
		mainLang.classList      = 'anim';
		mainJpgs.classList    	= '';
		mainAbout.classList   	= '';
		mainBg3.classList     	= '';
		mainBg4.classList     	= '';
		mainBgT.style.display 	= 'none';
		mainBgM.style.display 	= 'none';
		mainBgB.classList     	= 'bodyDark';
	}
};

// JPGs - Functions
var showJpgs = () => {
	var mainHome   = document.getElementById('main_home');
	var mainWork   = document.getElementById('main_work');
	var mainLang   = document.getElementById('main_lang');
	var mainJpgs   = document.getElementById('main_jpgs');
	var mainAbout  = document.getElementById('main_about');

	var mainBg3    = document.getElementById('main_bg_middle3');
	var mainBg4    = document.getElementById('main_bg_middle4');
	var mainBgT    = document.getElementById('main_bg_top');
	var mainBgM    = document.getElementById('main_bg_middle');
	var mainBgB    = document.querySelector('body');

	if (mainJpgs.classList == 'anim') {
		mainHome.style.display  = 'block';
		mainWork.classList      = '';
		mainAbout.classList   	= '';
		mainJpgs.classList    	= '';
		mainBg3.classList     	= '';
		mainBg4.classList     	= '';
		mainBgT.style.display 	= 'block';
		mainBgM.style.display 	= 'block';
		mainBgM.style.backgroundImage = 'url(./img/bg_middle.png)';
		mainBgB.style.backgroundImage = 'url(./img/bg_bottom.jpg)';
		mainBgB.classList     	= '';
	} else {
		mainHome.style.display  = 'none';
		mainWork.classList      = '';
		mainLang.classList      = '';
		mainJpgs.classList    	= 'anim';
		mainAbout.classList   	= '';
		mainBgB.classList     	= 'bodyDark';
		mainBg3.classList     	= 'anim';
		mainBg4.classList     	= '';
		mainBgT.style.display 	= 'none';
		mainBgM.style.display 	= 'none';
	}
};
	
	var countGlobal = 1;
	var jpgDivStart = document.getElementById('jpgs_photo');
	var info    = document.getElementById('jpgs_info');
	jpgDivStart.style.backgroundImage = 'url(./img/jpgs/' + countGlobal + '.jpg)';
	info.innerHTML  = jpgObject[countGlobal];

	var jpgsCarouselR = () => {
		var jpgDiv = document.getElementById('jpgs_photo');
		var count  = countGlobal++;
		var info    = document.getElementById('jpgs_info');
		console.log(countGlobal);

		if (count >= 19) {
			jpgDiv.style.backgroundImage = 'url(./img/jpgs/' + 19 + '.jpg)';
			event.preventDefault();
			countGlobal = 19;
			return countGlobal;
		} else {
			jpgDiv.style.backgroundImage = 'url(./img/jpgs/' + count + '.jpg)';
			info.innerHTML  = jpgObject[countGlobal];
		}
	};

	var jpgsCarouselL = () => {
		var jpgDiv = document.getElementById('jpgs_photo');
		var count  = countGlobal--;
		var info    = document.getElementById('jpgs_info');
		console.log(countGlobal);

		if (count <= 1) {
			jpgDiv.style.backgroundImage = 'url(./img/jpgs/' + 1 + '.jpg)';
			event.preventDefault();
			countGlobal = 1;
			return countGlobal;
		} else {
			jpgDiv.style.backgroundImage = 'url(./img/jpgs/' + count + '.jpg)';
			info.innerHTML  = jpgObject[countGlobal];
		}
	};

	var getInfo = () => {
		var info    = document.getElementById('jpgs_info');
		var counter = countGlobal;

		if (info.classList == 'anim') {
			info.classList = '';
		} else {
			info.classList  = 'anim';
		}
	};

// ABOUT - Functions
var showAbout = () => {
	var mainHome   = document.getElementById('main_home');
	var mainWork   = document.getElementById('main_work');
	var mainLang   = document.getElementById('main_lang');
	var mainJpgs   = document.getElementById('main_jpgs');
	var mainAbout  = document.getElementById('main_about');

	var mainBg3    = document.getElementById('main_bg_middle3');
	var mainBg4    = document.getElementById('main_bg_middle4');
	var mainBgT    = document.getElementById('main_bg_top');
	var mainBgM    = document.getElementById('main_bg_middle');
	var mainBgB    = document.querySelector('body');

	if (mainAbout.classList == 'anim') {
		mainHome.style.display  = 'block';
		mainAbout.classList     = '';
		mainBg4.classList       = '';
		mainBgT.style.display   = 'block';
		mainBgM.style.display   = 'block';
		mainBgM.style.backgroundImage = 'url(./img/bg_middle.png)';
		mainBgB.style.backgroundImage = 'url(./img/bg_bottom.jpg)';
		mainBgB.classList     	= '';
	} else {
		mainHome.style.display  = 'none';
		mainWork.classList      = '';
		mainLang.classList      = '';
		mainJpgs.classList      = '';
		mainAbout.classList     = 'anim';
		mainBg3.classList       = '';
		mainBg4.classList       = 'anim';
		mainBgT.style.display   = 'none';
		mainBgM.style.display   = 'none';
		mainBgB.classList     	= 'bodyDark';
	}
};
	
	var eng  = document.getElementById('eng');
	eng.style.animation = 'colorTwirl 2s linear infinite';

	var showEnglish = () => {
		var name = document.getElementById('about_name');
		var engl = document.getElementById('about_english');
		var japn = document.getElementById('about_japanese');
		var kore = document.getElementById('about_korean');
		var eng  = document.getElementById('eng');
		var jap  = document.getElementById('jap');
		var kor  = document.getElementById('kor');

		if (engl.style.display == 'block') {
			japn.style.display = 'none';
			kore.style.display = 'none';
		} else {
			name.innerHTML         = 'james p. goatcher';
			name.style.fontSize    = '52px';
			engl.style.display     = 'block';
			eng.style.animation    = 'colorTwirl 2s linear infinite';
			japn.style.display     = 'none';
			jap.style.animation    = '';
			jap.style.borderBottom = '3px solid #b1803a';
			kore.style.display     = 'none';
			kor.style.animation    = '';
			kor.style.borderBottom = '3px solid #b1803a';
		}
	};

	var showJapanese = () => {
		var name = document.getElementById('about_name');
		var engl = document.getElementById('about_english');
		var japn = document.getElementById('about_japanese');
		var kore = document.getElementById('about_korean');
		var eng  = document.getElementById('eng');
		var jap  = document.getElementById('jap');
		var kor  = document.getElementById('kor');


		if (japn.style.display == 'block') {
			engl.style.display = 'none';
			kore.style.display = 'none';
		} else {
			name.innerHTML      = 'ジェームス　ゴーチャー';
			name.style.fontSize = '40px';
			engl.style.display  = 'none';
			eng.style.animation = '';
			eng.style.borderBottom = '3px solid #b1803a';
			japn.style.display  = 'block';
			jap.style.animation = 'colorTwirl 2s linear infinite';
			kore.style.display  = 'none';
			kor.style.animation = '';
			kor.style.borderBottom = '3px solid #b1803a';
		}
	};

	var showKorean = () => {
		var name = document.getElementById('about_name');
		var engl = document.getElementById('about_english');
		var japn = document.getElementById('about_japanese');
		var kore = document.getElementById('about_korean');
		var eng  = document.getElementById('eng');
		var jap  = document.getElementById('jap');
		var kor  = document.getElementById('kor');

		if (kore.style.display == 'block') {
			japn.style.display = 'none';
			engl.style.display = 'none';
		} else {
			name.innerHTML         = '제임스 고철';
			name.style.fontSize    = '48px';
			engl.style.display     = 'none';
			eng.style.animation    = '';
			eng.style.borderBottom = '3px solid #b1803a';
			japn.style.display     = 'none';
			jap.style.animation    = '';
			jap.style.borderBottom = '3px solid #b1803a';
			kore.style.display     = 'block';
			kor.style.animation    = 'colorTwirl 2s linear infinite';
		}
	};

// HOME - Functions
var showHome = () => {
	var mainHome   = document.getElementById('main_home');
	var mainWork   = document.getElementById('main_work');
	var mainLang   = document.getElementById('main_lang');
	var mainJpgs   = document.getElementById('main_jpgs');
	var mainAbout  = document.getElementById('main_about');

	var mainBg3    = document.getElementById('main_bg_middle3');
	var mainBg4    = document.getElementById('main_bg_middle4');
	var mainBgT    = document.getElementById('main_bg_top');
	var mainBgM    = document.getElementById('main_bg_middle');
	var mainBgB    = document.querySelector('body');

	mainHome.style.display  = 'block';
	mainWork.classList    	= '';
	mainLang.classList      = '';
	mainJpgs.classList    	= '';
	mainAbout.classList   	= '';
	mainBg3.classList     	= '';
	mainBg4.classList     	= '';
	mainBgT.style.display 	= 'block';
	mainBgM.style.display 	= 'block';
	mainBgM.style.backgroundImage = 'url(./img/bg_middle.png)';
	mainBgB.style.backgroundImage = 'url(./img/bg_bottom.jpg)';
	mainBgB.classList     	= '';
};
