import React from 'react';

const Nav = () => {
  return (
    <div className="nav border border-primary h-25">
      <div className='option col-12 h-50 border border-primary d-flex flex-wrap justify-content-evenly align-items-center'>
        <div className='button-1 col-2 border border-primary h-75 d-flex justify-content-center align-items-center'>1</div>
        <div className='button-2 col-2 border border-primary h-75 d-flex justify-content-center align-items-center'>2</div>
        <div className='button-3 col-2 border border-primary h-75 d-flex justify-content-center align-items-center'>3</div>
        <div className='button-4 col-2 border border-primary h-75 d-flex justify-content-center align-items-center'>4</div>
      </div>

      <div className='filter col-12 h-50 border border-primary'>
        <input type="text" className="form-control h-100" />
      </div>
    </div>
  );
};

export default Nav;