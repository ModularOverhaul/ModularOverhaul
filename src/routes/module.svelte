<script lang="ts">
	import { selectedIds } from './stores.js';
	import Module from './module.svelte';
    export let packId:number;
    export let packName: string = "SAMPLE NAME";
    export let packAuthor: string = "SAMPLE AUTHOR";
    export let packDescription: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sed!";
    export let packImage: string = "https://images.unsplash.com/photo-1675168491490-ae909ec3fab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    export let packImageAlt: string = "A beach with a sunset in the background"
    export let packTag: string = "SAMPLETAG";
    let dataOfStore = [999999];
    $: dataOfStore = $selectedIds
    $: info = {
        "name":packName,
        "author":packAuthor,
        "description":packDescription,
        "image":packImage,
        "imagealt":packImageAlt,
        "tag":packTag
    }

    
    let selected: Boolean = false;
    let selclass: String = "";
    if (!dataOfStore.includes(packId)) {
        selected = false;
            
        }else{
            selected = true;
        }
        if (selected) {
            selclass = "selected"
        } else {
            selclass = ""
        }
    function toggle() {
        if (!dataOfStore.includes(packId)) {
            selectedIds.update((dataOfStore) => {
                return [packId, ...dataOfStore]
            })
            selected = true;
        }else{
            let tempStore = dataOfStore.splice(dataOfStore.indexOf(packId), 1);  //deleting
            selectedIds.update((tempStore) => {
                return tempStore
            })
            
            selected = false
        }
        if (selected) {
            selclass = "selected"
        } else {
            selclass = ""
        }
        // console.log(`Changed state of ${packId} to ${selected}`)
    }
</script>

<div class="module gridid{packId} {selclass}" on:click={toggle} on:keydown={toggle}>
    <h1>{info.name}</h1>
    <div class="module-tag"><h4># {info.tag}</h4></div>
    <img src="{info.image}" alt="{info.imagealt}">
    <p>{info.description}</p>

    <h3 id="module-author">{info.author}</h3>
</div>

<style lang="scss">
    .module {
        padding: 5px;
        border-radius: 10px;
        background-color: #474746;
        position: relative;
        transition: rotate 300ms 100ms cubic-bezier(.18,.89,.32,1.28), 300ms background cubic-bezier(.45,.05,.55,.95) ;

        &:hover {
            background-color: #575756;
        }
        * {
            margin: 5px;
        }
        img {
            height:45%;
            aspect-ratio: 1 / 1;
            border-radius: inherit;
            display:block;
            margin: auto;
            object-fit: cover;

            transition: scale 300ms 100ms cubic-bezier(.18,.89,.32,1.28) ;
            &:hover {
                scale: 1.5;
            }
        }

        
        #module-author {
            background-color: #0fb9b1;
            color: #f5f5f5;
            border-radius: 25px;
            position: absolute;
            bottom: 0;
            padding: 2.5px 7.5px 2.5px 7.5px;
        }

        .module-tag {
            background-color: #8854d0;
            color: #f5f5f5;
            border-radius: 25px;
            * {
                padding: 0px 5px 0px 5px;
            }
        }
    }
.selected {
    background-color: #676766;
    rotate: 1deg;
    &:hover {
        background-color: #676766;
    }
}
</style>