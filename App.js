import React from 'react';
import ListItem from './components/ListItem'
import posts from './dummies/posts.json'


export default function App() {
  const items = posts.map( post => { 
    return (
      <ListItem
        userName={ post.user_name }
        userImage={ post.user_image }
        imageUrl={ post.urlToImage }
        content={ post.content }
      />
    )
  })

  return (
    <View style={ styles.container }>
      <FlatList
        data={ posts }
        renderItem={({ item }) => (
          <ListItem
          userName={ item.user_name }
          userImage={ item.user_image }
          imageUrl={ item.urlToImage }
          content={ item.content }
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
