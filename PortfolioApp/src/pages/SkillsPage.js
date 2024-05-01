import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const SkillsPage = () => {
  // List of skills to display
  const skills = [
    "React Native",
    "JavaScript",
    "Agile Methodologies",
    "User Interface Design",
    "Project Management",
    "Data Analysis",
    "Cloud Services"
  ];

  // Image at the bottom of the page
  const bottomImage = require('./newProfile.png'); 

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Professional Skills</Text>
        </View>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillCard}>
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
        <Image source={bottomImage} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f0f8ff', // Light blue background
  },
  container: {
    flex: 1,
    alignItems: 'center', // Center content horizontally
    padding: 20,
    paddingBottom: 40, // Additional padding at the bottom to accommodate the image
  },
  titleContainer: {
    borderBottomWidth: 2, // Add a border to the bottom of the title
    borderBottomColor: '#003366', // Dark blue color for the border
    marginBottom: 20, // Space below the title
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366', // Dark blue for a professional look
    textAlign: 'center', // Center-align text
    textTransform: 'uppercase', // Uppercase text
  },
  skillCard: {
    backgroundColor: '#ffffff', // White card background
    borderRadius: 10,
    paddingVertical: 10, // Padding top and bottom
    paddingHorizontal: 20, // Padding left and right for more space inside
    marginVertical: 5,
    width: '90%', // 90% of screen width
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // Center text in the card
  },
  skillText: {
    fontSize: 18,
    color: '#003366', // Dark blue text for consistency with the title
    fontWeight: 'bold'
  },
  image: {
    width: '90%', // Match the width of skill cards
    height: 200, // Fixed height for the image
    marginTop: 20, // Space between the last skill card and the image
    borderRadius: 10, // Rounded corners for the image
  }
});

export default SkillsPage;
