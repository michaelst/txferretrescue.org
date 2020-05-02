import React from 'react';

function YouTube(props: { videoId: string; }) {
  return (
    <div className="YouTube">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.videoId}`} allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default YouTube;
