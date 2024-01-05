import React, { useState, useEffect } from 'react';

const Button = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 768);
    });
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className='col-12 border border-primary mt-3'>
          <p>Upload video</p>
        </div>
      ) : (
        <img src="/logo.png" alt="logo" className='col-12'/>
      )}
    </div>
  );
};

export default Button;