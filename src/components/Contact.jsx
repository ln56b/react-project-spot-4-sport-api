import React from 'react';
import NavBar from './NavBar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Contact.css';

function ContactPage() {
  return (
    <div className="form-container">
      <div className="intro">
        <h2>GET IN TOUCH</h2>
        <p>You have any specific question?</p>
        <p>You're at the right place!</p>
      </div>
      <Form className="form-contact">
        <FormGroup className="formGroup-contact">
          <Label className="label-form-contact" for="firstName">
            First Name
          </Label>
          <Input type="password" name="password" className="text-area" placeholder="First Name" />
        </FormGroup>
        <FormGroup className="formGroup-contact">
          <Label className="label-form-contact" for="lastName">
            Last Name
          </Label>
          <Input type="password" name="password" className="text-area" placeholder="Last Name" />
        </FormGroup>
        <FormGroup className="formGroup-contact">
          <Label className="label-form-contact" for="email">
            Email
          </Label>
          <Input type="email" name="email" className="text-area-email" placeholder="Email" />
        </FormGroup>
        <FormGroup className="formGroup-contact">
          <Label className="label-form-contact" for="examplePassword">
            Number Phone
          </Label>
          <Input type="password" name="password" className="text-area" placeholder="Phone Number" />
        </FormGroup>
        <FormGroup className="formGroup-contact">
          <Label className="label-form-contact" for="exampleText">
            Text Area
          </Label>
          <Input
            type="textarea"
            name="text"
            className="text-area"
            placeholder="Any questions or suggestions"
            rows="3"
          />
        </FormGroup>
      </Form>
      <Button
        outline
        color="danger"
        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=guillaume.trouche.6@gmail.com"
        target="_blank"
      >
        Submit
      </Button>
    </div>
  );
}

export default ContactPage;
