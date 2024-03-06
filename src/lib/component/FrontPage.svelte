<script lang="ts">
    // Import only if you need to navigate programmatically
    import { goto } from '$app/navigation';
  </script>
  
  <main class="front-page">
    <h1>Neutronium Community<br><span class="contributions">Contributions</span>, Immortalized.</h1>
    <p>Create your custom meme in seconds.</p>
    <button on:click={() => goto('/memeGenerator')}>Get Started</button>
  </main>

  <style>

    button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 1.2rem;
      color:aqua;
      cursor: pointer;
      background-color: transparent;
      border-color: aqua;
      border: 1px solid aqua;
      border-radius: 5px;
    }
    button:hover {
    color: black;
    background-color: aqua;
    border: 1px solid aqua;
    }
  </style>