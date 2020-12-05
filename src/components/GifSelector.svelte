<script lang="ts">
  export let gifUrl: string = 'https://media.giphy.com/media/2uksuufgQJ5VXJegxX/giphy.gif';
</script>

<section>
  <div class="GifDisplay">
    <p>{gifUrl}</p>
    <img src={gifUrl} />
  </div>
  <div class="GifSelect">
  <label>
    <span>Link to your gif:</span>
    <input bind:value={gifUrl} />
  </label>
  <button>Save me</button>
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    max-width: 50vw;
    height: 100%;
    width: 100%;
    color: #fff;
    background: #323232;
    padding: 4rem;
  }


  .GifDisplay {
    width: 100%;
    margin-bottom: 4rem;
  }

  .GifDisplay > img {
    width: 100%;
    border-radius: 3px;
  }

  .GifSelect > label {
    display: flex;
    flex-direction: column;
  }

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #f9f9f9;
    color: #f2f2f2;
    text-align: center;
  }

</style>