import React from "react";
import EpisodeCard from "./EpisodeCard";


const previews = [
  {
    id: "p1",
    title: "🔥 Welcome to the Show",
    description: "Catch a glimpse of what's coming this season. We talk to Lupiwo Phillips about his education and career.",
    isPreview: true,
    image: "./images/episode1.jpg" // Example image URL
  },
  {
    id: "p2",
    title: "🎤 Behind the Mic",
    description: "How he manages education, music and podcasting.",
    isPreview: true,
    image: "./images/episode2.jpg" // Example image URL
  }
];

const seasons = [
  {
    id: 1,
    name: "Season 1",
    episodes: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Episode ${i + 1}`,
      description: `This is the description for episode ${i + 1} of Season 1.`,
      videoUrl: "https://youtu.be/-HIMdFphl2k?si=y6--fgG15-zPAlR2"
    }))
  },
  {
    id: 2,
    name: "Season 2",
    episodes: Array.from({ length: 5 }, (_, i) => ({
      id: i + 11,
      title: `Episode ${i + 1}`,
      description: `This is the description for episode ${i + 1} of Season 2.`
    }))
  }
];

function SeasonList() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-10">
      <section>
        <h2 className="text-3xl font-bold mb-4 text-indigo-700">🎬 Previews</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {previews.map(preview => (
            <EpisodeCard key={preview.id} episode={preview} />
          ))}
        </div>
      </section>

      {seasons.map(season => (
        <section key={season.id}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{season.name}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {season.episodes.map(ep => (
              <EpisodeCard key={ep.id} episode={ep} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default SeasonList;
  