<script setup>
// Page d'arrivée : met en avant le Giruno (reprise simplifiée du template CFF Collection)
</script>

<template>
  <section class="hero">
    <div class="hero-topline">
      <span>INGÉNIERIE SUISSE / COLLECTION 01</span>
      <span>LE MOUVEMENT A UNE SIGNATURE</span>
    </div>

    <!-- Mot géant décoratif derrière le train -->
    <div class="hero-word" aria-hidden="true">GIRUNO</div>

    <!-- Le train au centre -->
    <div class="hero-stage">
      <div class="stage-shadow"></div>
      <img class="hero-train" src="/images/giruno-studio.webp" alt="Visualisation du Giruno en studio">
      <span class="render-note">ÉTUDE DE DESIGN · VISUEL DE CONCEPT</span>
    </div>

    <!-- Barre du bas -->
    <div class="hero-bottom">
      <div class="edition">
        <span>01</span>
        <div>LE GIRUNO<br><small>Au-delà des frontières.</small></div>
      </div>
    </div>
  </section>
</template>

<!-- Le CSS est dans HomeHero.css (scoped : il ne s'applique qu'à ce composant) -->
<style scoped src="./HomeHero.css"></style>
