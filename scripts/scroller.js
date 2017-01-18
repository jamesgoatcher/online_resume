var imgArray = [
	'0',
	'10',
	'20',
	'30',
	'40',
	'50',
	'60',
	'70',
	'80',
	'90',
	'100',
	'110',
	'120',
	'130',
	'140',
	'150',
	'160',
	'170',
	'180'
];
// var imgArray = 0;

var scrollImg1    = document.getElementById('scrollImg1');
var scrollImg2    = document.getElementById('scrollImg2');
var scrollImg3    = document.getElementById('scrollImg3');
var scrollImg4    = document.getElementById('scrollImg4');
var scrollDiv     = document.getElementById('lang_langTech');
var nextImgIndex  = 0;

//Scroll function
var changeImg = function(e) {
	var evt   = window.event || e;
	var delta = evt.detail ? evt.detail*(-120) : evt.wheelDelta;

	nextImgIndex               = (delta <= -120) ? nextImgIndex + 1 : nextImgIndex - 1;
	nextImgIndex               = (nextImgIndex < 0) ? imgArray.length - 1 : (nextImgIndex > imgArray.length - 1) ? 0 : nextImgIndex;
	scrollImg1.style.transform = 'rotate(' + imgArray[nextImgIndex] + 'deg)';
	scrollImg2.style.transform = 'rotate(' + imgArray[nextImgIndex] + 'deg)';
	scrollImg3.style.transform = 'rotate(' + imgArray[nextImgIndex] + 'deg)';
	scrollImg4.style.transform = 'translate3d(' + imgArray[nextImgIndex] + '%,' + imgArray[nextImgIndex] + '%,0)';
	// nextImgIndex              = (delta <= -120) ? nextImgIndex + 1 : nextImgIndex - 1;
	// nextImgIndex              = (nextImgIndex < 0) ? imgArray - 1 : (nextImgIndex > imgArray - 1) ? 0 : nextImgIndex;
	// scrollImg1.style.transform = 'rotate(' + imgArray + ')';

	if (evt.preventDefault) {
		console.log(delta);
	} else {
		return false;
	}
};

var mouseWheelEvt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel';  //Firefox catch

	//Move code
	if (scrollDiv.attachEvent) {
		scrollDiv.attachEvent('on' + mouseWheelEvt, changeImg);
	} else if (scrollDiv.addEventListener) {
		scrollDiv.addEventListener(mouseWheelEvt, changeImg, false);
	}