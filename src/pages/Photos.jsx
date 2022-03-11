// CONFIG IMPORTS
import React, {useEffect, useState} from 'react';

const Photos = () => {
  const [photos, setPhotos] = React.useState(null);

  const photosContainer = document.querySelector('photos-container');

  const getPhotosData = () => {
    const url_base = "https://www.flickr.com/services/rest/";
    const method = "flickr.photos.search";
    const api_key = "1cfbe2c81c21a47e88cb0033b5fdc2dc";
    const tags = ['bike', 'biking'];
    const url = `${url_base}?method=${method}&api_key=${api_key}&tags=${tags[0]}%2C+${tags[1]}&per_page=40&format=json&nojsoncallback=1&auth_token=72157720835749557-09fa56a1f5066771&api_sig=014926c1bd49b4b0e3e9993667a20c1f`;
  
    fetch(url, {
      method: "GET",
    })
    .then(res => res.json())
    .catch(error => {
        console.error('Error:', error);
    })
    .then(response => {
        console.log(response);
        setPhotos(response.photos.photo[0]);
        console.log(response.photos.photo)
    });

  }

  const displayPhoto = (photo_data) => {
    const {server, id, secret, title} = photo_data
    return (
      <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
    )
  }

  const displayPhotos = (photos) => {
    photos.map((photo) => displayPhoto(photo))
  }



  useEffect(() => {
    getPhotosData();
  }, []);
  

  return (
    <div className="photos">
      <div className="photos-container">
        { photos && 
          displayPhoto(photos)
        }

      </div>
    </div>
  );
};

export default Photos;