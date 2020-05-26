import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const ListItem = (props) => {
  return (
    <View style={ styles.postWrapper }>
      <View style={ styles.topBox }>
        <View style={ styles.topBoxLeft }>
          <View style={ styles.userImage }>
            <Image
            style={ styles.userImage }
            source={{ uri: props.userImage }}
            />
          </View>
          <Text style={ styles.userName }>{ props.userName }</Text>
        </View>
      </View>
      <View style={ styles.middleBox }>
        <Image
        style={ styles.middleBox }
        source={{ uri: props.imageUrl }}
        />
      </View>
      <View style={ styles.bottomBox }>
        <View style={ styles.bottomBoxArea }>
          <View style={ styles.bottomLeftArea }></View>
          <View style={ styles.bottomCenterArea }></View>
          <View style={ styles.bottomRightArea }></View>
        </View>
        <View style={ styles.bottomTopArea }>
          <Text>{ props.content }</Text>
        </View>
      </View>
    </View>
  )
}

export default ListItem;

const styles = StyleSheet.create({
  postWrapper: {
    height: '70%',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  topBox: {
    width: '100%',
    height: 54,
    marginBottom: 2,
  },
  topBoxLeft: {
    width: 300,
    height: 54,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  userImage: {
    marginTop: 3,
    width: 45,
    height: 45,
    borderRadius:50,
  },
  userName: {
    textAlign: 'center',
    paddingTop: 20,
    paddingLeft: 10
  },

  middleBox: {
    width: '100%',
    height: 350,
  },

  bottomBox: {
    width: '100%',
    height: 140,
  },
  bottomBoxArea: {
    width: '100%',
    height: 50,
    backgroundColor: 'gray',
    flexDirection: 'row',
    marginTop: 10,
  },
  bottomLeftArea: {
    width: 150,
    height: 50,
    backgroundColor: 'white',
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
  },

  bottomTopArea: {
    width: '100%',
    height: 85,
    padding: 10,
  }
});
