import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './components/ListItem'
// import posts from './dummies/post.json'


export default function App() {
  // const items = posts.map( post => { return(
  //   <ListItem
  //     username={ post.user_name }
  //     userImage={ post.user_image }
  //     ImageUrl={ post.urlToImage }
  //     content={ post.content }
  //   />
  // )})
  return (
    <View style={ styles.container }>
      <ListItem
        userName="Riko"
        content="samplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesamplesample"
        imageUrl="https://picsum.photos/200/300"
        userImage="https://picsum.photos/200"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
