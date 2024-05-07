import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [imageUri, setImageUri] = useState(null);  // State to store the URI of the selected image

  useEffect(() => {
    // Requesting permission to access the photo library
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access camera roll is required!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,  // Allows the user to crop the image
      quality: 1,  // High quality image
    });

    if (!result.cancelled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    alert('Thank you for reaching out!');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Get In Touch</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Your Name" value={name} onChangeText={setName} placeholderTextColor="#666" />
          <TextInput style={styles.input} placeholder="Your Email" value={email} onChangeText={setEmail} keyboardType="email-address" placeholderTextColor="#666" />
          <TextInput style={[styles.input, styles.inputMessage]} placeholder="Your Message" value={message} onChangeText={setMessage} multiline={true} numberOfLines={4} placeholderTextColor="#666" />
          {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
          <TouchableOpacity onPress={pickImage} style={styles.linkButton}>
            <Text style={styles.linkText}>- Click here to Upload an Image -</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f0f8ff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  titleBox: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: '#4682B4',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  formContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'stretch',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  inputMessage: {
    minHeight: 100,
  },
  button: {
    backgroundColor: '#f0f8ff', // Light blue background
    borderWidth: 2,
    borderColor: '#003366',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
    width: 200,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#003366',
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 10,
    marginBottom: 20,
  },
  linkText: {
    color: '#DC143C',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  }
});

export default ContactPage;
