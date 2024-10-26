import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const CalculatorScreen = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const courses = [
    { name: 'First Aid', fee: 1500 },
    { name: 'Sewing', fee: 1500 },
    // ...more courses
  ];

  const calculateTotal = () => {
    let total = selectedCourses.reduce((acc, course) => acc + course.fee, 0);
    let discount = 0;
    if (selectedCourses.length === 2) discount = 0.05;
    else if (selectedCourses.length === 3) discount = 0.10;
    else if (selectedCourses.length > 3) discount = 0.15;
    return total - total * discount;
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Calculate Fees:</Text>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <Button title={item.name} onPress={() => setSelectedCourses([...selectedCourses, item])} />
        )}
      />
      <Text>Total Fee: R{calculateTotal()}</Text>
    </View>
  );
};

export default CalculatorScreen;
