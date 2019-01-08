import React from 'react';
import { Route } from 'react-router';
import LoginScreen from './login-screen';
import HelpScreen from './HelpScreen';
import HomeScreen from './HomeScreen';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';


export default class RouteController extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/"
          component={LoginScreen}
        />
        <Route
          exact path="/home"
          component={LoginScreen}
        />
        <Route
          exact path="/help"
          component={HelpScreen}
        />
      </React.Fragment>
    );
  }
}