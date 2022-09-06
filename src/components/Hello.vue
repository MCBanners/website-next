<template>
	<h1 class="text-9xl">Welcome to <span class="text-gradient">MCBanners</span></h1>
</template>

<style lang="scss" scoped>
	h1 {
		margin: 2rem 0;
	}

	.text-gradient {
		font-weight: 900;
		background-image: linear-gradient(0deg, #4f39fa, #da62c4);
		-webkit-background-clip: text;
        background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 100% 200%;
		background-position-y: 100%;
		border-radius: 0.4rem;
		animation: pulse 4s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			background-position-y: 0%;
		}
		50% {
			background-position-y: 80%;
		}
	}
</style>