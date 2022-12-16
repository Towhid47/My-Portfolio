import React from 'react';
import { Carousel } from 'react-bootstrap';

import img1 from '../../../assets/Projects images/Project_Details_image/DivineTravels/1.jpg';
import img2 from '../../../assets/Projects images/Project_Details_image/DivineTravels/2.jpg';
import img3 from '../../../assets/Projects images/Project_Details_image/DivineTravels/3.jpg';

const DivineTravels = () => {
    return (
        <div>
            <div className="mt-5">
      {/*///////// Carousel Image Slider//////////////////////  */}
      <div className="w-75 container">
        <Carousel variant="dark">
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
           <h1 className="heading text-center">Divine Travels</h1>
           <p className="my-4">This is the Travel Agency Service Website. This website provides a lot of destinations all over the World. Specially, Japan , China, Russia, Bangladesh, Canada, Italy, Germany, Uzbekistan, Turkey and so on . It helps to inform the customers about the destinations and Prices of Travel Packages. Our Client can be able to Login and Register in this website and be able to Add More destinations and Add More Reviews . </p>
           <div className='my-3'>
                 <a href="https://divine-travels-f5721.web.app/" className='btn button text-light'>Live Website</a>{" "}<a href="https://github.com/Towhid47/Divine-Travels-Website-Client-Side-REACT" className='btn button text-light'>Github Client Repo</a>{" "}<a href="https://github.com/Towhid47/Divine-Travels-Website-Server-Side-REACT" className='btn button text-light'>Github Server Repo</a>
            </div>
           <h2>Features:</h2>
           <ul>
               <li>User can choose different destinations for travel.</li>
               <li>Each destinations provides many informations such as place descriptions, place reviews, Days of Travel and Travel prices and more.</li>
               <li>User can Login this website through email , password .</li>
               <li>We also provide gmail login option.</li>
               <li>if user logged in , he can able to add reviews and can add more destinations.</li>
               <li>This is Responsive Website. User can use it in his mobile, laptops and any other Devices</li>
           </ul>
           <div className='d-none d-lg-block'>
                <h2 className="my-4">Technology Used :</h2>
                <span className="technology p-2 rounded-2 m-1">Vanilla CSS</span> <span className="technology m-1 p-2 rounded-2">React Bootstrap</span> <span className="m-1 technology p-2 rounded-2">React JS</span> <span className="m-1 technology p-2 rounded-2">React Router</span> <span className="m-1 technology p-2 rounded-2">Firebase</span> <span className="m-1 technology p-2 rounded-2">Node JS</span> <span className="m-1 technology p-2 rounded-2">Express JS</span> <span className="m-1 technology p-2 rounded-2">Vercel</span> <span className="m-1 technology p-2 rounded-2">MongoDB</span>
                        
           </div>
            
            
            
            


      </div>

    </div>
        </div>
    );
};

export default DivineTravels;