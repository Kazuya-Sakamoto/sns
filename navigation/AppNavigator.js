import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import ListItem from '../components/ListItem'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LikeScreen from '../screens/LikeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PostScreen from '../screens/PostScreen';
import ArticleScreen from '../screens/ArticleScreen';
import LikeArticleScreen from '../screens/LikeArticleScreen';
import { FontAwesome } from '@expo/vector-icons';
import EditScreen from '../screens/EditScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// * 一覧画面
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Instagram" component={ HomeScreen } />
      {/* 記事詳細画面に遷移 */}
      <Stack.Screen name="記事詳細" component={ ArticleScreen }/> 
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
      {/* お気に入りから記事詳細に遷移 */}
      <Stack.Screen name="記事詳細" component={ LikeArticleScreen }/> 
    </Stack.Navigator>
  )
}

// * プロフィール画面
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="プロフィール" component={ ProfileScreen }/>
      <Stack.Screen name="プロフィール編集" component={ EditScreen } />
      <Stack.Screen name="記事詳細" component={ ArticleScreen }/> 
    </Stack.Navigator>
  )
} 


// * FontAwesome Icon導入
const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = "home";
    } else if (route.name === 'Like') {
      iconName = "heart-o";
    } else if (route.name === 'Search') {
      iconName = "search";
    } else if (route.name === 'Post') {
      iconName = "plus-square-o";
    } else if (route.name === 'Profile') {
      iconName = "user-circle-o";
    }
    return <FontAwesome name={iconName} size={28} color={color} />;
  },
})

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={ screenOption } tabBarOptions={{ activeTintColor: '#C13584',inactiveTintColor: 'black', }}>
      <Tab.Screen name="Home" component={ HomeStack } />
      <Tab.Screen name="Search" component={ SearchStack } />
      <Tab.Screen name="Post" component={ PostStack } />
      <Tab.Screen name="Like" component={ LikeStack } />
      <Tab.Screen name="Profile" component={ ProfileStack } />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({

})