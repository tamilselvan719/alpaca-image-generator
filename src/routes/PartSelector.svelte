<script lang="ts">
	import OptionButtons from './OptionButtons.svelte';
	import { Accessory } from './Models';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let accessories: Accessory[];
	$: selectedAccessoryName = accessories[0].name;
	$: selectedAccessory = accessories[0];

	function handleAccessoryChanged(event: any) {
		let acc = accessories.find((e) => e.name === event.detail.value);
		if (acc) selectedAccessory = acc;
	}

	function handleOptionChanged(event: any) {
		let option = selectedAccessory?.options.find((e) => e.name === event.detail.value);
		if (selectedAccessory && option) selectedAccessory.selectedOption = option;
		dispatch('partChnaged');
	}
</script>

<div class="flex flex-col flex-wrap gap-4 w-auto">
	<OptionButtons
		heading="ACCESSORIZE THE ALPACA"
		options={accessories.map((e) => e.name)}
		selectedOption={selectedAccessoryName}
		on:optionChanged={handleAccessoryChanged}
	/>
	{#if selectedAccessory}
		<OptionButtons
			heading="Options"
			options={selectedAccessory.options.map((e) => e.name)}
			selectedOption={selectedAccessory.selectedOption.name}
			on:optionChanged={handleOptionChanged}
		/>
	{/if}
</div>
