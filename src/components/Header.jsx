
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import icon from '../assets/Icon.png';
import clapboard from '../assets/clapperboard.png';
import '../index.css';
import { Link } from 'react-router-dom';


function Header({ setSearchKey,insideHome }) {
    return (
        <>
            <div className="HeaderDiv ">
                <Navbar expand="lg" className="bg-body-tertiary " style={{ border: 'none' }}>
                    <Container className='mt-3 mb-3'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button className="btn1 me-3 ">
                                <img className="mb-5" src={clapboard} style={{ width: '100%', height: '100%' }} alt="Clapboard" />
                            </button>
                            <span style={{fontFamily:"DM Sans"}}><b>GET MOVIES</b></span>
                        </div>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto ms-3">
                                <div className="input-wrapper mt-2">
                                    <FaSearch id="search-icon" />
                                    <input
                                        className='ms-2'
                                        placeholder="Search movies and series"
                                        onChange={(e) => setSearchKey(e.target.value)}
                                    />
                                </div>
                            </Nav>
                            <Nav className="ms-auto mt-2">
                                {
                                    insideHome && <Link to='/fav'>
                                    <button style={{ width: '153px', height: '40px', backgroundColor: "#FF0059", border: 'none', borderRadius: '15px', padding: '8px', color: 'white', fontSize: '15px' }}>
                                        <img src={icon} className='me-2' alt="Icon" />My favourites
                                    </button>
                                </Link>
                                }
                               
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Header;


