import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from '../components/ListItem'
import posts from '../dummies/posts.json'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LikeScreen from '../screens/LikeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostScreen from '../screens/PostScreen';
import { FontAwesome } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// * 一覧画面
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Instagram" component={ HomeScreen } />
    </Stack.Navigator>
  )
}

// * 検索画面 
const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="検索" component={ SearchScreen }/>
    </Stack.Navigator>
  )
}

// * 新規投稿画面 
const PostStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="投稿" component={ PostScreen } options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

// * Follow いいね 画面
const LikeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="アクティビティ" component={ LikeScreen }/>
    </Stack.Navigator>
  )
}

// * プロフィール画面
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="プロフィール" component={ ProfileScreen }/>
    </Stack.Navigator>
  )
} 

// * FontAwesome Icon導入
const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === '     ') {
      iconName = "home";
    } else if (route.name === '  ') {
      iconName = "heart-o";
    } else if (route.name === '    ') {
      iconName = "search";
    } else if (route.name === '   ') {
      iconName = "plus-square-o";
    } else if (route.name === ' ') {
      iconName = "photo";
    }
    return <FontAwesome name={iconName} size={28} color={color} />;
  },
})

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={ screenOption } tabBarOptions={{ activeTintColor: '#C13584',inactiveTintColor: 'black', }}>
      <Tab.Screen name="     " component={ HomeStack } />
      <Tab.Screen name="    " component={ SearchStack } />
      <Tab.Screen name="   " component={ PostStack } />
      <Tab.Screen name="  " component={ LikeStack } />
      <Tab.Screen name=" " component={ ProfileStack } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({

})