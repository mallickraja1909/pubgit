// import React from 'react';

// // import image1 from '../../assets/images/modern-design.jpg';
// // import image2 from '../../assets/images/clean-design.jpg';
// // import image3 from '../../assets/images/great-support.jpg';
// // import image4 from '../../assets/images/easy-customise.jpg';
// // import image5 from '../../assets/images/unlimited-features.jpg';
// // import image6 from '../../assets/images/advanced-option.jpg';
// import dormitory from '../../assets/images/dormitory.jpg';
// import germs from '../../assets/images/germs.jpg';
// import psycology from '../../assets/images/psycology.jpg';

// import { Row, Col } from 'antd';
// import { Card } from 'antd';
// const { Meta } = Card;

// function AppFeature() {
 
//   return (
//     <div id="feature" className="block featureBlock bgGray">
//       <div className="container-fluid">
//         <div className="titleHolder">
//           <h2>Provided Services</h2>
//           <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum
//           dolor sit amet. qui suscipit atque fugiat officia corporis rerum eaque
//           neque totam animi, sapiente culpa. Architecto!</p>
//         </div>
        
//         <Row gutter={[16, 16]}>
//           <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
//             <Card
//               hoverable
//               cover={<img alt="Modern Design" src={germs} />}
//             >
//               <Meta title="GERMS" />
//             </Card>
//           </Col>
//           <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
//             <Card
//               hoverable
//               cover={<img alt="Test" src={psycology} />}
//             >
//               <Meta title="PSYCOLOGY" />
//             </Card>
//           </Col>
//           <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
//             <Card
//               hoverable
//               cover={<img alt="Test" src={dormitory} />}
//             >
//               <Meta title="DORMITORY" />
//             </Card>
//           </Col>
//           {/* <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
//             <Card
//               hoverable
//               cover={<img alt="Test" src={image4} />}
//             >
//               <Meta title="BUY MEDICINE" />
//             </Card>
//           </Col>
//           <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
//             <Card
//               hoverable
//               cover={<img alt="Test" src={image5} />}
//             >
//               <Meta title="BOOK HEALTH CHECK" />
//             </Card>
//           </Col>
//           <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
//             <Card
//               hoverable
//               cover={<img alt="Test" src={image6} />}
//             >
//               <Meta title="COVID-19 VACCINATION" />
//             </Card>
//           </Col> */}
//         </Row>
//       </div>
//     </div>
//   );
// }

// export default AppFeature;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card } from "antd";
// import "../home/services.css";
import dormitory from '../../assets/images/dormitory.jpg';
import germs from '../../assets/images/germs.jpg';
import psycology from '../../assets/images/psycology.jpg';

const { Meta } = Card;


// export default 
function AppFeature() {
  var settings = {
    dots: true,
    infinite: true,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div id="feature" className="block featureBlock bgGray">
     
    <div className="container-fluid">
      <div className="titleHolder">
        <h1>Provided Services</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet. qui suscipit atque fugiat officia corporis rerum eaque
          neque totam animi, sapiente culpa. Architecto!
        </p>
      </div>
      <div className="site-card-wrapper">
        <Slider {...settings}>
       <div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={germs} />}>
                <Meta title="GERMS" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                
               </Card>
        </div>
        <div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={psycology} />}>
                <Meta title="PSYCOLOGY" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>     

               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={germs} />}>
                <Meta title="GERMS" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>           
                    
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={dormitory}/>}>
                <Meta title="DORMITORY" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
               
               </Card>
               
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={germs} />}>
                <Meta title="GERMS" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={dormitory} />}>
                <Meta title="DORMITORY" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
                
               </Card>
        </div><div>
        <Card  bordered={true}
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={psycology} />}>
                <Meta title="PSYCOLOGY" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, aspernatur." /><br/>
               
               </Card>
               
        </div>
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default AppFeature;
