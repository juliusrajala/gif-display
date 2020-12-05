<script lang="ts">
  import { getStore } from '../state';

  const store = getStore();

  let gifs = [];

  const unsubscribe = store.subscribe(value  => {
    gifs = value.gifList
  })

</script>

<section>
  <h1>Gif Smilies</h1>
  <ul>
  {#each gifs as { sourceUrl, sender, id, isVisible } }
    <li>
      <h4>Gifuttaja: {sender}</h4>
      <div class="container">
        <img alt={sender} src={sourceUrl} />
        {#if !isVisible}<div class="container--Cover">{sender} hasn't made their gif visible yet.</div> {/if}
      </div>
    </li>
  {/each}
  </ul>
</section>

<style>
  ul {
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin: 1rem;
    list-style: none;
    width: 40%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  h4 {
    font-weight: 300;
    font-size: 1rem;
    color: #2f2f2f;
    text-transform: uppercase;
  }

  section {
    display: flex;
    flex-direction: column;
    max-width: 50vw;
    min-height: 100%;
    width: 100%;
    color: #fff;
    background: #f2f2f2;
    padding: 4rem;
  }

  img {
    position: relative;
    border-radius: 3px;
    width: 100%;
  }

  .container {
    position: relative;
  }

  .container--Cover {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    text-transform: uppercase;
    border-radius: 3px;
    width:100%;
    z-index: 2;
    background: #2f2f2f;
    position: absolute;
    left: 0;
    top: 0;
    width:100%;
    height:100%;
    padding: 1rem;
    font-size: 0.8rem;
  }

</style>