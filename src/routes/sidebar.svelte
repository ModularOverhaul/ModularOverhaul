<script lang="ts">
	import { selectedIds } from './stores.js';
	import Packs from '$lib/data/packs.json';
    let dataOfStore = [999999];
    $: dataOfStore = $selectedIds
    // console.log(Packs)

    function download(){
        dataOfStore.sort()
        dataOfStore.forEach(i => {
            console.log(Packs[i]);
        });
    }
</script>


    <h1>Sidebar</h1>
    <div class="buttons">
        <button id="download" on:click={download}>DOWNLOAD</button>
    </div>

    <ul class="selected-packs">
        {#each Packs as {packName}, i}
        {#if dataOfStore.includes(Packs[i].packId)}
            <li>{packName}</li>
        {/if}
        {/each}
    </ul>



<style lang="scss">
    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        #download{
            width: 80%;
            aspect-ratio: 16 / 4;
            border-radius: 10px;
            background-color: transparent;
            border: 5px #d1d8e0 solid;
            color: #d1d8e0;
            font-size: 2em;
            transition: background 300ms ease, scale 300ms cubic-bezier(.18,.89,.32,1.28);
            &:hover {
                background-color: #d1d8e02a;
                scale: 1.2;
                
            }
        }
    }
</style>