

import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import icon from '../assets/Icon.png';

function MovieCard({ displayData, refreshFavorites }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteExists = existingFavorites.some(fav => fav.id === displayData.id);
    setIsFavorite(favoriteExists);
  }, [displayData]);

  const toggleFavorite = (movie) => {
    let existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteExists = existingFavorites.some(fav => fav.id === movie.id);
    
    if (favoriteExists) {
      existingFavorites = existingFavorites.filter(fav => fav.id !== movie.id);
      alert('Removed from favorites');
    } else {
      existingFavorites.push(movie);
      alert('Added to favorites');
    }

    localStorage.setItem('favorites', JSON.stringify(existingFavorites));

    if (refreshFavorites) {
      refreshFavorites(existingFavorites);
    }

    setIsFavorite(!favoriteExists);
  };

  return (
    <>
      <Card className='moviecard' style={{ height: '465px', fontFamily: "DM Sans", border: 'none' }} >
        <Card.Img variant="top" style={{ padding: '10px', borderRadius: '30px' }} src={displayData.banner_image} height={'370px'} width={'150px'} />
        <button
          className={`btn-wishlist ${isFavorite ? 'active' : 'inactive'}`}
          onClick={() => toggleFavorite(displayData)}
        >
          <i class="fa-solid fa-heart"></i>
        
        </button>

        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Card.Text>
              {displayData.year}
            </Card.Text>
            <Card.Title>{displayData.title}</Card.Title>
            <Card.Text>
              {displayData.genre}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default MovieCard;
