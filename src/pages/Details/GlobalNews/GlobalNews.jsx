import React from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from '../../../assets/Projects images/Project_Details_image/GlobalNews/1.jpg';
import img2 from '../../../assets/Projects images/Project_Details_image/GlobalNews/2.jpg';
import img3 from '../../../assets/Projects images/Project_Details_image/GlobalNews/3.jpg';

const GlobalNews = () => {
    return (
        <div>
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
           <h1 className="heading text-center">Global News</h1>
           <p className="my-4">This is the News Portal Website . This is the responsive website builded by basic Technologies.</p>
            <div className='my-3'>
                 <a href="https://global-news47.netlify.app/" className='btn button text-light'>Live Website</a>{" "}<a href="https://github.com/Towhid47/News-Portal-Only-DOM-manipulation" className='btn button text-light'>Github Client Repo</a>
            </div>
           <h2>Features:</h2>
           <ul>
               <li>It is designed by using Bootstrap</li>
               <li>It provides news of different categories.</li>
               <li>After Clicking on a specific news a modal opens up that shows the details of that news.</li>
               <li>The Blog page shows some informations about web development topics.</li>
               <li>This is Responsive Website. User can use it in his mobile, laptops and any other Devices</li>
           </ul>
          <div  className="d-none d-lg-block">
              <h2 className="my-4">Technology Used :</h2>
              <span className="technology p-2 rounded-2">HTML5</span> <span className="technology p-2 rounded-2">Vanilla CSS</span> <span className="technology p-2 rounded-2">Bootstrap</span> <span className="technology p-2 rounded-2">JavaScript</span> <span className="technology p-2 rounded-2">DOM</span> <span className="technology p-2 rounded-2">Rest API</span>
          </div>


      </div>

    </div>
        </div>
    );
};

export default GlobalNews;