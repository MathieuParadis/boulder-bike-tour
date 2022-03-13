import React from 'react';

const Banner = ({img, title}) => {

  return (
    <div className="banner">
      <img src={img} alt="banner" className="banner-img"/>
      <div className="banner-overlay">rg</div>
      <h1 className="banner-title">{title}</h1>
    </div>
  );
};

export default Banner;