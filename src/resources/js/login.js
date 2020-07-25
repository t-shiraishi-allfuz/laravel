Vue.component('login-component', require('./components/LoginComponent.vue').default);

const login = new Vue({
	el: '#scroller',
	delimiters: ["<%","%>"],
});
