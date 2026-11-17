<script setup>
import { computed } from 'vue';

const props = defineProps({
  width: { type: Number, default: 160 },
  compact: { type: Boolean, default: false }
});

const viewBox = computed(() =>
  props.compact
    ? '240 457.687 122.573 73.158'
    : '142.24 457.687 220.333 73.158'
);
</script>

<template>

  <svg
    class="logo"
    :viewBox="viewBox"
    :style="{ width: width + 'px' }"
    role="img"
    aria-label="Logo CFF"
  >
    <rect class="logo-bg" x="142.24" y="457.687" width="220.333" height="73.158" />
    <path
      class="logo-emblem"
      d="M274.161,500L291.792,517.632L275.145,517.632L251.516,494.003L275.042,470.476L291.69,470.476L274.161,488.006L295.999,488.006L295.999,470.476L307.994,470.476L307.994,488.006L329.833,488.006L312.303,470.476L328.951,470.476L352.477,494.003L328.849,517.632L312.201,517.632L329.833,500L307.994,500L307.994,517.632L295.999,517.632L295.999,500L274.161,500Z"
    />
  </svg>
</template>

<style scoped>
.logo {
  display: block;
}

.logo-bg {
  fill: #e30613;  
}

.logo-emblem {
  fill: white;
  animation: arrive 1s ease-out;   /* joue une fois au chargement */
}

/* L'emblème entre depuis la gauche, comme un train qui arrive en gare */
@keyframes arrive {
  from {
    transform: translateX(-120px);  /* hors du carré, à gauche (unités de la viewBox) */
    opacity: 0;
  }
  to {
    transform: translateX(0);       /* à sa place */
    opacity: 1;
  }
}
</style>