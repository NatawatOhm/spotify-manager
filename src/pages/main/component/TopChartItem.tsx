import React from 'react';
import playLogo from '../../../assets/icon/play.svg';
import { TrackInfoType } from '../../../constants/models/interfaces/main/trackInfo';
import './index.css';

const TopChartItem: React.FC<{ trackInfo: TrackInfoType[] }> = ({ trackInfo }) => {
  return (
    <div>
      <div className="topchar-container flex-col">
        <div>Top charts</div>
        {trackInfo.map((item) => (
          <div className="flex items-center gap-[12px]">
            <img src={playLogo} width={40} alt="" />
            <img src={item.imageUrl} width={60} alt="" />
            <div>
              <p>{item.trackName}</p>
              <p className="text-[#9CA3AF]">{item.artistName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopChartItem;
