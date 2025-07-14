
import React, { useEffect, useState } from 'react';
import SeasonList from '../components/SeasonList';
import EpisodeCard from '../components/EpisodeCard';

export default function PodcastApp() {
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);

  useEffect(() => {
    fetch('/data/episodes.json')
      .then(res => res.json())
      .then(data => {
        setSeasons(data);
        setSelectedSeason(data[0].season);
      });
  }, []);

  const currentSeason = seasons.find(s => s.season === selectedSeason);

  return (
    <div className="podcast-app">
      <header className="preview">
        <h1>Welcome To The "No Filter Needed Podcast"</h1>
        <p>No filter Needed” is a raw, unfiltered podcast that goes beyond the camera lens. Host “Dandy The Poet”, an artist still finding his way sits down with content creators and digital influencers to talk about what really goes on behind the curated feed. This is for the people who think creators have it all. It’s time to learn the truth from burnout to breakthroughs</p>
      </header>

      {seasons.length > 0 && (
        <SeasonList
          seasons={seasons}
          selected={selectedSeason}
          onSelectSeason={setSelectedSeason}
        />
      )}

      <div className="episodes">
        {currentSeason?.episodes.map(ep => (
          <EpisodeCard key={ep.id} episode={ep} />
        ))}
      </div>
    </div>
  );
}
