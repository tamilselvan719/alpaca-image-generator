<script lang="ts">
	import LayeredImageViewer from './LayeredImageViewer.svelte';
	import { getAllAccessory } from './Models';
	import PartSelector from './PartSelector.svelte';
	import SaveImageButton from './SaveImageButton.svelte';
	import RandomAlpaca from './RandomAlpaca.svelte';

	let accessories = getAllAccessory();
	$: images = accessories.map((e) => e.url + e.selectedOption.fileName);
</script>

<div class="flex flex-row gap-4">
	<div class="flex flex-col w-fit">
		<LayeredImageViewer {images} />
		<div class="flex justify-evenly p-4">
			<RandomAlpaca
				{accessories}
				on:randomAlpacaCreated={(event) => (accessories = event.detail.value)}
			/>
			<SaveImageButton {images} />
		</div>
	</div>
	<div class="flex flex-col gap-4">
		<PartSelector {accessories} on:partChnaged={() => (accessories = accessories)} />
	</div>
</div>
