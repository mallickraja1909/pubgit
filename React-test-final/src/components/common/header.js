import React, { useState } from 'react';
import logo1 from '../../assets/images/logo.png';

import { Anchor, Drawer, Button } from 'antd';

const { Link } = Anchor;



function AppHeader() {
  const [visible, setVisible] = useState(false);
  

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
        <img src={logo1} alt="logo1" height={50} width={100} />
          {/* <a href="http://google.com">HOSPITAL CARE</a> */}
          {/* <h1 style={{color: "grey"}}>The Care You Need</h1> */}
          <h1 style={{color:"purple"}}>HOSPITAL CARE</h1>
      <p>The Care You Need</p>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home"  />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero"  title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;