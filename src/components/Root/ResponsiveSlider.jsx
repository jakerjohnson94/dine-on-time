import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import recipeImg1 from '../../resources/images/root/recipeRoot1.jpg';
import recipeImg2 from '../../resources/images/root/recipeRoot2.jpg';
import recipeImg3 from '../../resources/images/root/recipeRoot3.jpg';
import recipeImg4 from '../../resources/images/root/recipeRoot4.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default () => (
  <div>
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay>
      <div>
        <img
          alt="img1"
          src="https://media.blueapron.com/recipes/3356/square_newsletter_images/1538075930-365-0008-4817/1008_2PM_Seared-Streak_16706_WEB_SQ_hi_res.jpg"
        />
      </div>
      <div>
        <img
          alt="img2"
          src="https://media.blueapron.com/recipes/3041/square_newsletter_images/1536177848-365-0028-3149/1008_2PV1_Udon_Fried_Eggs_089SQ_hi_res.jpg"
        />
      </div>
      <div>
        <img
          alt="img3"
          src="https://media.blueapron.com/recipes/3283/square_newsletter_images/1536769540-364-0054-5326/1015_2PM_Beef_Quesadillas_048_SQ_hi_res.jpg"
        />
      </div>
      <div>
        <img
          alt="img4"
          src="https://media.blueapron.com/recipes/3378/square_newsletter_images/1537387667-365-0039-0089/1022_2PRE07_Miso-Grain-Bowl_2018_WEB_SQ_hi_res.jpg"
        />
      </div>
      <div>
        <img
          alt="img5"
          src="https://media.blueapron.com/recipes/3280/square_newsletter_images/1536769148-364-0045-5014/1015_2PV3_Panini_070_SQ_hi_res.jpg"
        />
      </div>
      <div>
        <img
          alt="img5"
          src="https://media.blueapron.com/recipes/3391/square_newsletter_images/1537374189-367-0008-1489/1022_2PV1_Pizza_2054_WEB_SQ_hi_res.jpg"
        />
      </div>
    </Carousel>
  </div>
);
