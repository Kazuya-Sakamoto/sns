import React from 'react';
import { StyleSheet, SafeAreaView ,Text, View, Image, FlatList } from 'react-native';
import { useSelector } from "react-redux"
import ListItem from '../components/ListItem';


export default LikeScreen = ({ navigation }) => {
  const user = useSelector(state => state.user)
  const { clips } = user;
  return (
    <SafeAreaView>
      <FlatList 
        data={ clips } 
        renderItem={({ item }) => (
          <ListItem
            item = {item}
            userName={ item.user_name.stringValue }
            userImage={ item.user_image.stringValue }
            imageUrl={ item.urlToImage.stringValue }
            content={ item.content.stringValue }
            onPress={() => navigation.navigate('記事詳細', { article: item })}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  )
}