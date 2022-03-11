import React from 'react';

const PhotoContainer = ({photo}) => {
  const {server, id, secret, title} = photo;

  return (
    <div className="photo-container col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="content">
        <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} key={id} />
      </div>
    </div>
  );
};

export default PhotoContainer;