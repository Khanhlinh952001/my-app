import React, { useRef, useState } from 'react';
import '../styles/style.css';  // Đảm bảo bạn đã import file CSS

const AudioPlayer = ({ audio }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="left-0 top-20 absolute z-50">
      {audio ? (
        <div>
          <audio ref={audioRef}>
            <source src={audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <button
            className="bg-blue-600 text-white text-xs w-20 p-2 mt-2"
            onClick={handlePlayPause}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      ) : (
        <p>No audio available</p>
      )}
    </div>
  );
};

export default AudioPlayer;
