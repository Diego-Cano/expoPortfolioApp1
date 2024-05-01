import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import SkillsPage from '../pages/SkillsPage';
import ContactPage from '../pages/ContactPage';
import ProjectDetailsPage from '../pages/ProjectDetailsPage';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Projects" component={ProjectsPage} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetailsPage} />
      <Stack.Screen name="Skills" component={SkillsPage} />
      <Stack.Screen name="Contact" component={ContactPage} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
