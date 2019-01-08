import React from 'react';
import { View, Text, Button, TextInput, Alert, StyleSheet } from 'react-native';

export default class LoginScreen extends React.Component {
  state = {
    isLoggedIn: false,
    username: ''
  }
  handleSubmit = () => {
    if (this.state.username.length >= 4) {
      Alert.alert("Logging you in")
      this.setState({ isLoggedIn: true })
    }
  }
  
  handleChangeText = username => this.setState({ username })

  render() {
    const loginMessage = !this.state.isLoggedIn ? "You are not currently logged in" : `You are logged in as ${this.state.username}`
    return (
      <View style={styles.container}>
        <TextInput
          onSubmitEditing={this.handleSubmit}
          placeholder="Username"
          value={this.state.username}
          onChangeText={this.handleChangeText}
        />
        <Button
          onPress={this.handleSubmit}
          title="Login"
        />
        <Text style={styles.loginStatus}>{loginMessage}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  loginStatus: {
    marginTop: 30,
  },
});