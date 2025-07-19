import React from "react";

function EpisodeCard({ episode }) {
  const { title, description, image, isPreview,  } = episode;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {image && (
        <img src={episode.image} alt={episode.title} className="episode-image" />

      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>

        {isPreview && (
          <span className="inline-block mt-3 px-2 py-1 text-xs font-medium text-white bg-indigo-600 rounded-full">
            Preview
          </span>
        )}
      </div>
    </div>
  );
}

export default EpisodeCard;

