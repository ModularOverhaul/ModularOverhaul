<script lang="ts">
	import Module from './module.svelte';
    export let id:number;
    let desc: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sed!";
    let name: string = "SAMPLE DATA";
    let tag: string = "SAMPLE TAG";
    let author: string = "SAMPLE AUTHOR";
    let imgsrc: string = "https://images.unsplash.com/photo-1675168491490-ae909ec3fab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    let imgalt: string = "A beach with a sunset in the background"
    $: info = {
        "name":name,
        "author":author,
        "description":desc,
        "image":imgsrc,
        "imagealt":imgalt,
        "tag":tag
    }
    switch (id) {
        case 0:
            name = `${id}`
            author = "Nelertile"
            tag = "nature"
            imgsrc = "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80"
            imgalt = "A lovely valley with tall mountains on either side"
            break;
        case 1:
            name = `${id}`
            author = "Nelertile"
            tag = "explore"
            break;
    }

    let selected: Boolean;
    let selclass: String = "";
    function toggle() {
        selected = !selected
        if (selected) {
            selclass = "selected"
        } else {
            selclass = ""
        }
        console.log(`Changed state of ${id} to ${selected}`)
    }
</script>

<div class="module gridid{id} {selclass}" on:click={toggle} on:keydown={toggle}>
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
        transition: 300ms background cubic-bezier(.45,.05,.55,.95);
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
    &:hover {
        background-color: #676766;
    }
}
</style>