// src/screens/HomeScreen.jsx
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={require('../../assets/logo.jpg')} style={styles.logo} /> {/* Updated to .jpg */}
    <Text style={styles.title}>Welcome to Empowering the Nation!</Text>
    <Button title="Courses" onPress={() => navigation.navigate('Courses')} />
    <Button title="Calculate Fees" onPress={() => navigation.navigate('Calculator')} />
    <Button title="Contact Us" onPress={() => navigation.navigate('Contact')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
