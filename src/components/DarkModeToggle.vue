<script setup>
import { ref, onMounted } from 'vue';

const darkMode = ref(false);

onMounted(() => {
  darkMode.value = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark', darkMode.value);
});

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
  localStorage.setItem('darkMode', darkMode.value);
  document.body.classList.toggle('dark', darkMode.value);
}
</script>

<template>
  <button class="mode-toggle" @click="toggleDarkMode">
    {{ darkMode ? '☀️ Light Mode' : '🌙 Dark Mode' }}
  </button>
</template>
