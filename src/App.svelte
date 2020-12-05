<script lang="ts">
  import GifSelector from './components/GifSelector.svelte';
  export let name: string;
</script>

<main>
  <div>
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  </div>
  <GifSelector />
</main>

<style>
  main {
    text-align: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  main > * {
      flex: 1;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (max-width: 640px) {
    main {
      max-width: none;
      flex-direction: column;
    }
  }
</style>