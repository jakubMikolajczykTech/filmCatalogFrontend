import React from 'react';

const generateVideoIframe = (videoId: string): React.ReactNode => {
  return (
    <iframe
      width="200px"
      height="150px"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      //className="ratio ratio-4x3"
      //{iframe}
    />
  );
};

const Main = () => {
  const videoIds = ['VIDEO', 'VIDEO', 'VIDEO', 'VIDEO', 'VIDEO', 'VIDEO', 'VIDEO', 'VIDEO', 'VIDEO', 'VIDEO', 'VIDEO', 'VIDEO'];

  const generateVideoFrames = () => {
    return videoIds.map((videoId) => generateVideoIframe(videoId));
  };

  const videoFrames = generateVideoFrames();

  return (
    <div className="border border-primary wrapper">
      <div className='main col-md-10 d-flex justify-content-center flex-wrap' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {videoFrames.map((iframe, index) => (
            <div className="iframe col-4 d-flex border border-danger m-2" style={{ height: '150px', width: '200px' }} key={index}>
              {iframe}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;