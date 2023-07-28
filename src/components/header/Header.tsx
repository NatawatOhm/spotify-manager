import React from 'react';
import searchLogo from '../../assets/icon/search.svg';
import './index.css';

interface HeaderProp {
  title: string;
}

const Header: React.FC<HeaderProp> = ({ title }) => {
  const profileImgUrl = sessionStorage.getItem('profileImgUrl') ?? '';
  const userDisplayName = sessionStorage.getItem('userDisplayName');

  return (
    <div>
      <div className="header-container">
        <div className="left-0">{title}</div>
        <div className="bg-white gap-2  px-[16px] w-[400px] h-[48px] flex items-center text-[#6B7280] rounded-[107px]">
          <img src={searchLogo} width={16} alt="" />
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="w-full outline-none text-[#6B7280]"
          />
        </div>
        <div className="bg-[#1F1F1F] justify-between  px-[16px] w-[278px] h-[48px] flex items-center text-[#6B7280] rounded-[107px]">
          <img className="rounded-[260px]" src={profileImgUrl} alt="" />
          <div className="text-white"> {userDisplayName}</div>
          <img src={searchLogo} width={16} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
