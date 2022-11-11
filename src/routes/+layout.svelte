<script lang="ts">
    import "../app.css";
</script>

<main><slot/></main>

<style>
    main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>