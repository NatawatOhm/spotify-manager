import React, { useState } from 'react';
import trackCover from '../../assets/image/supershy.png';
import playBack from '../../assets/icon/skip-back.svg';
import pause from '../../assets/icon/pause.svg';
import playTrack from '../../assets/icon/play-track.svg';
import playNext from '../../assets/icon/play-next.svg';
import volumeUp from '../../assets/icon/volume-up.svg';
import vollumOff from '../../assets/icon/volume-off.svg';
import shuffle from '../../assets/icon/shuffle.svg';
import repeat from '../../assets/icon/Repeat.svg';

import './index.css';

const PlayerBar = () => {
  const [artist, setArtist] = useState<string>('New Jeans');
  const [track, setTrack] = useState<string>('Super Shy');

  const [startTrack, setStartTrack] = useState<number>(10);
  const [endTrack, setEndTrack] = useState<number>(100);
  const [duration, setDuration] = useState<number>((endTrack - startTrack) / 100);
  const durationTrack = {
    backgroundColor: '#333333',
    background: '#2BD268',
    width: '500px',
    height: '5px',
    borderRadius: '3px',
  };

  return (
    <div>
      <div className="player-container flex">
        <div className="flex items-center w-[40%]">
          <img src={trackCover} alt="" />
          <div className="px-[30px]">
            <div>{track}</div>
            <div>{artist}</div>
          </div>
        </div>
        <div className="flex gap-[25px]">
          <img src={playBack} width={30} alt="" />
          <img src={pause} alt="" />
          <img src={playNext} width={30} alt="" />
          <div className="flex items-center">
            <div className="text-white px-[15px]">{startTrack}</div>
            <div style={durationTrack}></div>
            <div className="text-white px-[15px]">{endTrack}</div>
          </div>
        </div>
        <div className="border-4 border-indigo-500/100 w-full">vollum set section</div>
      </div>
    </div>
  );
};

export default PlayerBar;
