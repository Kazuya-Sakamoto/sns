import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={ styles.container }>
      <View style={ styles.postWrapper }>
        <View style={ styles.topBox }>
          <View style={ styles.topBoxLeft }></View>
        </View>
        <View style={ styles.middleBox }>
          <Image
          style={ styles.middleBox }
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
          />
        </View>
        <View style={ styles.bottomBox }>
          <View style={ styles.bottomBoxArea }>
            <View style={ styles.bottomLeftArea }></View>
            <View style={ styles.bottomCenterArea }></View>
            <View style={ styles.bottomRightArea }></View>
          </View>
        </View>
      </View>
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
