import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.homeBox}>
          
          <View style={styles.headerContainer}>
            <Image
              source={require('./newProfile.png')}
              style={styles.profileImage}
            />
            <Text style={styles.headerText}>Welcome to My Creative Space</Text>
          </View>
          <View style={styles.section}>
           
            <Text style={styles.sectionContent}>
              Here's a brief introduction about myself and my background.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, styles.link]} onPress={() => navigation.navigate('Projects')}>Projects</Text>
            <Text style={styles.sectionContent}>
              Check out my projects here.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, styles.link]} onPress={() => navigation.navigate('Skills')}>Skills</Text>
            <Text style={styles.sectionContent}>
              View my skills and competencies.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, styles.link]} onPress={() => navigation.navigate('Contact')}>Contact</Text>
            <Text style={styles.sectionContent}>
              Find all ways to contact me here.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f8ff' // Light blue background
  },
  container: {
    flex: 1,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    padding: 20,
  },
  homeBox: {
    backgroundColor: '#ffffff', // White card background
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center', // Center content horizontally
  },
  headerContainer: {
    alignItems: 'center', // Align items in the center horizontally
    marginTop: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10, // Vertical margin for spacing
    textAlign: 'center', // Center-align text
    color: '#003366', // Dark blue color for title
  },
  section: {
    width: '100%', // Full width sections
    paddingVertical: 10, // Vertical padding for each section
    alignItems: 'center', // Align text and items in the center
    borderBottomWidth: 1, // Line separator
    borderBottomColor: '#ccc', // Light gray line color
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5, // Space between title and content
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'center', // Center-align text
  },
  link: {
    color: '#003366', // Dark blue color for links
  },
});

export default HomePage;
