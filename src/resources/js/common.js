// 汎用クラス
(function () {
	// 存在したら何もしない
	if (!!window.common) { return ; }

	window.common = {
		getWindowHeight: function () {
			return window.innerHeight || $(window).height();
		},
		getZoomWindowHeight: function () {
			if(!common.isPcGree()){
				return common.getWindowHeight() / common.getZoom();
			} else {
				return +$('#app-container').height();
			}
		},
		scrollTop: function () {
			$('html,body').animate({scrollTop: 0}, 1);
		},
		getZoom: function () {
			if (common.isAndroid() && common.getAppVersion() >= 71) {
				return 1;
			}
			return $('html').css('zoom');
		},
		getScrollTop: function () {
			return ($(window).scrollTop()) / this.getZoom();
		},
		setStorage: function (key, value) {
			window.localStorage.setItem(key, value);
			return this;
		},
		getStorage: function (key) {
			var result = window.localStorage.getItem(key);
			if (result === 'undefined') { result = undefined; }
			if (result === 'false')     { result = false; }
			if (result === 'true')      { result = true; }
			if (result === 'null')      { result = null; }
			return result;
		},
		removeItem: function (key) {
			window.localStorage.removeItem(key);
		},
		clearStorage: function () {
			window.localStorage.clear();
		},
		isIOS: function () {
			var ua = window.navigator.userAgent;
			return (/iPhone|iPad|iPod/.test(ua));
		},
		isIOSX: function () {
			var ua = window.navigator.userAgent;
			if (ua.indexOf('iPhone OS 11_') >= 0 || ua.indexOf('iPhone OS 13_') >= 0) {
				var sw = window.screen.width;
				var sh = window.screen.height;
				if (sw === 375 && sh === 812) {
					return true;
				}
				return false;
			}
			return false;
		},
		isAndroid: function () {
			var ua = window.navigator.userAgent;
			return (/Android/.test(ua));
		},
	};
})();
