<script setup>
import { onMounted, ref } from 'vue';

const items = ref([]);
const loading = ref(true);
const error = ref('');

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
</script>

<template>
  <main>
    <h1>AWA1 — Projet individuel</h1>
    <p>Une source de données Node.js affichée par Vue.js.</p>

    <p v-if="loading">Chargement…</p>
    <p v-if="error" role="alert">{{ error }}</p>

    <section v-for="item in items" :key="item.id" class="card" tabindex="0">
      <div class="card-info">
        <small>{{ item.code }}</small>
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
      </div>
      <img class="card-image" :src="item.image" :alt="'Visualisation du ' + item.name">
      <strong class="card-number">0{{ item.id }}</strong>
    </section>
  </main>
</template>