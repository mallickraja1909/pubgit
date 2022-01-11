import React from "react";
// import Slider from "react-slick";
import { Col, Row, Card} from 'antd';
import r1 from "../../assets/images/r1.png";
import r2 from "../../assets/images/r2.png";
import r3 from "../../assets/images/r3.png";
// import '../home/reviews.css';
// import slider from "react-slick/lib/slider";
import '../../App.css';
const { Meta } = Card;

function AppReview() {
    
    return(
        
      <div id="pricing" className="block pricingBlock bgGray">
        <div className="container-fluid">
        
          <h2>Choose a plan to fit your needs</h2>
                  <h1>What Our Patients Says</h1>
                  
             </div>     
<div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card>
        <Meta
      avatar={<img src={r1} alt="Hospital Care" width="70" height="70"></img>}
      title="Amy Admas"
      description="Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?"
    />
        </Card>
      </Col>
      <Col span={8}>
        <Card >
        <Meta
      avatar={<img src={r2} alt="Hospital Care" width="70" height="70"></img>}
      title="David Warner"
      description="Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?"
    />
        </Card>
      </Col>
      <Col span={8}>
        <Card >
        <Meta
      avatar={<img src={r3} alt="Hospital Care" width="70" height="70"></img>}
      title="Jonh wall"
      description="Neque porro quisquam est, qui dolorem ipsum quia consectetur, dolor sit amet, consectetur, numquam Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Molestias, at?"
    />
        </Card>
      </Col>
    </Row>
    
    
  </div>
            </div>
    );
}
export default AppReview;