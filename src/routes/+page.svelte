<script lang="ts">
    const ver = "v0.0.1-alpha"
    const dsc = "https://discord.gg/vS4zQ8PvPW"
    const gh = "https://github.com/modularoverhaul"
    const twt = "https://twitter.com/ModularOverhaul"

    import Module from './module.svelte'
</script>

<div class="page">
    <div class="card main">
        <div class="info">
            <p>
                <a href="{dsc}">
                    <i class="fa-brands fa-discord"/>
                </a> 
                <a href="{gh}">
                    <i class="fa-brands fa-github"/>
                </a> <a href="{twt}">
                    <i class="fa-brands fa-twitter"/>
                </a> {ver}
            </p>
        </div>
        <h1>Hello, World!</h1>
    
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque nihil ad cupiditate dolorum tenetur alias error, eum nostrum soluta totam eius explicabo iste vel nam voluptatum incidunt eveniet veniam!</p>
        <div class="module-container">
            <Module id={0}/>
            <Module id={1}/>
            <Module id={2}/>
            <Module id={3}/>
            <Module id={4}/>
            <Module id={5}/>
            <Module id={6}/>

        </div>
    </div> 
    <div class="card sidebar">
        <h1>Sidebar</h1>
    </div>   
</div>


<style lang="scss">
    .page {
        margin: 2.5%;
        height: 100%;
        width: 100%;
        display: flex;
        gap: 10px;
    }

    .main {
        width: 80%
    }

    .card {
        padding: 1em;
        border-radius: 10px;
        background-color: #373736;
    }

    .sidebar {
        width: 20%
    }
    .info {
        float: right;
        p {margin: 0;}
    }

    .module-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 400px;
        gap: 10px;
    }
</style>