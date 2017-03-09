console.log('\'Allo \'Allo!');

$('.marketing').show();

// swiper banner
var mySwiper = new Swiper('.swiper-container-banner', {
	autoplay: 3000,//可选选项，自动滑动
	autoplayDisableOnInteraction: false, //触摸后仍然可以自动播放
	grabCursor : true, //手势
	pagination: '.swiper-pagination',
	prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
	effect : 'cube',
	cube: {
	  slideShadows: true,
	  shadow: true,
	  shadowOffset: 100,
	  shadowScale: 0.6
	}
})

var mySwiperLoop = new Swiper('.swiper-container-loop', {
    slidesPerView: 3,
    paginationClickable: false,
    spaceBetween: 30,
    // freeMode: true,
	autoplay: 600,//可选选项，自动滑动
	autoplayDisableOnInteraction: false, //触摸后仍然可以自动播放
	loop: true,
});   

// 鼠标移入暂停自动播放, 鼠标移出开始自动播放
$('.swiper-slide').hover(() => {
	mySwiper.stopAutoplay();
}, () => {
	mySwiper.startAutoplay();
})

// tab选项卡
var t1 = new TabSwitch('tabswitch');  
t1.init();
t1.autoPlay();

// scroll事件
let slideArr = [];
let slideArrHeight = [];
$('.card-slide').each(function (i, item) {
	let thisOffset = $(this).offset();
	const flexWrapHeight = $(this).height();
	slideArr.push(thisOffset);
	slideArrHeight.push(flexWrapHeight);
});
let timer = null;
$(document).scroll(() => {
	// header随和滚轮的移动而固定在顶部
	clearTimeout(timer);

	var scrollTop = parseInt($(document).scrollTop());
	if(scrollTop >= 50 && scrollTop <= 55) {
		$('.header').fadeOut();
	} else if(scrollTop > 55) {
		$('.header').fadeIn().addClass('header-fixed');
		$('.to-top').fadeIn();
	} else if(scrollTop < 50) {
		$('.header').fadeIn();
		$('.header').removeClass('header-fixed');
		$('.to-top').fadeOut();
	}

	// 滚动滚动 -> 卡片式飞入飞出
	// $('.card-slide').each(function (i, item) {
	// 	if(scrollTop > slideArr[i].top) {
	// 		console.log('top');
	// 		$(this).animate({
	// 			top: -slideArrHeight[i]
	// 		}, 1000, function () {
	// 		});
	// 	} 
	// 	else if (scrollTop < slideArr[i].top + slideArrHeight[i]) {
	// 		console.log('bottom');
	// 		// $(this).animate({
	// 		// 	top: 0
	// 		// }, 1000, function () {
	// 		// });
	// 	}
	// });
});

// 回到顶部
$('.to-top').click(() => {
	$('body,html').animate({ scrollTop: 0 }, 'fast');
	return false;
});

// 无缝滚动
$('.dowebok').liMarquee({
	scrollamount: 100
});
$('.dowebok-photo').liMarquee({
	scrollamount: 200
});

// 页面滚动效果
// 
// 文字的偏移
// init
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '#pinned-trigger1', // point of execution
  duration: $(window).height() - 100, // pin element for the window height - 1
  triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin('#pinned-element1'); // the element we want to pin

var scene2 = new ScrollMagic.Scene({
  triggerElement: '#pinned-trigger2', // point of execution
  duration: 400 // pin the element for a total of 400px
})
.setPin('#pinned-element2'); // the element we want to pin

// 页面滚动效果
// 元素的显示隐藏过渡动画
// 按钮
var scene3 = new ScrollMagic.Scene({
	triggerElement: '#trigger1',
	triggerHook: 0,
})
.setClassToggle('#animate1', 'zap');
// .addIndicators({name: '1 - add a class'});

// flexWraap的动画
var scene4 = new ScrollMagic.Scene({
	triggerElement: '#trigger2',
	triggerHook: 0,
})
.setClassToggle('#flexWrapp', 'zap');
// .addIndicators({name: '1 - add a class'});

// dowebok-photo的动画
var scene5 = new ScrollMagic.Scene({
	triggerElement: '#trigger3',
	triggerHook: 0,
})
.setClassToggle('#dowebok', 'zap');
// .addIndicators({name: '1 - add a class'});

var scene6 = new ScrollMagic.Scene({
	triggerElement: '#trigger4',
	triggerHook: 0,
})
.setClassToggle('#jumbotron', 'zap');
// .addIndicators({name: '1 - add a class'});

var scene7 = new ScrollMagic.Scene({
	triggerElement: '#trigger5',
	triggerHook: 0, // 窗口顶部trigger
})
.setClassToggle('#tabswitch', 'zap');
// .addIndicators({name: '1 - add a class'});

// Add Scenes to ScrollMagic Controller
controller.addScene([
  scene,
  scene2,
  scene3,
  scene4,
  scene5,
  scene6,
  scene7
]);
