import React from 'react';
import './index.scss';

type ContentBoxProps = {
  children: React.ReactNode,
  className?: string
}
function ContentBox({ children, className }: ContentBoxProps) {
  return (
    <div className={`ContentBox p-4 mb-4 ${className}`}>
      {children}
    </div>
  );
}

export default ContentBox;
