import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './MyProjects.css';

/////////////// Projects Image Import///////////////////
import divine_travels from '../../assets/Projects images/divine-travels.jpg';
import developer_qna from '../../assets/Projects images/developer-qna.jpg';
import global_news from '../../assets/Projects images/global-news.jpg';

const MyProjects = () => {
    return (
        <div>
              {/* /////////////// My Projects Section Start ///////////////////////////*/}
          <section className='ms-5 mt-5 p-5'>
            <h1 className='heading text-center mb-5'>My Projects</h1>
            <div className='cards-container'>
                {/* ////////////// Divine Travels Project /////////////////// */}
                <div className='card-container'>  
                    <a href="https://divine-travels-f5721.web.app/" className='text-decoration-none'>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={divine_travels} />
                            <Card.Body>
                                <Card.Title className='project-name fs-2'>Divine Travels</Card.Title>
                                <Card.Text>
                                    <p className='mt-3 text-light'>This is the Travel Agency Service Website. It is built by using ReactJS</p>
                                </Card.Text>
                                <a href="./details"><Button className='button-small w-100'>Details</Button></a>
                            </Card.Body>
                        </Card>
                    </a>
                </div>

                {/* ////////////// Developer QnA Project /////////////////// */}
                <div className='card-container'>  
                    <a href="https://developer-qna.netlify.app/" className='text-decoration-none'>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={developer_qna} />
                            <Card.Body>
                                <Card.Title className='project-name fs-2'>Developer QnA</Card.Title>
                                <Card.Text>
                                    <p className='mt-3 text-light'>This is the Quiz test Website based on the Web Development Topics. It is built by using ReactJS</p>
                                </Card.Text>
                                <a href="./details"><Button className='button-small w-100'>Details</Button></a>
                            </Card.Body>
                        </Card>
                    </a>
                </div>

                {/* ////////////// Global News Project /////////////////// */}
                <div className='card-container'>  
                    <a href="https://global-news47.netlify.app/" className='text-decoration-none'>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={global_news} />
                            <Card.Body>
                                <Card.Title className='project-name fs-2'>Global News</Card.Title>
                                <Card.Text>
                                    <p className='mt-3 text-light'>This is the News Portal Website . Built by HTML5 , CSS3 and Javascript</p>
                                </Card.Text>
                                <a href="./details"><Button className='button-small w-100'>Details</Button></a>
                            </Card.Body>
                        </Card>
                    </a>
                </div>
            </div>
          </section>

         {/*/////////////// My Projects Section End ///////////////////////////////// */}
        </div>
    );
};

export default MyProjects;