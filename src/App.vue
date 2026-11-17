<script setup>
import { onMounted, ref } from 'vue';
import LogoCff from './components/LogoCff.vue';
import HomeHero from './components/HomeHero.vue';

const items = ref([]);
const loading = ref(true);
const error = ref('');
const current = ref(null); 

onMounted(async () => {
  try {
    const response = await fetch('/api/items');
    if (!response.ok) throw new Error('API indisponible');
    items.value = await response.json();
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
});

// --- red courtain annimation ---
const curtain = ref(false);
const HALF = 650;


function changeView(next) {
  if (curtain.value) return; 


  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    next();
    return;
  }

  curtain.value = true;
  setTimeout(next, HALF);
  setTimeout(() => { curtain.value = false; }, HALF * 2);
}

// Ouvre la fiche d'un train
function open(item) {
  changeView(() => {
    current.value = item;
    window.scrollTo(0, 0);
  });
}

// Revient à la liste
function back() {
  changeView(() => {
    current.value = null;
  });
}
</script>

<template>
  <header class="site-header">
    <div class="brand">
      <LogoCff :width="108" />
      <strong class="brand-name">CFF</strong>
      <span class="brand-sub">LA COLLECTION<br>FERROVIAIRE</span>
    </div>
    <div class="nav-end">
      <span>FR</span>
      <span>SUISSE · 46° N</span>
    </div>
  </header>

  <main>
    <!-- VUE LISTE -->
    <template v-if="!current">
      <!-- Page d'arrivée (composant) -->
      <HomeHero />

      <!-- La collection -->
      <section id="flotte" class="collection">
        <div class="collection-intro">
          <h2>Trois signatures.<br><span>Une collection.</span></h2>
          <p>Découvrez le caractère et la conception de chaque modèle.</p>
        </div>

        <p v-if="loading">Chargement…</p>
        <p v-if="error" role="alert">{{ error }}</p>

        <!-- clic open the detail page for da train -->
        <section
          v-for="item in items"
          :key="item.id"
          class="card"
          tabindex="0"
          @click="open(item)"
          @keydown.enter="open(item)"
        >
          <div class="card-info">
            <small>{{ item.code }}</small>
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
          </div>
          <img class="card-image" :src="item.image" :alt="'Visualisation du ' + item.name">
          <strong class="card-number">0{{ item.id }}</strong>
        </section>
      </section>
    </template>

    <!-- detailled vue -->
    <section v-else class="detail">
      <button type="button" class="back" @click="back">← La collection</button>
      <small>{{ current.code }}</small>
      <h1>{{ current.name }}</h1>
      <img class="detail-image" :src="current.image" :alt="'Visualisation du ' + current.name">
      <p>{{ current.description }}</p>
    </section>
  </main>

  <div class="curtain" :class="{ run: curtain }" aria-hidden="true">CFF / LA COLLECTION</div>
</template>
