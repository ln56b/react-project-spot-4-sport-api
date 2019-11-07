import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import './MapCheckbox.css';

function MapCheckbox() {
  return (
    <Card>
      <CardBody className="message">
        <Form className="container-checkbox">
          <FormGroup>
            <Label for="exampleCheckbox">Distances</Label>
            <div className="box-list">
              <CustomInput type="checkbox" id="exampleCustomCheckbox" label="1 km" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="5 km" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="10 km" />
              <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="20 km" />
            </div>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}

export default MapCheckbox;
