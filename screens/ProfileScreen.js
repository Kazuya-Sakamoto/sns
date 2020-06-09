import React from 'react';
import { StyleSheet, SafeAreaView ,Text, View, Image, Button } from 'react-native';
// import { Button } from 'react-native-elements';


export default ProfileScreen = () => {

  

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
            <Text style={ styles.postTag }>投稿</Text>
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
              <Text style={ styles.profileName }>Test User</Text>
            </View>
            <View style={ styles.profileBottomBox }>
              <Text style={ styles.profileDetail }>サンプルのテキストです。ここにプロフィールの詳細内容を入れます。まだDBとの接続はできていないのでサンプルで文章です。</Text>
            </View>
          </View>
        </View>
        <Button
          icon={{
            size: 12,
            color: "black",
            backgroundColor: "White"
          }}
          title="プロフィールの編集"
        />
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

  profileBox: {
    width: '100%',
    height: 100,
    alignItems: 'center',
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
  }
})