import React, { useState } from 'react';

const TitleAddon = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  return (
    <div
      className={isMobile ? 'd-none' : 'col-12'}
    ></div>
  );
};

export default TitleAddon;