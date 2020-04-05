import React from 'react';
import './index.scss';

function ContentBox(props: { children: React.ReactNode; }) {
  return (
    <div className="ContentBox">
      {props.children}
    </div>
  );
}

export default ContentBox;
