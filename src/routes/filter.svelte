<script lang="ts">
	import Tags from '$lib/data/tags.json';
	import Authors from '$lib/data/authors.json';

    let filterIsShowing = false;
	let filterIsShowingClass = "dontshow";
    let authIsShowing = false;
    let authIsShowingClass = "dontshow";
    function filterDropdown() {
	    if (filterIsShowing)
	    {
		    filterIsShowing = false;
	    }
	    else {
		    filterIsShowing = true;
            authIsShowing = false
	    }
    }
    function authDropdown() {
	    if (authIsShowing)
	    {
		    authIsShowing = false;
	    }
	    else {
		    authIsShowing = true;
            filterIsShowing = false
	    }
    }
    $: if(filterIsShowing) filterIsShowingClass = ""
    $: if(!filterIsShowing) filterIsShowingClass = "dontshow"
    $: if(authIsShowing) authIsShowingClass = ""
    $: if(!authIsShowing) authIsShowingClass = "dontshow"
</script>

<div class="dropdown">
    <button on:click={filterDropdown} class="dropbtn">Tags</button>
    <div id="filterDropdown" class="dropdown-content {filterIsShowingClass}">
			<button class="tag">{Tags[0]}</button>
        {#each Tags as Tag}
            {#if Tag != 'none'}
			<button class="tag">#{Tag}</button>
            {/if}
		{/each}
    </div>
</div> 
<div class="dropdown">
    <button on:click={authDropdown} class="dropbtn">Authors</button>
    <div id="authDropdown" class="dropdown-content {authIsShowingClass}">
        {#each Authors as Author}
			<button class="auth">{Author}</button>
		{/each}
    </div>
</div> 

<style lang="scss">
    .dropdown {
  		position: relative;
  		display: inline-block;
	}
	.dropdown-content {
		display:block;
  		position: absolute;
  		background-color: #575756;
		padding: 5px;
		border-radius: 10px; 
  		min-width: 120px;
  		z-index: 1;
	}
	.dontshow {
		display: none;
	}

    button {
  		background-color: #474746;
        width: 120px;
        aspect-ratio: 10 / 3;
        border-radius: 10px;
        border: none;
        color: #d1d8e0;
        transition: 300ms background cubic-bezier(.45,.05,.55,.95);
        &:hover {
            background-color: #575756;
        }
    }

    .tag {
        color: #f5f5f5;
        margin: 4px;
        aspect-ratio: 10 / 2;
        background-color: #8854D0;
          &:hover {
            background-color: #a55eea;
        }
    }
    .auth {
        color: #f5f5f5;
        margin: 4px;
        aspect-ratio: 10 / 2;
        background-color: #0FB9B1;
          &:hover {
            background-color: #2bcbba;
        }
    }
</style>