import React from 'react';
import { View, Text, Button } from 'react-native';

const CoursesScreen = ({ navigation }) => (
  <View style={{ padding: 20 }}>
    <Text>Six-Month Courses:</Text>
    <Button title="First Aid" onPress={() => navigation.navigate('CourseDetail', { course: 'First Aid' })} />
    <Button title="Sewing" onPress={() => navigation.navigate('CourseDetail', { course: 'Sewing' })} />
    <Button title="Landscaping" onPress={() => navigation.navigate('CourseDetail', { course: 'Landscaping' })} />
    <Button title="Life Skills" onPress={() => navigation.navigate('CourseDetail', { course: 'Life Skills' })} />
    <Text>Six-Week Courses:</Text>
    <Button title="Child Minding" onPress={() => navigation.navigate('CourseDetail', { course: 'Child Minding' })} />
    <Button title="Cooking" onPress={() => navigation.navigate('CourseDetail', { course: 'Cooking' })} />
    <Button title="Garden Maintenance" onPress={() => navigation.navigate('CourseDetail', { course: 'Garden Maintenance' })} />
  </View>
);

export default CoursesScreen;
