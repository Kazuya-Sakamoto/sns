import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from '../components/ListItem'
import posts from '../dummies/posts.json'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen"

const Stack = createStackNavigator();


export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Instagram" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
