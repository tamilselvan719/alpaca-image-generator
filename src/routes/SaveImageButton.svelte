<script lang="ts">
	export let images: string[];

	function saveAsImage() {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');

		images.forEach((e, i) => {
			const img = new Image();
			img.src = e;
			if (i === 0) {
				canvas.height = img.height;
				canvas.width = img.width;
			}
			context?.drawImage(img, 0, 0);
		});

		const dataURL = canvas.toDataURL('image/png');

		const link = document.createElement('a');
		link.href = dataURL;
		link.download = 'alpaca-avatar.png';

		link.click();
	}
</script>

<button class="border bg-neutral-200 rounded-xl min-w-20 py-2 px-4" on:click={saveAsImage}>
	🔽Download</button
>
