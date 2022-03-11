// CONFIG IMPORTS
import React from 'react';

const Photos = () => {
  const getPhotosData = () => {
    const url_base = "https://www.flickr.com/services/rest/";
    const method = "flickr.photos.search";
    const api_key = "1cfbe2c81c21a47e88cb0033b5fdc2dc";
    const tags = ['bike', 'biking'];
    const url = `${url_base}?method=${method}&api_key=${api_key}&tags=${tags[0]}%2C+${tags[1]}&per_page=40&format=json&nojsoncallback=1&auth_token=72157720835749557-09fa56a1f5066771&api_sig=014926c1bd49b4b0e3e9993667a20c1f`;
  
    const URL = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=02a2c3456e80bd16280dea2e4004e27b&tags=bike%2C+biking%2C+bread&per_page=40&format=rest&auth_token=72157720835761134-f7d2ed54f9d9c21b&api_sig=48de0f68401f3a8e12c21ef82e220353'

    fetch(url, {
      method: "GET",
    })
    .then(res => res.json())
    .catch(error => {
        console.error('Error:', error);
    })
    .then(response => {
        console.log("first way");
        console.log(response);
    });

  }

  const displayPhoto = (photoData) => {
    const server = photoData.server;
    const id = photoData.id;
    const secret = photoData.secret;
    const title = photoData.title;

    return (
      <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
    )
  }

  const displayPhotos = (photos) => {
    photos.photo.map((photo) => {
      displayPhoto(photo);
    })
  }


getPhotosData();



  return (
    <div className="photos">
      <div className="photos-container">

      </div>
    </div>
  );
};

export default Photos;