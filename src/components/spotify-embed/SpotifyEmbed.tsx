import React from 'react';
interface SpotifyEmbedProps {
  src: string;
  width: string;
  height: string;
}
const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({ src, width, height }) => {
  return (
    <div className="absolute left-0 w-full bottom-0 ">
      <iframe
        style={{ borderRadius: '12px' }}
        src={src}
        width={width}
        height={height}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
