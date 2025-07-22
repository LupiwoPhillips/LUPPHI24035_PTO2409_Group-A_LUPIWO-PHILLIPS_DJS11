<!-- src/components/SpotifyPlayer.vue -->
<template>
  <iframe
    :src="embedUrl"
    width="100%"
    height="152"
    frameborder="0"
    allowfullscreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    style="border-radius:12px"
    title="Spotify Episode Player"
  ></iframe>
</template>

<script>
export default {
  name: "SpotifyPlayer",
  props: {
    episodeId: {
      type: String,
      required: true
    }
  },
  computed: {
    embedUrl() {
      return `https://open.spotify.com/embed/episode/${this.episodeId}`;
    }
  }
};
</script>
