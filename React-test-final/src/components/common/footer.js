import React from "react";
import { Layout, Button,} from 'antd';
import { Card, Col, Row } from 'antd';
import { BackTop } from 'antd';
// import '../common/footer.css';
import logo from '../../assets/images/logo.png';
import logo6 from '../../assets/images/logo6.jpg';
import { PhoneTwoTone, MailOutlined, CompassOutlined, RightOutlined, CaretUpOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Footer } = Layout;

function AppFooter() {
    return(
        <Layout className="layout">
           <div className="logo" />
                <Footer>
                <div className="site-card-wrapper">
                <Row gutter={16}>
      <Col span={8}>
        <img src={logo} alt="Hospital Care" width="180" height="90"></img> 
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus?</p>
       <p><CompassOutlined />Modamba, NY 80021, United States</p>
       <p><MailOutlined />support@hospitalcare.com</p>
       <p><PhoneTwoTone />(88017) +123 4567</p>
      </Col>
      <Col span={8}>
          <p><strong>SERVICES</strong></p>
          <p><Button type="link"><RightOutlined />Orthopadics Liabilities</Button></p>
          <p><Button type="link"><RightOutlined />Dental Clinic</Button></p>
          <p><Button type="link"><RightOutlined />Dormamu Clinic</Button></p>
          <p><Button type="link"><RightOutlined />Psycological Clinic</Button></p>
          <p><Button type="link"><RightOutlined />Gynaecological Clinic</Button></p>
    
      </Col>
      <Col span={8}>
        <p><strong>RECENT POSTS</strong></p>
       <p> <Meta
      avatar={<img src={logo6} alt="Hospital Care" width="70" height="70"></img>}
       title="A lesson adip isicing"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem."
        /></p>
       <p> <Meta
      avatar={<img src={logo6} alt="Hospital Care" width="70" height="70"></img>}
      title="How to make an event"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem."
        /></p>
      </Col>
    </Row>
    </div>

                </Footer>
                <Footer style={{ textAlign: 'center' }}>COPYRIGHT HOSPITALCARE ©2022
                <BackTop>
                  <div className="goTop"><Button type="primary" shape="circle"><i ><CaretUpOutlined /></i></Button></div>
          </BackTop>
          </Footer>
        </Layout>
    );
}

export default AppFooter;