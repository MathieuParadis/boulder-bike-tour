// CONFIG IMPORTS
import React, {useEffect, useState} from 'react';

// COMPONENT IMPORTS
import PhotoContainer from '../components/PhotoContainer';

const Photos = () => {
  let page_number = 0;

  const [photos, setPhotos] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [page, setPage] = React.useState(page_number);


  const getPhotosData = (page) => {
    const base_url = 'https://www.flickr.com/services/rest/';
    const method = 'flickr.photos.search';
    const api_key = "02a2c3456e80bd16280dea2e4004e27b";
    const tags_array = ['mountain-bike', 'bike', 'race', 'colorado', 'mountain'];
    const tags = `${tags_array[0]}%2C+${tags_array[1]}%2C+${tags_array[2]}%2C+${tags_array[3]}%2C+${tags_array[4]}%2C`;
    const per_page = 40;

    const url = `${base_url}?method=${method}&api_key=${api_key}&tags=${tags}&tag_mode=all&per_page=${per_page}&page=${page}&format=json&nojsoncallback=1`

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
        setCurrentPage(response.photos.page);
        setTotalPages(response.photos.pages);
    });
  }
  
  const displayNextPage = () => {
    // page_number += 1;
    setPage(page + 1);
    // getPhotosData(page_number);
    // alert(page_number);
    // getPhotosData(12);
  }

  useEffect(() => { 
    getPhotosData(page);
  }, [page]);
  
  return (
    <div className="photos py-3">
      { photos && photos.length > 0 &&
        <>
          <div className="photos-container d-flex flex-wrap justify-content-between align-items-center">
            {
              photos.map((photo) => {
                return (
                  <PhotoContainer photo={photo} key={photo.id} />
                )
              })
            }
          </div>
          <button onClick={() => displayNextPage()}>Next page</button>      
          Page: {currentPage} / {totalPages}
          Page: {page} / {totalPages}

        </>
      }
    </div>
  );
};

export default Photos;