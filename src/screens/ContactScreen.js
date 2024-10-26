// src/screens/ContactScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Basic validation
    if (name && email && message) {
      Alert.alert('Thank you!', 'Your message has been sent.');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
});

export default ContactScreen;
