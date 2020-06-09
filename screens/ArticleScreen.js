import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ArticleScreen = ({ route }) => {
  const { article } = route.params; //* 画面遷移の実装
  // console.log(article)

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.topBox }>
        <View style={ styles.topBoxLeft }>
          <Image
          style={ styles.userImage }
          source={{ uri: article.fields.user_image.stringValue }}
          />
          <Text style={ styles.userName }>{ article.fields.user_name.stringValue }</Text>
        </View>
      </View>
      <View style={ styles.middleBox }>
      <Image
        style={ styles.middleBox }
        source={{ uri: article.fields.urlToImage.stringValue }}
        />
      </View>
      <View style={ styles.bottomBox }>
        <View style={ styles.bottomBoxArea }>
          <View style={ styles.bottomLeftArea }>
            <Icon name="heart-o" size={30} style={styles.icon1}/>
            <Icon name="comment-o" size={30} style={styles.icon2}/>
          </View>
          <View style={ styles.bottomCenterArea }></View>
          <View style={ styles.bottomRightArea }>
            <TouchableOpacity onPress={() => { dispatch(addClip({ clip: userName  })) }}>
              <Icon name="bookmark-o" size={30} style={styles.icon4}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={ styles.bottomTopArea }>
          <Text>{ article.fields.content.stringValue }</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  // ? 上部
  topBox: {
    width: '100%',
    height: 60,
  },
  topBoxLeft: {
    width: 300,
    height: 54,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  userImage: {
    marginTop: 10,
    marginLeft: 5,
    width: 40,
    height: 40,
    borderRadius:50,
  },
  userName: {
    textAlign: 'center',
    paddingTop: 19,
    paddingLeft: 13
  },

  //? 中央
  middleBox: {
    width: '100%',
    height: 350,
  },

// ? 下部
  bottomBox: {
    width: '100%',
    height: 140,
  },
  bottomBoxArea: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginTop: 10,
    position: 'relative'
  },
  bottomLeftArea: {
    width: 170,
    height: 50,
    flexDirection: 'row',
  },
  icon1 : {
    marginLeft: 7,
    padding: 6
  },
  icon2 : {
    marginLeft: 7,
    padding: 4.2
  },
  icon3 : {
    marginLeft: 7,
    padding: 5.8
  },
  icon4 : {
    marginLeft: 8,
    padding: 3
  },
  bottomCenterArea: {
    width: 100,
    height: 50,
    // backgroundColor: 'blue'
  },
  bottomRightArea: {
    width: 55,
    height: 50,
    position: 'absolute',
    right: 0,
  },

  bottomTopArea: {
    width: '100%',
    height: 85,
    padding: 10,
  }
});