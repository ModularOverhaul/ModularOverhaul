<script lang="ts">
	import { selectedIds } from './stores.js';
	import Packs from '$lib/data/packs.json';
    let dataOfStore = [999999];
    $: dataOfStore = $selectedIds
    console.log(Packs)
</script>


    <h1>Sidebar</h1>

    <ul class="selected-packs">
        {#each Packs as {packName}, i}
        {#if dataOfStore.includes(Packs[i].packId)}
            <li>{packName}</li>
        {/if}
        {/each}
    </ul>


<style lang="scss">
    
</style>