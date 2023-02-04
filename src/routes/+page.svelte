<script lang="ts">
	const ver = 'v0.0.1-alpha';
	const dsc = 'https://discord.gg/vS4zQ8PvPW';
	const gh = 'https://github.com/modularoverhaul';
	const twt = 'https://twitter.com/ModularOverhaul';

	import Packs from '$lib/data/packs.json';
	import Module from './module.svelte';
	import Sidebar from './sidebar.svelte';
</script>

<div class="page">
	<div class="card main">
		<div class="info">
			<p>
				<a href={dsc}>
					<i class="fa-brands fa-discord" />
				</a>
				<a href={gh}>
					<i class="fa-brands fa-github" />
				</a>
				<a href={twt}>
					<i class="fa-brands fa-twitter" />
				</a>
				{ver}
			</p>
		</div>
		<h1>Hello, World!</h1>

		<p>
			Click on the packs below to select them, then click "<span id="nice-text">DOWNLOAD</span>" to package them! <br>
			Hover over the images to enlarge them.
		</p>
		<div class="module-container">
			{#each Packs as Pack, i}
			<Module {...Packs[i]} />
			{/each}
		</div>
	</div>
	<div class="card sidebar">
		<Sidebar />
	</div>
</div>

<style lang="scss">
	#nice-text {
		font-weight: 500;
		background: linear-gradient(45deg, rgba(209,129,255,1) 0%, rgba(165,94,234,1) 50%, rgb(106, 58, 196) 100%);
		background-clip: text;
		color: transparent;
	}
	.page {
		margin: 2.5%;
		height: 100%;
		width: 100%;
		display: flex;
		gap: 10px;
	}

	.main {
		width: 80%;
	}

	.card {
		padding: 1em;
		border-radius: 10px;
		background-color: #373736;
	}

	.sidebar {
		width: 20%;
	}

	.info {
		float: right;
		p {
			margin: 0;
		}
	}

	.module-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: 400px;
		gap: 10px;
	}
</style>
