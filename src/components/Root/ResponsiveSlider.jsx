import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import recipeImg1 from '../../resources/images/root/recipeRoot1.jpg';
import recipeImg2 from '../../resources/images/root/recipeRoot2.jpg';
import recipeImg3 from '../../resources/images/root/recipeRoot3.jpg';
import recipeImg4 from '../../resources/images/root/recipeRoot4.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const randomRecipeImages = [
  'https://media.blueapron.com/recipes/3387/square_newsletter_images/1536768941-364-0035-0760/1015_2PRE08_Meatloaf_1089_SQ_hi_res.jpg',
  'https://media.blueapron.com/recipes/3284/square_newsletter_images/1536769011-364-0040-7826/1015_2PRE07_Sesame_Chicken_Noodles_081_SQ_hi_res.jpg',
  'https://media.blueapron.com/recipes/3305/square_newsletter_images/1537387421-365-0025-9712/1022_2PP_Chicken_7422_WEB_SQ_hi_res.jpg',
  'https://media.blueapron.com/recipes/3391/square_newsletter_images/1537374189-367-0008-1489/1022_2PV1_Pizza_2054_WEB_SQ_hi_res.jpg',
  'https://media.blueapron.com/recipes/3309/square_newsletter_images/1537387777-365-0006-6447/1022_2PRE08_Spanish-Beef-Ragu_17445_WEB_SQ_hi_res.jpg',
  'https://media.blueapron.com/recipes/3378/square_newsletter_images/1537387667-365-0039-0089/1022_2PRE07_Miso-Grain-Bowl_2018_WEB_SQ_hi_res.jpg',
  'https://media.blueapron.com/recipes/3265/square_newsletter_images/1536251938-396-0008-3953/0917_2PRE08_Bob-Burger_1080_horiz_SQ_hi_res.jpg',
];

export default () => (
  <div>
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay>
      {randomRecipeImages.map((img, index) => (
        <img src={img} alt={index} key={index} />
      ))}
    </Carousel>
  </div>
);
