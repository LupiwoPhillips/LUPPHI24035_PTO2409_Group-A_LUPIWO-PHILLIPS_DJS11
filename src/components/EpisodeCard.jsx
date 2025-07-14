import React from 'react';

export default function EpisodeCard({ episode }) {
  const { title, description, audioUrl, videoUrl } = episode;

  const isYouTube = videoUrl && (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be"));
  const getYouTubeEmbed = (url) => {
    const videoId = url.includes("youtu.be")
      ? url.split("/").pop().split("?")[0]
      : new URL(url).searchParams.get("v");

    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="episode-card p-4 border rounded mb-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mb-2">{description}</p>

      {videoUrl ? (
        isYouTube ? (
          <iframe
            width="100%"
            height="315"
            src={getYouTubeEmbed(videoUrl)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <video controls width="100%">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      ) : (
        <audio controls className="w-full">
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}
