import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProjectDetailPage = () => {
  const route = useRoute();
  const { projectId } = route.params;


  const projectDetails = {
    id: projectId,
    title: `Project ${projectId}`,
    description: `Detailed overview of Project ${projectId}. This section elaborates on the project's objectives, methodologies, technologies used, outcomes, and other relevant details that shed light on the project's scope and impact.`,
    longDescription: `Project ${projectId} represents a significant undertaking that integrates advanced technologies and innovative solutions to address complex challenges. It showcases the application of cutting-edge techniques in software development, including agile project management, robust data analysis, and user-centric design principles to ensure optimal results and impactful solutions.`
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.projectCard}>
        <Text style={styles.projectTitle}>{projectDetails.title}</Text>
        <Text style={styles.description}>{projectDetails.description}</Text>
        <Text style={styles.longDescription}>{projectDetails.longDescription}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f0f8ff', // Light blue background for consistency
  },
  projectCard: {
    backgroundColor: '#ffffff', // White card background
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // Center content horizontally
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366', // Dark blue for titles
    marginBottom: 20, // Space below the title
    textAlign: 'center', // Center-align text
    borderBottomWidth: 1, // Add border to the bottom of the title
    borderBottomColor: '#003366', // Border color matches the text color
    paddingBottom: 10, // Padding bottom for space between title and description
  },
  description: {
    fontSize: 18,
    color: '#003366', // Dark blue text for descriptions
    marginBottom: 20, // Space below the description
    textAlign: 'center', // Center-align text
  },
  longDescription: {
    fontSize: 16,
    color: '#003366', // Dark blue text for detailed description
    textAlign: 'justify', // Justify align text for better readability
  }
});

export default ProjectDetailPage;
