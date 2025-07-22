<template>
  <div v-if="episode">
    <h2>{{ episode.title }}</h2>
    <p>{{ episode.description }}</p>
    <audio controls class="audio-player">
      <source :src="episode.audio" type="audio/mp3" />
    </audio>
  </div>
  <div v-else>
    <p>Episode not found</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { seasons } from '../data/podcastData.js'

const route = useRoute()
const id = parseInt(route.params.id)
const episode = seasons.flatMap(season => season.episodes).find(e => e.id === id)
</script>
