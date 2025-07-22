<script setup>
import { homeEpisodes } from '../data/homeData.js';
import SpotifyPlayer from '../components/SpotifyPlayer.vue';
import SubscribeForm from '../components/SubscribeForm.vue';
</script>

<template>
  <div>
    <div class="seasons-container">
      <h1>📀 Season 1 Preview</h1>
      <p class="description">
        Welcome to the Season 1 preview. These are highlights and clips from our full episodes.
        To hear the full journey, head back to the main page.
      </p>

      <div class="grid">
        <div class="card" v-for="ep in homeEpisodes" :key="ep.id">
          <h2>{{ ep.title }} <span class="tag">Preview</span></h2>
          <p>{{ ep.description }}</p>
          <SpotifyPlayer :episodeId="ep.episodeId" />
        </div>
      </div>
    </div>

    <div class="seasons-container">
      <h1>📅 Seasons Overview</h1>
      <p class="description">
        Explore our podcast seasons, each filled with unique stories and insights from various creators.
        Click on a season to dive deeper into its episodes.
      </p>

      <div class="grid">
        <div class="card" v-for="season in seasons" :key="season.id">
          <h2>{{ season.title }} <span class="tag">{{ season.year }}</span></h2>
          <p>{{ season.description }}</p>
          <router-link :to="{ name: 'SeasonDetail', params: { id: season.id } }">View Episodes</router-link>
        </div>
      </div>

      <!-- Subscribe form for updates -->
      <SubscribeForm />
    </div>
  </div>
</template>

<style scoped>
.seasons-container {
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
  background-color : darkturquoise;
  color: #222;
  text-align: center;
}

.description {
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #555;
  font-style: italic;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
}

.card {
  background: #fff;
  border: 2px dashed #8e44ad;
  border-radius: 12px;
  padding: 1rem;
  color: #333;
  transition: transform 0.2s;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: #e0e0ff;
  color: #000;
  position: relative;
}

.card:hover {
  transform: scale(1.02);
}

.tag {
  font-size: 0.8rem;
  background: #8e44ad;
  color: white;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: 0.5rem;
  vertical-align: middle;
}
</style>
