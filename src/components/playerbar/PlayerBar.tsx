import React, { useState } from 'react';
import trackCover from '../../assets/image/supershy.png';
import './index.css';

const PlayerBar = () => {
  const [artist, setArtist] = useState<string>('New Jeans');
  const [track, setTrack] = useState<string>('Super Shy');

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
        <div className="border-4 border-indigo-500/100 w-full">track player section</div>
        <div className="border-4 border-indigo-500/100 w-full">vollum set section</div>
      </div>
    </div>
  );
};

export default PlayerBar;
