// import React from 'react';

// import { Form, Input, Button, Checkbox } from 'antd';
// const { TextArea } = Input;

// function AppAppointment() {
//   return (
//     <div id="contact" className="block appointmentBlock">
//       <div className="container-fluid">
//         <div className="titleHolder">
//           <h2>Get in Touch</h2>
//           <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
//         </div>
//         <Form
//           name="normal_login"
//           className="login-form"
//           initialValues={{ remember: true }}
//         >
//           <Form.Item
//             name="fullname"
//             rules={[
//               { 
//                 required: true,
//                 message: 'Please enter your full name!' 
//               }]
//             }
//           >
//             <Input placeholder="Full Name" />
//           </Form.Item>
//           <Form.Item
//             name="email"
//             rules={[
//               {
//                 type: 'email',
//                 message: 'The input is not valid E-mail!',
//               },
//               {
//                 required: true,
//                 message: 'Please input your E-mail!',
//               },
//             ]}
//           >
//             <Input placeholder="Email Address"/>
//           </Form.Item>
//           <Form.Item
//             name="telephone"
//           >
//             <Input placeholder="Telephone" />
//           </Form.Item>
//           <Form.Item
//             name="subject"
//           >
//             <Input placeholder="Subject" />
//           </Form.Item>
//           <Form.Item
//             name="message"
//           >
//             <TextArea placeholder="Message" />
//           </Form.Item>
//           <Form.Item>
//             <Form.Item 
//               name="remember" 
//               valuePropName="checked"
//               noStyle
//               rules={[
//                 { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
//               ]}
//             >
//               <Checkbox>I agree with terms and conditions.</Checkbox>
//             </Form.Item>
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit" className="login-form-button">
//               Submit
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>  
//   );
// }

// export default AppAppointment;
import React from "react";
import { TreeSelect } from 'antd';
import { Form, Input, Button,DatePicker,Select  } from 'antd';
// import '../home/appointment.css';

const { Option } = Select;
const { TreeNode } = TreeSelect;
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '{label} is required!',
    types: {
      email: '{label} is not a valid email!',
      number: '{label} is not a valid number!',
      phone: '{label} is not a valid number!',
    },
    number: {
      range: '{label} must be between {min} and {max}',
    },
  };
  
const AppContact= () => {
    const onFinish = (values) => {
      console.log(values);
    };
    const prefixSelector = (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
          <Option value="86">+91</Option>
          
        </Select>
      </Form.Item>
    );

    return(
      <div id="contact" className="block contactBlock">
        <div  className="block contactBlock">
        <div className="container-fluid">
            <div className="titleHolder">
               <h1><strong>Request </strong>Appointment</h1>
            </div>
    
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['user', 'name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
            {/* <Input/> */}
        {/* </Form.Item> */}
        <Form.Item label="Date">
               <DatePicker />
      </Form.Item>
      <Form.Item  label="Departments">
      <TreeSelect
      showSearch
     
      style={{ width: '50%' }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
    >
        <TreeNode value="parent 1"  title="DIAGNOSTIC"></TreeNode>
        <TreeNode value="parent 2" title="PSYCOLOGICAL"></TreeNode>
    </TreeSelect>
    </Form.Item>
    <Form.Item  label="Doctors">
      <TreeSelect
      showSearch
     
      style={{ width: '50%' }}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
    >
         <TreeNode value="parent 1"  title="DIAGNOSTIC"></TreeNode>
        <TreeNode value="parent 2" title="PSYCOLOGICAL"></TreeNode>
    </TreeSelect>
    </Form.Item>
               
        <Form.Item name={['user', 'introduction']} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit ">
            Submit Now
          </Button>
        </Form.Item>
      </Form>
      </div>
      </div>
      </div>
    );
  }

export default AppContact;