var start = function (e) {
	var target = $(this);
	if (target.hasClass('on') || target.hasClass('disable')) { return ; }
	target.addClass('on-active');
}

var end = function (e) {
	var target = $(this);
	target.removeClass('on-active');
	// フォーカス外す
	$("input:focus").blur();
}

var className = "[class^='btn-'], [class*=' btn-']";
var $doc = $(document);
$doc.on({touchstart: start, mousedown: start, touchend: end, mouseup: end}, className);

// 画面調整
initDisplay = function() {
	$(window).bind('resize', function () {
		var ratio = (window.innerWidth || $(window).width()) / 320;
		$('html').css('zoom', ratio);

		var height = Math.floor((window.innerHeight || $(window).height()) / ratio);
		$('#wrapper').css({'min-height':height});
	});

	$(window).triggerHandler('resize');

	if (common.isIOS()) {
		// iOS
		$('body').addClass('iso');
	} else {
		// Android
		$('body').addClass('android');
	}
}
initDisplay();
