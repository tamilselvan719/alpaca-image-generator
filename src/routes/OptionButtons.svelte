<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let heading: string;
	export let options: string[];
	export let selectedOption: string;

	const dispatch = createEventDispatcher();

	function handleOptionChanged(option: string) {
		selectedOption = option;
		dispatch('optionChanged', { value: option });
	}
</script>

<div class="flex flex-row flex-wrap gap-2 my-2">
	<h2 class="font-bold w-full">{heading}</h2>
	{#each options as option}
		<button
			class="border border-blue-500 rounded-3xl min-w-20 py-2 px-4"
			class:bg-blue-500={selectedOption === option}
			on:click={() => handleOptionChanged(option)}>{option}</button
		>
	{/each}
</div>
