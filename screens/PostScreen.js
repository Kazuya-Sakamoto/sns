import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView ,Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button, FormLabel, FormInput, ListItem, Input } from "react-native-elements";
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import PostButton from "../components/PostButton";

// ! firebase URL
const URL = 'https://firestore.googleapis.com/v1/projects/game-3a87b/databases/(default)/documents/posts';

// * 複数のテキストを入力できるボックスを作成する
const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

export default PostScreen = () => {

  const [content, setContent] = React.useState();
  const [user_name, setUserName] = React.useState();
  const [selectedImage, setSelectedImage] = React.useState(null);

  // const componentDidMount = function() {
  //   this.getPermissionAsync();
  // }

  // const getPermissionAsync = async () => {
  //   if (Constants.platform.ios) {
  //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //     if (status !== 'granted') {
  //       alert('Sorry, we need camera roll permissions to make this work!');
  //     }
  //   }
  // };
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }


    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    // console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });

    console.log(pickerResult.uri)
  };


  //* axios post 
  const requestPost = function() {
    axios.post(URL, {
    fields: {
      user_name: {
        stringValue: user_name
      },
      content: {
        stringValue: content
      },
      urlToImage: {
        stringValue: selectedImage.localUri
      },
      user_image: {
        stringValue: "https://joah-girls.com/system/item_images/images/000/162/556/medium/4d7519b7-abb0-42c7-ae2f-fa82bebde7bc.png?1528360655"
      }
    }
  })
  .then(function(response) {
    console.log(response)
    const data = response.uri;
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  })
}

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.header }>
        <View style={ styles.headerLeft }>
          <View style={ styles.leftBackIcon }>
            {/* <Icon name="angle-left" size={30} style={styles.icon1}/> */}
          </View>
          <Text style={ styles.centerBox }>新規投稿</Text>
        </View>
        <View style={ styles.headerRight }>
          <View style={ styles.rightBox }>
            <Button title="シェア" type="clear"
              onPress={ requestPost }>
            </Button>
          </View>
        </View>
      </View>
      {/* <PostButton></PostButton> */}

      <View style={ styles.formArea }>
        <View style={ styles.formMiddleArea }>
          <View>
          <Text style={ styles.formTag }>氏名</Text>
          <TextInput
            style={ styles.inputName }
            onChangeText={text => setUserName(text)}
            placeholder='名前を入力してください'
            value={ user_name }
          />
          <Text style={ styles.formTag }>内容</Text>
          <UselessTextInput
            style={ styles.textContent }
            multiline
            numberOfLines={ 4 }
            onChangeText={text => setContent(text)}
            value={ content } 
          />
          <Text style={ styles.formTag }>画像の選択</Text>

          <View style={ styles.imageFormArea }>
          <TouchableOpacity onPress={ openImagePickerAsync }>
            {/* 画像がなければ「画像が選択されていません」あれば,画像を表示する */}
            <Text style={ styles.formImage }>{ selectedImage ? <Image
              source={{ uri: selectedImage.localUri }}
              style={ styles.formImage }
            /> : <Text style={ styles.imageText }>画像が選択されていません</Text>}
            </Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
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
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  headerLeft: {
    width: '59%',
    height: 58,
    flexDirection: 'row',
    position: 'relative',
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
    fontWeight: 'bold',
  },
  headerRight: {
    width: '40%',
    height: 60,
    position: 'relative',
  },
  rightBox: {
    width: 70,
    height: 60,
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#EFEFEF',
  },
  imageText: {
    padding: 10,
    color: 'gray'
  },
  contentRight: {
    width: 300,
    height: 120,
    borderRightColor: "red"
    // backgroundColor: 'green',
  },


  // * formArea
  formArea: {
    width: '100%',
    height: 500,
    alignItems: 'center',
  },
  formMiddleArea: {
    width: '85%',
    height: '100%',
  },
  inputName: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 4,
    height: 45,
    padding: 10,
    backgroundColor: '#EFEFEF'
  },
  formTag: {
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 'bold'
  },
  textContent: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#EFEFEF',
    borderRadius: 4,
    height: 145,
    padding: 10,
    paddingTop: 10
  },
  formImage: {
    width: 280,
    height: 180,
    backgroundColor: '#EFEFEF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
  },
  imageFormArea: {    
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }
})