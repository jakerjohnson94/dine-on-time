import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import recipeImg1 from '../resources/images/root/recipeRoot1.jpg';
import recipeImg2 from '../resources/images/root/recipeRoot2.jpg';
import recipeImg3 from '../resources/images/root/recipeRoot3.jpg';
import recipeImg4 from '../resources/images/root/recipeRoot4.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default () => (
  <div>
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay>
      <div>
        <img alt="img1" src={recipeImg1} />
      </div>
      <div>
        <img alt="img2" src={recipeImg2} />
      </div>
      <div>
        <img alt="img3" src={recipeImg3} />
      </div>
      <div>
        <img alt="img4" src={recipeImg4} />
      </div>
    </Carousel>
  </div>
);
