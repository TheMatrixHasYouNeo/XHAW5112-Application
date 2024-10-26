import React from 'react';
import { View, Text } from 'react-native';

const CourseDetailScreen = ({ route }) => {
  const { course } = route.params;

  const courseDetails = {
    // Six-month courses
    'First Aid': {
      fee: 'R1500',
      purpose: 'Provide first aid awareness and support',
      content: [
        'Wounds and bleeding',
        'Burns and fractures',
        'Emergency scene management',
        'Cardio-Pulmonary Resuscitation (CPR)',
        'Respiratory distress (choking, blocked airway)',
      ],
    },
    'Sewing': {
      fee: 'R1500',
      purpose: 'Garment tailoring and alterations',
      content: [
        'Types of stitches',
        'Threading a sewing machine',
        'Sewing buttons, zips, hems, and seams',
        'Alterations',
        'Designing and sewing new garments',
      ],
    },
    'Landscaping': {
      fee: 'R1500',
      purpose: 'Provide landscaping services for gardens',
      content: [
        'Indigenous and exotic plants',
        'Fixed structures (fountains, statues, benches)',
        'Balancing plants and trees in a garden',
        'Aesthetic plant shapes and colors',
        'Garden layout',
      ],
    },
    'Life Skills': {
      fee: 'R1500',
      purpose: 'Provide essential life skills',
      content: [
        'Opening a bank account',
        'Basic labor law (know your rights)',
        'Basic reading and writing literacy',
        'Basic numeric literacy',
      ],
    },
    // Six-week short courses
    'Child Minding': {
      fee: 'R750',
      purpose: 'Basic care for children and babies',
      content: [
        'Birth to six-month-old baby needs',
        'Seven-month to one-year-old needs',
        'Toddler needs',
        'Educational toys',
      ],
    },
    'Cooking': {
      fee: 'R750',
      purpose: 'Prepare and cook nutritious family meals',
      content: [
        'Nutritional requirements for a healthy body',
        'Types of protein, carbohydrates, and vegetables',
        'Planning meals',
        'Preparation and cooking of meals',
      ],
    },
    'Garden Maintenance': {
      fee: 'R750',
      purpose: 'Basic gardening knowledge for domestic gardens',
      content: [
        'Water restrictions and requirements for plants',
        'Pruning and propagation of plants',
        'Planting techniques for different plant types',
      ],
    },
  };

  const { fee, purpose, content } = courseDetails[course] || {};

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{course}</Text>
      {fee && <Text style={{ marginTop: 10 }}>Fee: {fee}</Text>}
      {purpose && <Text>Purpose: {purpose}</Text>}
      {content && (
        <>
          <Text style={{ marginTop: 10 }}>Content:</Text>
          {content.map((item, index) => (
            <Text key={index} style={{ marginLeft: 10 }}>
              - {item}
            </Text>
          ))}
        </>
      )}
    </View>
  );
};

export default CourseDetailScreen;
