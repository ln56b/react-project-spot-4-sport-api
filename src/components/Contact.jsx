import React from 'react';
import NavBar from './NavBar';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './contact.css';

function ContactPage() {
  return (
    <div className="formulaire">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Form>
    </div>
  );
}

export default ContactPage;
