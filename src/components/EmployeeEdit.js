import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';

import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
  state = {
    showModal: false
  };

  componentWillMount() {
    Object.keys(this.props.employee).forEach(key =>
      this.props.employeeUpdate({ prop: key, value: this.props.employee[key] })
    );
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress = () => {
    const { phone, shift } = this.props;

    text(phone, `Your upcoming shift is on ${shift}.`);
  }

  onFire = () => {
    const { phone, shift } = this.props;

    text(phone, `Your upcoming shift is on ${shift}.`);
  }

  onCancel = () => {
    this.setState({
      showModal: false
    });
  }

  onConfirm = () => {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: true })}>
            Fire
          </Button>
        </CardSection>

        <Confirm
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          visible={this.state.showModal}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
