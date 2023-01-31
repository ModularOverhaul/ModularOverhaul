<script lang="ts">
	import Module from './module.svelte';
    export let id:number;
    let desc: string = "SAMPLE DESCRIPTION. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sed!";
    let name: string = "SAMPLE DATA";
    let tag: string = "SAMPLE TAG";
    let author: string = "SAMPLE AUTHOR";
    $: info = {
        "name":name,
        "author":author,
        "description":desc,
        "tag":tag
    }
    switch (id) {
        case 0:
            name = `${id}`
            author = "Nelertile"
            tag = "nature"
            break;
        case 1:
            name = `${id}`
            author = "Nelertile"
            tag = "explore"
            break;
    }
</script>

<div class="module gridid{id}">
    <h1>{info.name}</h1>
    <div class="module-tag"><h4># {info.tag}</h4></div>
    <p>{info.description}</p>

    <h3 id="module-author">{info.author}</h3>
</div>

<style lang="scss">
    .module {
        padding: 5px;
        border-radius: 10px;
        background-color: #474746;
        position: relative;
        * {
            margin: 5px;
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
</style>