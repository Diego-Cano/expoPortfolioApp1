import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProjectsPage = () => {
  const navigation = useNavigation();

 
  const projects = [
    { id: 1, title: "Project One", description: "This is an awesome project that involves cool technology.", imageUrl: require('./newProfile2.jpg') },
    { id: 2, title: "Project Two", description: "A follow-up project with new features.", imageUrl: require('./newProfile2.jpg') },
    { id: 3, title: "Project Three", description: "A groundbreaking project that changes everything!", imageUrl: require('./newProfile2.jpg') }
  ];

  return (
    <ScrollView style={styles.scrollView}>
      {projects.map(project => (
        <View key={project.id} style={styles.projectCard}>
          <Image source={project.imageUrl} style={styles.projectImage} />
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
          <Button title="View Details" onPress={() => navigation.navigate('ProjectDetails', { projectId: project.id })} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f0f8ff', // Light blue background
  },
  projectCard: {
    backgroundColor: '#ffffff', // White card background
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // Center content horizontally
  },
  projectImage: {
    width: '100%', // Full width images
    height: 200, // Set a fixed height for images
    borderRadius: 8, // Rounded corners for images
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10, // Margin top for spacing
    color: '#003366' // Dark blue color for titles
  },
  projectDescription: {
    fontSize: 16,
    color: '#666666', // Grey text for descriptions
    marginVertical: 10, // Vertical margin for spacing
    textAlign: 'center' // Center-align text
  }
});

export default ProjectsPage;
