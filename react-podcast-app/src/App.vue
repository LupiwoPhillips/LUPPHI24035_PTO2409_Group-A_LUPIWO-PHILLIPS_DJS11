<template>
  <div>
    <DarkModeToggle />
    <Navbar />

    <main class="container">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import DarkModeToggle from './components/DarkModeToggle.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Optional: Container spacing */
.container {
  padding: 1.5rem;
}
</style>
