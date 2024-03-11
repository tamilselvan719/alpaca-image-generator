<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Accessory } from './Models';

	export let accessories: Accessory[];

	let dispatch = createEventDispatcher();

	function randomAlpaca() {
		accessories.forEach((e) => {
			e.selectedOption = e.options[Math.floor(Math.random() * e.options.length)];
		});
		dispatch('randomAlpacaCreated', { value: accessories });
	}
</script>

<button class="border bg-neutral-200 rounded-xl min-w-20 py-2 px-4" on:click={randomAlpaca}>
	♾️Random</button
>
