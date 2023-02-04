import React, { useState, useRef, useEffect } from "react";
import { SlControlPlay, SlControlPause } from "react-icons/sl";
import { CgPlayTrackNextO, CgPlayTrackPrevO } from "react-icons/cg";

function MusicPlayer() {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1.0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const audioTracks = [
    "music/lumx.mp3",
    "music/Marnik x Orange INC - Across The Sun.mp3",
    "music/mazza-feat_-sary-bang-bang-klaas-remix.mp3",
  ];

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [currentIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioElement.current.pause();
    } else {
      audioElement.current.play();
    }
  };

  const handleOnLoad = () => {
    setDuration(audioElement.current.duration);
  };

  const handleOnEnded = () => {
    setIsPlaying(false);
  };

  const handleOnTimeUpdate = () => {
    setCurrentTime(audioElement.current.currentTime);
  };

  // const handleVolumeChange = (event) => {
  //     console.log(event.target.value)
  //   setVolume(event.target.value);
  // };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % audioTracks.length);
    console.log(currentIndex);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + audioTracks.length) % audioTracks.length
    );
    setIsPlaying(true);
  };

  return (
    <div className="musicPlayerContainer">
      <audio
        ref={audioElement}
        src={audioTracks[currentIndex]}
        onLoadedData={handleOnLoad}
        onEnded={handleOnEnded}
        onTimeUpdate={handleOnTimeUpdate}
        volume={volume}
      />
      <CgPlayTrackPrevO
        onClick={handlePrevious}
        style={{ cursor: "pointer" }}
      />
      {isPlaying ? (
        <SlControlPause onClick={togglePlay} style={{ cursor: "pointer" }} />
      ) : (
        <SlControlPlay onClick={togglePlay} style={{ cursor: "pointer" }} />
      )}
      <CgPlayTrackNextO onClick={handleNext} style={{ cursor: "pointer" }} />
      <div>
        {currentTime | 0} / {duration | 0}
      </div>
      {/* <input type="range" min={0} max={1} step={0.01} value={volume} onChange={(e) => handleVolumeChange(e)} /> */}
    </div>
  );
}

export default MusicPlayer;
