<script setup>
import { homeEpisodes } from '../data/homeData.js';
import SpotifyPlayer from '../components/SpotifyPlayer.vue';
</script>

<template>
  <div class="home-container">
    <h1>🎧 Imizuzu no Asi: Minutes with Asi</h1>
    <p>
      This season we have Asi, a talented content creator navigating her twenties,
      sharing her journey through the ups and downs of life. Join us as we explore
      her experiences, insights, and the lessons learned along the way.
    </p>

    <div class="grid">
      <div class="card" v-for="ep in homeEpisodes" :key="ep.id">
        <h2>{{ ep.title }}</h2>
        <p>{{ ep.description }}</p>

        <!-- Show Spotify player for each episode -->
        <SpotifyPlayer :episodeId="ep.episodeId" />
      </div>
    </div>
  </div>
</template>



<style scoped>
.home-container {
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
  color: #000;
  background-color: aqua;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
  padding: 0 1rem;
}

.card {
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  color: skyblue;
  background-color: darkslategrey;
}

.card:hover {
  transform: translateY(-4px);
}

.thumb {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

.audio-player {
  margin-top: 0.5rem;
  width: 100%;
}

.spotify-section {
  margin-top: 3rem;
}
</style>
