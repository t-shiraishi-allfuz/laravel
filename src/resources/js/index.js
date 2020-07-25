Vue.component('index-component', require('./components/IndexComponent.vue').default);

const index = new Vue({
	el: '#scroller',
	delimiters: ["<%","%>"],
});
