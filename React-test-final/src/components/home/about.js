import React from "react";


import { Row, Col } from 'antd';

import logo from '../../assets/images/stethoscope.png';
import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo4.jpg';
import logo5 from '../../assets/images/logo5.png';


const items = [
    {
      key: '1',
      icon: <img src={logo} alt="Ortho" width="80" height="90"></img>,
      title: 'ORTHOPEDICS',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur ex sunt, est aspernatur at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?',
    },
    {
      key: '2',
      icon: <img src={logo1} alt="Ortho" width="80" height="90"></img>,
      title: 'DIAGINOSTIC',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur ex sunt, est aspernatur at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?',
    },
    {
      key: '3',
      icon: <img src={logo2} alt="Ortho" width="80" height="90"></img>,
      title: 'PSYCOLOGY',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur ex sunt, est aspernatur at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?',
    },
    {
        key: '4',
        icon: <img src={logo3} alt="Ortho" width="80" height="90"></img>,
        title: 'GENERAL TREATMENT',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus veniam illo quibusdam pariatur ex sunt, est aspernatur at debitis eius vitae vel nostrum dolorem labore autem corrupti odit mollitia?',
    },
    {
        key: '5',
        icon: <img src={logo4} alt="Ortho" width="80" height="90"></img>,
        title: 'SONOGRAM',
        content: 'The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added. then a dental prosthetic is added.then a dental pros- thetic is added.',
    },
    {
        key: '6',
        icon: <img src={logo5} alt="Ortho" width="80" height="90"></img>,
        title: 'X-RAY',
        content: 'The implant fixture is first placed, so that it ilikely to osseointegrate, then a dental prosthetic is added. then a dental prosthetic is added.then a dental pros- thetic is added.',
    },

  ]

function AppAbout() {
    return(
       <div id="about" className="block aboutblock">
           <div className="container-fluid">
               <div className="titleHolder">
                   <h2>Best Features of Our Hospital</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni in at debitis
                      nam error officia vero tempora alias? Sunt?</p>

               </div>
               
               <Row gutter={[24, 24]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>

           </div>

       </div>
    );
}

export default AppAbout;