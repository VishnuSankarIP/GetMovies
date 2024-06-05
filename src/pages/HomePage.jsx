
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../index.css';
import banner from '../assets/Poster.png';
import play from '../assets/Play.png';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';
import { getAllMoviesAPI } from '../services/allAPI';

function HomePage() {
    const [allMovies, setAllMovies] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    // fetch all movies
    const getAllMovies = async () => {
        const result = await getAllMoviesAPI();
        if (result?.status === 200) {
            setAllMovies(result?.data);
        }
    };

    useEffect(() => {
        getAllMovies();
    }, []);

    // search movie

    const searchMovies = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchKey.toLowerCase())
    );

    const isSearching = searchKey.length > 0;

    return (
        <>
            <header>
                <Header setSearchKey={setSearchKey} insideHome />
            </header>

            <main>
                {!isSearching && (
                    <div className="HeroDiv">
                        <Container>
                            <figure className='position-relative' style={{ textAlign: 'center' }}>
                                <img src={banner} height={'654px'} className='img-fluid' alt="Banner" />
                            </figure>
                            <figcaption>
                                <p className='p1 mb-3'>Spider-Man : Into <br />The Spider Verse</p>
                                <p className='p2 '>Spider-Man: Across the Spider-Verse," now zipping into the theater-verse, is the long-awaited follow-up to 2018's "Spider-Man: Into the Spider-Verse," a revelatory thrill ride that deservedly won the Oscar for animation.</p>
                                <button className="watch-trailer-button"><img className='me-2' src={play} alt="Play" /><b>Watch Trailer</b></button>
                            </figcaption>
                        </Container>
                    </div>
                )}
                    
               
                    <div className="row">
                        <div className="col">
                            <h2 className="headl pt-lg-3 ps-lg-5 pb-3">{isSearching ? 'Search ' : 'Movies'}</h2>
                        </div>
                        {isSearching && (
                            <div>
                                <p className='headl pt-lg-2 ps-lg-5'>{searchMovies.length} results found</p>
                            </div>
                        )}

                    </div>
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <Row>
                                {(isSearching ? searchMovies : allMovies).length > 0 ? 
                                    (isSearching ? searchMovies: allMovies).map((movie, index) => (
                                        <Col className='mb-5' sm={12} md={6} lg={3} key={index}>
                                            <MovieCard displayData={movie} />
                                        </Col>
                                    )) : 
                                    <div className="text-danger fw-bolder">No content found</div>
                                }
                            </Row>
                        </div>
                        <div className="col-lg-1"></div>
                   
                </div>
            </main>
        </>
    );
}

export default HomePage;


