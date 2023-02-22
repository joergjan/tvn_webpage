<script lang="ts">
	export let imgUrl: string;
	export let slideNo: number;
	export let totalSlides: number;
	export let imageShowing: boolean;
</script>

<div class="hidden" class:showImage={imageShowing}>
	<div class="h-[500px]">
		<div class="text-white bg-gray-700 opacity-30 font-sm p-2 absolute top-0">
			{slideNo + 1} / {totalSlides}
		</div>
		<img id="image" src={imgUrl} alt="" />
	</div>
</div>
