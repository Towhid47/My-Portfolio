import React from "react";
import { Carousel } from "react-bootstrap";
import './DeveloperQnA.css';

import img1 from '../../../assets/Projects images/Project_Details_image/DeveloperQnA/1.jpg';
import img2 from '../../../assets/Projects images/Project_Details_image/DeveloperQnA/2.jpg';
import img3 from '../../../assets/Projects images/Project_Details_image/DeveloperQnA/3.jpg';

const DeveloperQnA = () => {
  return (
    <div className="mt-5">
      {/*///////// Carousel Image Slider//////////////////////  */}
      <div className="w-75 container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Home Page"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Topics Page"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="Quiz Test Page"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/*//////// Project Details and Features //////////////////*/}
      <div className="container mt-5 background p-4">
           <h1 className="heading text-center">Developer QnA</h1>
           <p className="my-4">This is an Online Quiz Test Website based on Web Development Topics.Designed with eye-catching graphics and lots of amazing features, this is just irresistible.</p>
           <div className='my-3'>
                 <a href="https://developer-qna.netlify.app/" className='btn button text-light'>Live Website</a>{" "}<a href="https://github.com/Towhid47/developer-quiz--Basic-REACT-React-Router-DOM" className='btn button text-light'>Github Client Repo</a>
            </div>
           <h2>Features:</h2>
           <ul>
               <li>User can find Different Topics about Web Development</li>
               <li>User can take Quiz of his preferable Topic</li>
               <li>Blog Page is included in website to know more about Web Development</li>
               <li>From Statistics Page , user can know how many quizes he Done</li>
               <li>This is Responsive Website. User can use it in his mobile, laptops and any other Devices</li>
           </ul>
          <div  className="d-none d-lg-block">
              <h2 className="my-4">Technology Used :</h2>
              <span className="technology p-2 rounded-2">Vanilla CSS</span> <span className="technology p-2 rounded-2">React Bootstrap</span> <span className="technology p-2 rounded-2">React JS</span> <span className="technology p-2 rounded-2">React Router</span>
          </div>


      </div>

    </div>
  );
};

export default DeveloperQnA;
