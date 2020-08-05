import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView ,Text, View, Image, Button, TouchableOpacity, FlatList } from 'react-native';
import ListThree from '../components/ListThree';
import axios from 'axios';


const URL = 'https://firestore.googleapis.com/v1/projects/game-3a87b/databases/(default)/documents/posts';
const userURL = 'https://firestore.googleapis.com/v1/projects/game-3a87b/databases/(default)/documents/users'

export default ProfileScreen = () => {

  // * react Hooks 
  // * 画像の取得
  const [images, setImage] = useState([]);
	useEffect(() => {
		fetchImage();
  }, []);

  // * userの名前を取得する
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetchUser();
  })
  // * userの自己紹介文を取得する
  const [int, setUserInt] = useState([]);
  useEffect(() => {
    fetchUser();
  })


  // * 画像の取得
	const fetchImage = async () => {
		try { 
      const response = await axios.get(URL);
      const arrayImage = response.data.documents;
      setImage(arrayImage)
		} catch(error) {
      console.log(error)
    }
  }
  // * ユーザープロフィール情報を取得
  const fetchUser = async () => {
    try {
      const response = await axios.get(userURL);
      const arrayUser = response.data.documents;
      for(const i = 0; i < arrayUser.length; i++){
      // console.log(arrayUser)
        const user = arrayUser[0]
        setUser(user.fields.user_name.stringValue)
        setUserInt(user.fields.user_int.stringValue)
        // console.log(user.fields.user_name.stringValue)
      }
    } catch(error) {
      // console.log(error)
    }
  }

  

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.profileTop }>
        <View style={ styles.topBox }>
          <View style={ styles.imageProfileBox }>
            <Image
              source={{ uri: 'https://joah-girls.com/system/item_images/images/000/162/556/medium/4d7519b7-abb0-42c7-ae2f-fa82bebde7bc.png?1528360655' }}
              style={ styles.imageProfile }
            />
          </View>
          <View style={ styles.rightBox }>
            <Text style={ styles.postNum }>31</Text>
  <Text style={ styles.postTag }>投稿数</Text>
          </View>
          <View style={ styles.rightBox }>
            <Text style={ styles.postNum }>200</Text>
            <Text style={ styles.postTag }>フォローワー</Text>
          </View>
          <View style={ styles.rightBox }>
            <Text style={ styles.postNum }>100</Text>
            <Text style={ styles.postTag }>フォロー中</Text>
          </View>
        </View>
        <View style={ styles.profileBox }>
          <View style={ styles.profileInt }>
            <View style={ styles.profileTopBox }>
              {/* UserNameの取得 */}
              <Text style={ styles.profileName }>{ users }</Text>
            </View>
            <View style={ styles.profileBottomBox }>
              {/* Userプロフィールの取得 */}
              <Text style={ styles.profileDetail }>{ int }</Text>
            </View>
          </View>
        </View>
        <View style={ styles.profileEditArea }>
          <View style={ styles.editButton }>
          <TouchableOpacity style={styles.button}>
            <Text style={ styles.editText }>プロフィール編集</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={ styles.listArea }>
          {/* 画像を一覧表示 */}
          <FlatList
          data={ images }
          renderItem={({ item }) => (
            <ListThree
              imageUrl={ item.fields.urlToImage.stringValue }
              onPress={() => navigation.navigate('記事詳細', { article: item })}
            />
          )}
        />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF"
  },
  profileTop: {
    width: '100%',
    height: '70%',
  },
  topBox: {
    width: '100%',
    height: '48%',
    flexDirection: 'row',
  },
  imageProfileBox: {
    flexDirection: 'row',
    width: 140,
    height: '100%',
  },
  imageProfile: {
    width: 100,
    height: 100,
    marginLeft: 15,
    marginTop: 30,
    borderRadius: 50,
  },
  rightBox: {
    width: 70,
    height: 60,
    marginTop: 60,
  },
  postNum: {
    width: '100%',
    // height: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  postTag: {
    width: '100%',
    fontSize: 10,
    textAlign: 'center'
  },

  // ?プロフィール名前、コメント欄
  profileBox: {
    width: '100%',
    height: '25%',
    alignItems: 'center',
    // backgroundColor: 'yellow'
  },
  profileInt: {
    width: '90%',
    height: '100%',
  },
  profileTopBox: {
    width: '100%',
  },
  profileBottomBox: {
    width: '100%',
    height: 80,
    padding: 10
  },
  profileName: {
    fontSize: 14,
    fontWeight: 'bold'
  },

  // ?編集ボタン
  profileEditArea: {
    width: '100%',
    height: '20%',
    padding: 10,
    // backgroundColor: 'red',
  },
  editButton: {
    borderWidth: 1,
    borderColor:'gray',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    marginTop: 5,
    marginBottom: 5,
  },
  editText: {
    fontWeight: 'bold' 
  },
  listArea: {
    width: '100%',
    height: '100%',
  }

})