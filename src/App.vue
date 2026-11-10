<script setup>
import { onMounted, ref } from 'vue';

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
  <main>
    <!-- VUE LISTE -->
    <template v-if="!current">
      <h1>AWA1 — Projet individuel</h1>
      <p>Une source de données Node.js affichée par Vue.js.</p>

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
