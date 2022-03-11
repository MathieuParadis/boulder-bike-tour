import React from 'react';

const PhotoContainer = ({photo}) => {
  const {server, id, secret, title} = photo;

  return (
    <div className="photo-container col-12 col-md-6 col-lg-4 col-xl-3 px-2 py-3">
      <div className="content">
        <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} key={id} />
      </div>
    </div>
  );
};

export default PhotoContainer;