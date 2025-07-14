
import React from 'react';

export default function SeasonList({ seasons, selected, onSelectSeason }) {
  return (
    <div className="season-list">
      {seasons.map(season => (
        <button
          key={season.season}
          className={selected === season.season ? 'active' : ''}
          onClick={() => onSelectSeason(season.season)}
        >
          {season.title}
        </button>
      ))}
    </div>
  );
}
