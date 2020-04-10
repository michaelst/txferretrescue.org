import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom'

function LinkBox(props: { children: React.ReactNode; to: string; }) {
  return (
    <div className="LinkBox mb-4">
      <Link to={props.to}>
        <div className="p-4">
          {props.children}
        </div>
      </Link>
    </div>
  );
}

export default LinkBox;
