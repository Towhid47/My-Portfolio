import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Contact.css';
const Contact = () => {
    return (
        <div className='container contact-section form-background p-4'>
             <div>
                  <h1 className='heading text-center  py-3'>Contact Me</h1>
             </div>
             
             <div>
               <Form className=''>
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label className='fs-3'>Name</Form.Label>
                        <Form.Control className='border border-info bg-black text-info' type="text" placeholder="Enter Full Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-3'>Email address</Form.Label>
                        <Form.Control className='border border-info bg-black text-info' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='fs-3'>Message</Form.Label>
                        <Form.Control className='border border-info bg-black text-info' as="textarea" rows={3} placeholder="Enter Message Here..." />
                    </Form.Group>
                   
                    <div className='text-center'><Button className='button px-5 py-3 fs-5' type="submit">
                        Submit
                    </Button></div>
               </Form> 
             </div>
        </div>
    );
};

export default Contact;