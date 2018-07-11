import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';
import { employeeCreate } from '../actions';

class EmployeeCreate extends Component {
  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({
      name,
      phone,
      shift: shift || 'Monday'
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
