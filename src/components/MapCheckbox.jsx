import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import './MapCheckbox.css';

function MapCheckbox() {
  return (
    <Card>
      <CardBody className="message">
        <CardTitle className="box-title">Filters</CardTitle>
        <Form className="container">
          <FormGroup>
            <Label for="exampleCheckbox">Distances</Label>
            <div className="box-list">
              <CustomInput type="checkbox" id="exampleCustomCheckbox" label="1 km" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="5 km" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="10 km" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="20 km" />
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="exampleCheckbox">Sports</Label>
            <div className="box-list">
              <CustomInput type="checkbox" id="exampleCustomCheckbox5" label="Fitness" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox6" label="Swiming" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox7" label="Basket" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox8" label="Volley" />
            </div>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}

export default MapCheckbox;
