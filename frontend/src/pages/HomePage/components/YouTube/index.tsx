import React from 'react';

function YouTube(props: { videoId: string; }) {
  return (
    <div className="YouTube">
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title={props.videoId}
          src={`https://www.youtube.com/embed/${props.videoId}`}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default YouTube;
