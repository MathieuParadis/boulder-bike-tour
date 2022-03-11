// CONFIG IMPORTS
import React, {useEffect, useState} from 'react';

// COMPONENT IMPORTS
import PhotoContainer from '../components/PhotoContainer';

const Photos = () => {
  const [photos, setPhotos] = React.useState(null);

  const getPhotosData = () => {
    const api_key = "02a2c3456e80bd16280dea2e4004e27b";
    let page = 6;
    // const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=mountain-bike%2C+bike%2C+race%2C+mountain%2C+colorado%2C&tag_mode=all&per_page=40&page=${page}&format=json&nojsoncallback=1&auth_token=72157720835761134-f7d2ed54f9d9c21b&api_sig=b8d8f4ab9da81ca4b502eff15120e630`

    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=mountain-bike%2C+bike%2C+race%2C+mountain%2C+colorado%2C&tag_mode=all&per_page=40&page=${page}&format=json&nojsoncallback=1`

    fetch(url, {
      method: "GET",
    })
    .then(res => res.json())
    .catch(error => {
        console.error('Error:', error);
    })
    .then(response => {
        console.log(response);
        setPhotos(response.photos.photo);
    });
  }

  useEffect(() => {
    getPhotosData();
  }, []);
  
  return (
    <div className="photos">
      { photos &&
        <div className="photos-container d-flex flex-wrap justify-content-between align-items-center">
          {
            photos.map((photo) => {
              return (
                <PhotoContainer photo={photo} key={photo.id} />
              )
            })
          }
        </div>
      }
    </div>
  );
};

export default Photos;