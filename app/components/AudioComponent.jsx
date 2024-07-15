import React from 'react';

const AudioComponent = ({ audio }) => {
  return (
    <div className="right-0 top-0 absolute z-50">
      {audio ? (
        <audio controls autoPlay>
          <source src={audio} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>No audio available</p>
      )}
    </div>
  );
};

export default AudioComponent;
