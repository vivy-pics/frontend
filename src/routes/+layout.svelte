<script lang="ts">
    import "../app.css";
</script>

<div id="content">
    <aside id="columnLeft"><slot name="columnLeft"/></aside>
    <div id="mainContent">
        <header>
            <nav><img src="/logo.svg" alt="VIVY logo" height="30"></nav>
        </header>
        <main><slot/></main>
    </div>
    <aside id="columnRight"><slot name="columnRight"/></aside>
</div>

<footer/>

<style>
    #content {
        display: flex;
    }

    #columnLeft {
        flex: 20%;
    }

    #columnRight {
        flex: 20%;
    }

    #mainContent {
        flex: 60%;
    }
</style>