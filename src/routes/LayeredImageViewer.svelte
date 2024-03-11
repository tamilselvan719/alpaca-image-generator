<script lang="ts">
	export let images: string[] = [];
</script>

<div class="relative h-[400px] w-[400px]">
	{#each images as src}
		<img class="absolute w-auto h-[400px]" {src} alt="alpaca src" />
	{/each}
</div>
