
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';
import { FaSearch } from "react-icons/fa";
import vector from '../assets/Vector.png';
import { Link } from 'react-router-dom';

function Favorites() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [FavsearchKey, setFavSearchKey] = useState('');

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(favorites);
  }, []);

  const refreshFavorites = (updatedFavorites) => {
    setFavoriteMovies(updatedFavorites);
  };

  const filteredMovies = FavsearchKey
    ? favoriteMovies.filter(movie =>
        movie.title.toLowerCase().includes(FavsearchKey.toLowerCase())
      )
    : favoriteMovies;

  return (
    <>
      <div className="headerDiv">
        <Header />
      </div>
      <div className="headerDiv d-flex justify-content-between ">
        <div className='headl ps-lg-4 pb-3' style={{ display: 'flex', alignItems: 'center' }}>
          <Link to='/'>
            <button className="btnBack me-3">
              <img className="vector mb-2" src={vector} />
            </button>
          </Link>
          <span className='Myfont'><b>My Favourites</b></span>
        </div>

        <div className="favinput-wrapper">
          <FaSearch id="search-icon" style={{ width: '40px' }} />
          <input
            className='ms-2'
            placeholder="Search from favourites"
            onChange={(e) => setFavSearchKey(e.target.value)}
          />
        </div>
      </div>
      <Container>
        <Row>
          {filteredMovies.length > 0 ? 
            filteredMovies.map((movie, index) => (
              <Col className='mb-5' sm={12} md={6} lg={3} key={index}>
                <MovieCard displayData={movie} refreshFavorites={refreshFavorites} />
              </Col>
            )) : 
            <div className="text-danger fw-bolder">No content found</div>
          }
        </Row>
      </Container>
    </>
  );
}

export default Favorites;

