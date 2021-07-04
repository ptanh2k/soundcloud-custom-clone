import React from "react";

const TrackList = () => {
  const tracks = [
    {
      id: 1,
      title: "Em khong hieu",
      artist: "Changg",
    },
    {
      id: 2,
      title: "August",
      artist: "Taylor Swift",
    },
  ];

  return (
    <div className="track-list">
      {tracks.map((track) => {
        return (
          <div className="track" key={track.id}>
            {track.title}
          </div>
        );
      })}
    </div>
  );
};

export default TrackList;
