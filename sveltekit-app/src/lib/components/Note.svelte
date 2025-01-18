<script>
	export let className = '';
	export let fill = '';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	height="24px"
	viewBox="0 -960 960 960"
	width="24px"
	{fill}
	class={className}
>
	<defs>
		<linearGradient id="gradient" x1="0%" y1="0" x2="100%" y2="0%">
			<stop offset="0%" stop-color="#ff0000">
				<animate
					attributeName="stop-color"
					values="#ff0000; #d10000; #9b0000; #e2574c; #ff3d00; #ff0000"
					dur="12s"
					repeatCount="indefinite"
				/>
			</stop>
			<stop offset="100%" stop-color="#ff0000">
				<animate
					attributeName="stop-color"
					values="#ff0000; #d10000; #9b0000; #e2574c; #ff3d00; #ff0000"
					dur="8s"
					repeatCount="indefinite"
				/>
			</stop>
		</linearGradient>
	</defs>
	<path
		d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z"
	/>
</svg>

<style>
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		20% {
			background-position: 20% 50%;
		}
		40% {
			background-position: 40% 50%;
		}
		60% {
			background-position: 60% 50%;
		}
		80% {
			background-position: 80% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}
</style>
