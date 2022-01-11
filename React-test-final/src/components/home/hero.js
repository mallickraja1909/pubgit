// import React from 'react';
// import { Button } from 'antd';

// import { Carousel } from 'antd';

// const items = [
//   {
//     key: '1',
//     title: 'Welcome to Hospital Care',
//     content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
//   },
//   {
//     key: '2',
//     title: 'Work better together. Schedule meetings',
//     content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
//   },
//   {
//     key: '3',
//     title: 'The best app to increase your productivity',
//     content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
//   },
// ]

// function AppHero() {
  
//   return (
//     <div id="hero" className="heroBlock">
//       <Carousel>
//         {items.map(item => {
//           return (
//             <div key={item.key} className="container-fluid">
//               <div className="content">
//                 <h3 >{item.title}</h3>
//                 <p  >{item.content}</p>
//                 <div className="btnHolder">
//                   <Button type="primary" danger ghost size="large"> Emergency Ambulance Service</Button>
                 
//                 </div>
//               </div>
//             </div>  
//           );
//         })}
//       </Carousel>
//     </div>
//   );
// }

// export default AppHero;

import React from "react";
import Slider from "react-slick";
import "antd/dist/antd.css";
import "./hero.css";

function AppHero() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div id="hero">
      <Slider {...settings}>
        <div className="heroImg1">
          <h1 className="hero-text-h1">Best Medical Services</h1>
        </div>
        <div className="heroImg2">
          <h1 className="hero-text-h1">Our Best Surgeons</h1>
        </div>
        <div className="heroImg3">
          <h1 className="hero-text-h1">We Care About Your Health</h1>
        </div>
      </Slider>
    </div>
  );
}

export default AppHero;
