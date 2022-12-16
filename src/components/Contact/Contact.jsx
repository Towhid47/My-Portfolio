import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Contact.css';

import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zzk0uno', 'template_m0i0v94', form.current, 'ATukjr63w9d-4Va5w')
      .then((result) => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Email Send',
            showConfirmButton: false,
            timer: 1500
          })
          e.target.reset();
      }, (error) => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Email Not Send',
            showConfirmButton: false,
            timer: 1500
          })
      });
  };




    return (
        <div className='container contact-section form-background p-4' id="contact">
             <div>
                  <h1 className='heading text-center  py-3'>Contact Me</h1>
             </div>
             
             <div>
               <Form className='' ref={form} onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="formBasicname">
                        <Form.Label className='fs-3'>Name</Form.Label>
                        <Form.Control className='border border-info bg-black text-info' name="user_name" type="text" placeholder="Enter Full Name" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='fs-3'>Email address</Form.Label>
                        <Form.Control className='border border-info bg-black text-info'  name="user_email" type="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='fs-3'>Message</Form.Label>
                        <Form.Control className='border border-info bg-black text-info' name="message" as="textarea" rows={3} placeholder="Enter Message Here..." required/>
                    </Form.Group>
                   
                    <div className='text-center'><Button className='button px-5 py-3 fs-5' type="submit">
                        Send
                    </Button></div>
               </Form> 
             </div>
        </div>
    );
};

export default Contact;