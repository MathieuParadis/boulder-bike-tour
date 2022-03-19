// CONFIG IMPORTS
import React, {useEffect, useState} from 'react';
import ReactLoading from 'react-loading';

// COMPONENT IMPORTS
import PhotoContainer from '../components/PhotoContainer';

const Photos = () => {
  let page_number = 1;

  const [photos, setPhotos] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(page_number);


  const getPhotosData = (page) => {
    const base_url = 'https://www.flickr.com/services/rest/';
    const method = 'flickr.photos.search';
    const api_key = "f7282b46660922789b184d3820e81803";
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
    setPage(page + 1);
    window.scrollTo(0, 0)
  }

  const displayPreviousPage = () => {
    setPage(page - 1);
    window.scrollTo(0, 0)
  }
  
  useEffect(() => { 
    getPhotosData(page);
  }, [page]);

  useEffect(() => {
  }, []);
  
  return (
    <div className="photos py-3">
      { photos && photos.length > 0 ?
        (
          <>
            <div className="photos-container d-flex flex-wrap justify-content-between align-items-center mb-3">
              {
                photos.map((photo) => {
                  return (
                    <PhotoContainer photo={photo} key={photo.id} />
                  )
                })
              }
            </div>
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex">
                {
                  currentPage !== 1 &&
                  <>
                    <div onClick={() => displayPreviousPage()} className="button-gallery d-flex justify-content-center align-items-center me-2 p-2">Prev</div>      
                  </>
                }
                {
                  currentPage !== totalPages &&
                  <>
                    <div onClick={() => displayNextPage()} className="button-gallery d-flex justify-content-center align-items-center p-2">Next</div>      
                  </>
                }
              </div>
              <p className="h5 m-0"><strong>Page: </strong>{currentPage}</p>
            </div>
          </>
        ) : 
        (
          <div className="d-flex justify-content-center align-items-center">
            <ReactLoading type={"spinningBubbles"} color={"#3385d6"} height={'20%'} width={'20%'} />
          </div>
        )
      }
    </div>
  );
};

export default Photos;