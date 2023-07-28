import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../MainLayout';
import Header from '../../components/header/Header';
import { baseService } from '../../sevices/api';
import TopChartItem from './component/TopChartItem';
import { TrackInfoType } from '../../constants/models/interfaces/main/trackInfo';

const Main = () => {
  const [spotifyId, setSpotifyId] = useState<string>('02wk5BttM0QL38ERjLPQJB');
  const navigate = useNavigate();

  const setToken = (): void => {
    const queryParams = new URLSearchParams(window.location.hash.substring(1));
    const token = queryParams.get('access_token');

    if (token != null) {
      sessionStorage.setItem('token', token);
      const cleanURL = window.location.href.split('#')[0];
      window.history.replaceState({}, document.title, cleanURL);
    } else {
      const storedToken = sessionStorage.getItem('token');
      if (storedToken == '') {
        navigate('/login');
      }
    }
  };

  const mainInfo = () => {
    baseService
      .getJSON('/v1/me')
      .then((resp) => {
        if (resp.data != null) {
          console.log(resp.data);
          sessionStorage.setItem('profileImgUrl', resp.data.images[0].url);
          sessionStorage.setItem('userDisplayName', resp.data.display_name);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        getTrack();
      });
  };

  const [trackInfo, setTrackInfo] = useState<TrackInfoType[]>([]);

  const getTrack = () => {
    baseService
      .getJSON('/v1/me/top/tracks?limit=10')
      .then((resp) => {
        if (resp.data != null) {
          const tracks = resp.data.items;
          const newTrackInfoList = tracks.map((track: any) => ({
            trackId: track.id,
            trackName: track.name,
            artistName: track.artists[0].name,
            imageUrl: track.album.images[0].url,
            albumName: track.album.name,
          }));
          setTrackInfo(newTrackInfoList);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        console.log('ok');
      });
  };

  useEffect(() => {
    setToken();
    mainInfo();
  }, []);

  return (
    <MainLayout>
      <Header title="Home"></Header>
      <div className="px-[16px]">
        <div className=" w-full bottom-0 h-[323px]  "></div>

        <TopChartItem trackInfo={trackInfo} />
      </div>
    </MainLayout>
  );
};

export default Main;
