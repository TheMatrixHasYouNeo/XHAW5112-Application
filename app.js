import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CourseDetailScreen from './src/screens/CourseDetailScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Empowering the Nation' }}
        />
        <Stack.Screen 
          name="Courses" 
          component={CoursesScreen} 
          options={{ title: 'Available Courses' }}
        />
        <Stack.Screen 
          name="CourseDetail" 
          component={CourseDetailScreen} 
          options={({ route }) => ({ title: route.params.course })} 
        />
        <Stack.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{ title: 'Contact Us' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
