<script lang="ts">
	import { binarySearch, type NearestRange } from '@geoffcox/binary-search';
	import { onMount } from 'svelte';

	let arrayLengthText = '26';
	$: arrayLength = Number.parseInt(arrayLengthText);

	let startNumberText = '0';
	$: startNumber = Number.parseInt(startNumberText);

	let removeCountText = '0';
	$: removeCount = Number.parseInt(removeCountText);

	let numberToFindText: string = '10';
	$: numberToFind = Number.parseInt(numberToFindText);

	$: canCreateValues = !isNaN(arrayLength) && !isNaN(startNumber) && !isNaN(removeCount);

	let values: number[] = [];
	$: valuesText = values.join(' ');

    let hasResults = false;
	let foundIndex = -1;
	let nearestRange: NearestRange = {};
	let comparisons = 0;

    const clearResults = () => {
        hasResults = false;
		foundIndex = -1;
		comparisons = 0;
		nearestRange = {};
	};

	const createValues = () => {
		if (canCreateValues) {
			const newValues = (values = Array.from(Array(arrayLength).keys())).map(
				(x) => x + startNumber
			);
			for (let i = 0; i < removeCount; i++) {
				newValues.splice(Math.floor(Math.random() * newValues.length), 1);
			}
			values = newValues;
            clearResults();
		}
	};

	$: nearestValues = {
		lowValue: values[nearestRange.lowIndex || -1],
		highValue: values[nearestRange.highIndex || -1]
	};

	const compare = (a: number, b: number) => {
		comparisons++;
		return a - b;
	};

	const search = () => {
		clearResults();
		foundIndex = binarySearch(numberToFind, values, compare, nearestRange);
        hasResults = true;
	};

	onMount(() => {
		createValues();
	});

</script>

<div class="demo">
	<div class="title">@geoffcox/binary-search demo</div>

	<div class="intro">
		<p>This demo lets you play with the binary search algorithm.</p>
		<p>
			You can create sequence of numbers, remove some of the values, and then search for a value.
		</p>
		<p>
			If the value isn't found, the algorithm tells you the low/high range where the number would
			have been if it was in the array.
		</p>
	</div>

	<div class="step">1. Create an array of numbers to search</div>
	<div class="section">
		<label>
			Length
			<input bind:value={arrayLengthText} />
		</label>
		<label>
			Start Number
			<input bind:value={startNumberText}/>
		</label>
		<label>
			Remove Count
			<input bind:value={removeCountText}/>
		</label>

		<button disabled={!canCreateValues} on:click={() => createValues()}>Create Values</button>
		<div class="values-array">
			{#if valuesText.length}
				{#each values as value}
					<div>{value}</div>
				{/each}
			{:else}
				<span>[&nbsp;]</span>
			{/if}
		</div>
	</div>

	<div class="step">2. Choose a number to find</div>
	<div class="section">
		<label>
			Number
			<input bind:value={numberToFindText} on:input={() => clearResults()} />
		</label>
	</div>

	<div class="step">3. Run the search</div>
	<div class="section">
		<button on:click={() => search()}>Search</button>
		<div class="info">
			We expect log<sub>2</sub>(length) => {Math.round(Math.log2(arrayLength))} comparisons.
		</div>
		<div class="results">
			{#if hasResults}
				{#if foundIndex !== -1}
					<div>Found <b>{numberToFind}</b> at [{foundIndex}] in {comparisons} comparisons.</div>
				{:else}
					<div><b>{numberToFind}</b> not found after {comparisons} comparisons.</div>
					<div>
						Nearest values <b>{nearestValues.lowValue}</b> , <b>{nearestValues.highValue}</b> at [{nearestRange.lowIndex}..{nearestRange.highIndex}]
					</div>
				{/if}
			{/if}
		</div>
	</div>
</div>

<style>
	@import '@fontsource/overpass';
	@import '@fontsource/fira-mono';

	.title {
		font-size: 2.5em;
	}

	.demo {
		align-content: flex-start;
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		font-family: 'Overpass', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		width: 800px;
		padding: 10px 20px;
	}

	.intro {
		padding: 20px 0;
		max-width: 550px;
	}

	.intro p {
		margin-block-start: 0.25em;
		margin-block-end: 0.25em;
	}

	.step {
		font-size: 1.6em;
		margin-top: 0.5em;
	}

	.section {
		align-content: flex-start;
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		margin-bottom: 0.5em;
	}

	.section * {
		margin-top: 5px;
	}

	.info {
		color: #777;
		font-size: 0.8em;
		margin-left: 5px;
	}

	.values-array {
		background: #ededed;
		margin: 15px 0;
		font-family: 'Fira Mono', monospace;
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: auto;
		place-content: flex-start;
		place-items: flex-start;
		max-height: 400px;
		max-width: 800px;
		overflow: auto;
	}

	.values-array div {
		margin: 5px;
		justify-self: flex-end;
	}

	.results b {
		font-size: 1.2em;
	}
</style>
