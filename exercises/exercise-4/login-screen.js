import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Link, withRouter } from 'react-router-native';

class LoginScreen extends React.Component {
  state = {
    isLoggedIn: false,
    username: '',
  }

  handleSubmit() {
    if (this.state.username.length > 3) {
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onSubmitEditing={() => this.handleSubmit()}
          onChangeText={(text) => this.setState({ username: text })}
          placeholder="Username"
          value={this.state.username}
        />
        <Button 
          onPress={() => this.handleSubmit()}
          title="Login"
        />
        <Link to="/help"><Text>Help!</Text></Link>
      </View>
    );
  }  
}

export default withRouter(LoginScreen)

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

