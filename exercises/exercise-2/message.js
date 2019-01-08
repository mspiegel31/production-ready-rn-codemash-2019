import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Message extends React.Component {
  render() {

    const secretMessage = this.props.isASecret && "secret"
    const message = this.props.isASecret && "hello!"

    return (
      <View style={styles.container}>
        <Text style={styles.message}>Here's a {secretMessage} message for you: {message}</Text>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    opacity: .9,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5
  },
  message: {
    color: 'green',
  },
});
