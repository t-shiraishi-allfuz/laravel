<template>
	<div id="main-contents">
		<div class="btn-m" v-on:click="onClickStart">START</div>
	</div>
</template>

<script>
	export default {
		mounted() {
		},
		methods: {
			onClickStart: function(e) {
				console.log("start");
			},
		},
	}
</script>
