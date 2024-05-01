import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';

const ContactPage = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    alert('Thank you for reaching out!');
  };

  // Image to display at the bottom
  const bottomImage = require('./newProfile.png');

  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        
        <View style={styles.titleBox}>
          <Text style={styles.title}>Get In Touch</Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#666"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor="#666"
          />

          <TextInput
            style={[styles.input, styles.inputMessage]}
            placeholder="Your Message"
            value={message}
            onChangeText={setMessage}
            multiline={true}
            numberOfLines={4}
            placeholderTextColor="#666"
          />

          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>

        <Image source={bottomImage} style={styles.image} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f0f8ff', // Light blue background
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically in the screen
    padding: 20
  },
  titleBox: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: '#4682B4', // Changed to light calming blue
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center', // Center title text horizontally
    alignSelf: 'stretch', // Stretch to the container width
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff', // White text for button
  },
  formContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: '#ffffff', // White background for the form
    borderRadius: 10,
    padding: 20,
    alignItems: 'stretch', // Stretch children to match width
  },
  input: {
    backgroundColor: '#fff', // White background for inputs
    borderWidth: 1,
    borderColor: '#ccc', // Light grey border
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  inputMessage: {
    minHeight: 100, // Larger input area for the message
  },
  button: {
    backgroundColor: 'transparent', // Transparent background
    borderWidth: 2, // Solid border to denote button edges
    borderColor: '#003366', // Dark blue border color
    borderRadius: 8,
    paddingVertical: 8, // Padding to keep the text centered vertically
    paddingHorizontal: 20, // Padding to keep the text from being too cramped
    width: 200, // Set a fixed width for uniformity
    alignItems: 'center', // Center text within the button
    marginTop: 10,
    alignSelf: 'center', // Ensure the button is centered within its container
  },
  
  buttonText: {
    fontSize: 16, // Font size for readability
    color: '#003366', // Dark blue text to match the border
    fontWeight: 'bold',
  }
  ,

  image: {
    width: '100%', // Full width to match the form's width
    height: 200, // Fixed height
    marginTop: 20,
    borderRadius: 10, // Rounded corners for the image
  }
});

export default ContactPage;
