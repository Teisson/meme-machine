<script>
import '../app.css'
</script>

<header>    
    <div class="brand-area">
        <img src="/assets/Logo/NTRM-logo.png" alt="Neutronium Logo" class="brand-logo">
    </div>
<nav class="menu">
    <!-- Menu items -->
        <a href="/">Home</a>
        <a href="/memeGenerator">Meme Generator</a>
</nav>
</header>

<main>
<slot> </slot> <!-- Content of individual pages will go here -->
</main>

<footer class="footer-container">
    <div class="social-links">
    <!-- Put your footer content, like social links, here -->
    <a href="https://twitter.com/neutronium_ai" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <i class="bi bi-twitter-x" style="font-size: 2rem;"></i>
    </a>
    <a href="https://discord.com/invite/yourinvitecode" target="_blank" rel="noopener noreferrer" aria-label="Discord">
        <i class="bi bi-discord" style="font-size: 2rem;"></i>
    </a>
</div>
<div class="credits">
    © 2024 neutronium ai. All rights reserved.
</div>
</footer>

<style>

</style>

        