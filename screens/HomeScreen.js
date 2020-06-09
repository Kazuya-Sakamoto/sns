import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import axios from 'axios';

// ! firebase URL
const URL = 'https://firestore.googleapis.com/v1/projects/game-3a87b/databases/(default)/documents/posts';


export default  HomeScreen = ({ navigation }) => {

  //* Hooks の導入
  const [posts, setPosts] = useState([]); 
  // * useEffect 導入 コンポーネントのマウント時に発火させるアクションを宣言
  useEffect(() => { 
    fetchPosts();
  }, []);

  // * Axios getMethods
  const fetchPosts = async () => {
    try {
      const response = await axios.get(URL);
      const arrayPost = response.data.documents;
      setPosts(arrayPost);
      // console.log(arrayPost);  dataの確認
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={ styles.container }>
      <FlatList
        data={ posts }
        renderItem={({ item }) => (
          <ListItem
            item = {item.fields}
            userName={ item.fields.user_name.stringValue }
            userImage={ item.fields.user_image.stringValue }
            imageUrl={ item.fields.urlToImage.stringValue }
            content={ item.fields.content.stringValue }
            onPress={() => navigation.navigate('Article', { article: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postWrapper: {
    height: 500,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  topBox: {
    width: '100%',
    height: 54,
    backgroundColor: 'red',
  },
  topBoxLeft: {
    width: 300,
    height: 54,
    backgroundColor: 'white'
  },
  middleBox: {
    width: '100%',
    height: 350,
  },
  bottomBox: {
    width: '100%',
    height: 140,
    backgroundColor: 'yellow',
  },
  bottomBoxArea: {
    width: '100%',
    height: 50,
    backgroundColor: 'gray',
    flexDirection: 'row'
  },
  bottomLeftArea: {
    width: 150,
    height: 50,
    backgroundColor: 'white'
  },
  bottomCenterArea: {
    width: 100,
    height: 50,
    backgroundColor: 'blue'
  },
  bottomRightArea: {
    width: 125,
    height: 50,
    backgroundColor: 'green'
  }
});
