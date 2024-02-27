<script lang="ts">
	let alpacaImageParts = [
		{
			name: 'Backgrounds',
			url: 'assets/backgrounds/',
			selectedOption: { name: '', fileName: '' },
			options: [
				{ name: 'Blue 50', fileName: 'blue50.png' },
				{ name: 'Blue 60', fileName: 'blue60.png' },
				{ name: 'Blue 70', fileName: 'blue70.png' },
				{ name: 'Dark Blue 30', fileName: 'darkblue30.png' },
				{ name: 'Dark Blue 50', fileName: 'darkblue50.png' },
				{ name: 'Dark Blue 70', fileName: 'darkblue70.png' },
				{ name: 'Green 50', fileName: 'green50.png' },
				{ name: 'Green 60', fileName: 'green60.png' },
				{ name: 'Green 70', fileName: 'green70.png' },
				{ name: 'Grey 40', fileName: 'grey40.png' },
				{ name: 'Grey 70', fileName: 'grey70.png' },
				{ name: 'Grey 80', fileName: 'grey80.png' },
				{ name: 'Red 50', fileName: 'red50.png' },
				{ name: 'Red 60', fileName: 'red60.png' },
				{ name: 'Red 70', fileName: 'red70.png' },
				{ name: 'Yellow 50', fileName: 'yellow50.png' },
				{ name: 'Yellow 60', fileName: 'yellow60.png' },
				{ name: 'Yellow 70', fileName: 'yellow70.png' }
			]
		},
		{
			name: 'Ears',
			url: 'assets/ears/',
			selectedOption: { name: '', fileName: '' },
			options: [
				{ name: 'Default', fileName: 'default.png' },
				{ name: 'Tilt backward', fileName: 'tilt-backward.png' },
				{ name: 'Tilt forward', fileName: 'tilt-forward.png' }
			]
		},
		{
			name: 'Neck',
			url: 'assets/neck/',
			selectedOption: { name: '', fileName: '' },
			options: [
				{ name: 'Default', fileName: 'default.png' },
				{ name: 'Bend backward', fileName: 'bend-backward.png' },
				{ name: 'Bend forward', fileName: 'bend-forward.png' },
				{ name: 'Thick', fileName: 'thick.png' }
			]
		},
		{
			name: 'Hair',
			url: 'assets/hair/',
			selectedOption: { name: '', fileName: '' },
			options: [
				{ name: 'Default', fileName: 'default.png' },
				{ name: 'Bang', fileName: 'bang.png' },
				{ name: 'Curls', fileName: 'curls.png' },
				{ name: 'Elegant', fileName: 'elegant.png' },
				{ name: 'Fancy', fileName: 'fancy.png' },
				{ name: 'Quiff', fileName: 'quiff.png' },
				{ name: 'Short', fileName: 'short.png' }
			]
		},
		{
			name: 'Accessories',
			url: 'assets/accessories/',
			selectedOption: { name: '', fileName: '' },
			options: [
				{ name: 'Earings', fileName: 'earings.png' },
				{ name: 'Flower', fileName: 'flower.png' },
				{ name: 'Glasses', fileName: 'glasses.png' },
				{ name: 'headphone', fileName: 'headphone.png' }
			]
		},
		{
			name: 'Mouth',
			url: 'assets/mouth/',
			selectedOption: { name: '', fileName: '' },
			options: [
				{ name: 'Default', fileName: 'default.png' },
				{ name: 'Astonished', fileName: 'astonished.png' },
				{ name: 'Eating', fileName: 'eating.png' },
				{ name: 'Laugh', fileName: 'laugh.png' },
				{ name: 'Tongue', fileName: 'tongue.png' }
			]
		},

		{
			name: 'Eyes',
			url: 'assets/eyes/',
			selectedOption: { name: '', fileName: '' },
			options: [
				{ name: 'Default', fileName: 'default.png' },
				{ name: 'Angry', fileName: 'angry.png' },
				{ name: 'Naughty', fileName: 'naughty.png' },
				{ name: 'Panda', fileName: 'panda.png' },
				{ name: 'Smart', fileName: 'smart.png' },
				{ name: 'Star', fileName: 'star.png' }
			]
		},
		{
			name: 'Nose',
			url: 'assets/nose/',
			selectedOption: { name: '', fileName: '' },
			options: [{ name: 'Default', fileName: 'nose.png' }]
		},
		{
			name: 'Leg',
			url: 'assets/leg/',
			selectedOption: { name: '', fileName: '' },
			options: [
				{ name: 'Default', fileName: 'default.png' },
				{ name: 'Cookie', fileName: 'cookie.png' },
				{ name: 'Game console', fileName: 'game-console.png' },
				{ name: 'Bubble Tea', fileName: 'bubble-tea.png' },
				{ name: 'Tilt backward', fileName: 'tilt-backward.png' },
				{ name: 'Tilt forward', fileName: 'tilt-forward.png' }
			]
		}
	];

	alpacaImageParts.forEach((e) => {
		e.selectedOption = e.options[0];
	});

	let selectedPart = alpacaImageParts[0];

	function handleOptionChanged(option: any) {
		selectedPart.selectedOption = option;
		alpacaImageParts = alpacaImageParts;
		console.log(option.name);
	}

	function randomAlpaca() {
		alpacaImageParts.forEach((e) => {
			e.selectedOption = e.options[Math.floor(Math.random() * e.options.length)];
		});
		alpacaImageParts = alpacaImageParts;
	}

	function saveAsImage() {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		const divToCapture = document.getElementById('alpaca-avatar'); // Replace with your div ID
		const image = new Image();

		if (divToCapture && context) {
			// Set canvas dimensions to match the div
			canvas.width = divToCapture.offsetWidth;
			canvas.height = divToCapture.offsetHeight;

			// Draw the div content onto the canvas
			context.drawImage(divToCapture as CanvasImageSource, 0, 0);

			// Open the image in a new window
			window.open(canvas.toDataURL());
		}
	}
</script>

<div class="flex flex-col md:flex-row w-full pt-4 gap-4 gap-y-14 h-auto">
	<div id="alpaca-avatar" class="relative min-w-[450px] min-h-[450px]">
		{#each alpacaImageParts as part}
			<img
				class="absolute w-auto h-[450px]"
				src={part.url + part.selectedOption.fileName}
				alt="alpaca {part.name}"
			/>
		{/each}
		<div class="absolute bottom-[-60px] w-full flex flex-row justify-evenly">
			<button class="border bg-neutral-200 rounded-xl min-w-20 py-2 px-4" on:click={randomAlpaca}>
				♾️Random</button
			>
			<button class="border bg-neutral-200 rounded-xl min-w-20 py-2 px-4" on:click={saveAsImage}>
				🔽Download</button
			>
		</div>
	</div>

	<div class="flex flex-col flex-wrap gap-4 w-auto">
		<div class="flex flex-row flex-wrap gap-2 my-2">
			<h2 class="font-bold w-full">ACCESSORIZE THE ALPACA</h2>
			{#each alpacaImageParts as part}
				<button
					class="border border-blue-500 rounded-3xl min-w-20 py-2 px-4"
					class:bg-blue-500={selectedPart.name === part.name}
					on:click={() => (selectedPart = part)}>{part.name}</button
				>
			{/each}
		</div>
		<div class="flex flex-row flex-wrap gap-2 my-2">
			<h2 class="font-bold w-full">Options</h2>
			{#each selectedPart.options as option}
				<button
					class="border border-blue-500 rounded-3xl min-w-20 py-2 px-4"
					class:bg-blue-500={selectedPart.selectedOption.name === option.name}
					on:click={() => handleOptionChanged(option)}>{option.name}</button
				>
			{/each}
		</div>
	</div>
</div>
