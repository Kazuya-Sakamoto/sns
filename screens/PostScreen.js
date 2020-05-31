import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView ,Text, View, Image, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button, FormLabel, FormInput, ListItem, Input } from "react-native-elements";
import axios from 'axios';
import { State } from 'react-native-gesture-handler';

// ! firebase URL
const URL = 'https://firestore.googleapis.com/v1/projects/game-3a87b/databases/(default)/documents/posts';

export default PostScreen = () => {

  const [value, onChangeText] = React.useState();
  
  state = {
    user_name: "",
    content: ""
  }

  const requestPost = function() {
    axios.post(URL, {
    fields: {
      user_name: {
        stringValue: "sample"
      },
      content: {
        stringValue: "samplesamplesamplesamplesamplesamplesamplesamplesample"
      },
      urlToImage: {
        stringValue: "https://original-goods.orilab.jp/wp-content/uploads/2019/05/magazine-eyecatch-instagenic-smaphocase-fashionable.jpg"
      },
      user_image: {
        stringValue: "https://www.instagram.com/p/B6LAl0xhP8i/media/?size=l"
      }
    }
  })
  .then(function(response){
    console.log(response)
  })
}

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.header }>
        <View style={ styles.headerLeft }>
          <View style={ styles.leftBackIcon }>
            <Icon name="angle-left" size={30} style={styles.icon1}/>
          </View>
          <Text style={ styles.centerBox }>新規投稿</Text>
        </View>
        <View style={ styles.headerRight }>
          <View style={ styles.rightBox }>
            <Button title="シェア" type="clear" 
              onPress={() => requestPost()}>
            </Button>
          </View>
        </View>
      </View>
      <View style={ styles.contentAre }>
        <View style={ styles.contentLeft }>
          <View style={ styles.leftImage }></View>
        </View>
        <TextInput
          style={ styles.contentRight }
          // onChangeText={text => onChangeText(text)}
          value={ value }
        />
      </View>
      <View style={ styles.tagArea }>
        <View style={ styles.topBar }>
          <Text style={ styles.textPlace }>タグ付けをする</Text>
        </View>
        <View style={ styles.bottomBar }>
          <Text style={ styles.textPlace }>位置情報を追加</Text>
        </View>
      </View>
      <View>
      </View>
      <Input
        placeholder='BASIC INPUT'
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: '100%',
    height: '100%',
  },
  header: {
    width: '100%',
    height: 58,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  headerLeft: {
    width: '60%',
    height: 58,
    flexDirection: 'row',
    position: 'relative'
  },
  leftBackIcon: {
    width: 40,
    height: 58,
    padding: 10,
    backgroundColor: "white"
  },
  centerBox: {
    width: 100,
    height: 50,
    paddingTop: 20,
    paddingLeft: 40,
    position: 'absolute',
    right: 0,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  headerRight: {
    width: '40%',
    height: 60,
    position: 'relative'
  },
  rightBox: {
    width: 70,
    height: 50,
    paddingTop: 18,
    paddingLeft: 5,
    position: 'absolute',
    right: 0,
  },
  shareText: {
    color: '#0066FF',
    fontWeight: 'bold',
  },
  contentAre: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    borderColor: 'gray',
    // borderWidth: 0.8,
  },
  contentLeft: {
    width: 100,
    height: 120,
    padding: 17,
  },
  leftImage: {
    width: 80,
    height: 80,
    backgroundColor: 'green'
  },
  contentRight: {
    width: 300,
    height: 120,
    borderRightColor: "red"
    // backgroundColor: 'green',
  },

  tagArea: {
    width: '100%',
    height: 100,
  },
  topBar: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.2,
  },
  bottomBar: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.2,
  },
  textPlace: {
    padding: 18,
    color: '#777777',
  }
})