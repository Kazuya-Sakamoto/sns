import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';
import LikeButton  from "./LikeButton";
// * HomeScreenから継承してくる
const ListItem = ({item, userImage, userName, imageUrl, content, onPress, enabled}) => {

  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const { clips } = user;

  // * いいねされているか否かを判断
  const isClipped = () => {
    return clips.some(clip => clip.content === item.content)
  }
  //* 条件ごとに挙動の変更
  const toggleClip = () => {
    if(isClipped()){
      dispatch(deleteClip({ clip: item  }))
    } else {
      dispatch(addClip({ clip: item  }))
    }
  }


  return (
    <View style={ styles.postWrapper } onPress={ onPress }>
      <View style={ styles.topBox }>
        <View style={ styles.topBoxLeft }>
          <View style={ styles.userImage }>
            <Image
            style={ styles.userImage }
            source={{ uri: userImage }}
            />
          </View>
          <Text style={ styles.userName }>{ userName }</Text>
        </View>
      </View>
      <View style={ styles.middleBox }>
        <Image
        style={ styles.middleBox }
        source={{ uri: imageUrl }}
        />
      </View>
      <View style={ styles.bottomBox }>
        <View style={ styles.bottomBoxArea }>
          <View style={ styles.bottomLeftArea }>
            <LikeButton onPress={ toggleClip } enabled={ isClipped() } style={styles.icon1}/>
            <Icon name="comment-o" size={30} style={styles.icon2}/>
            {/* 詳細画面に遷移する */}
            <TouchableOpacity onPress={ onPress }>
              <Icon name="send-o" size={30} style={styles.icon3}/>
            </TouchableOpacity>
          </View>
          <View style={ styles.bottomCenterArea }></View>
          <View style={ styles.bottomRightArea }>
          <Icon name="bookmark-o" size={30} style={styles.icon4}/>
          </View>
        </View>
        <View style={ styles.bottomTopArea }>
          <Text>{ content }</Text>
        </View>
      </View>
    </View>
  )
}

export default ListItem;

const styles = StyleSheet.create({
  postWrapper: {
    height: 600,
    width: '100%',
    backgroundColor: '#FFFFFF'
  },
  topBox: {
    width: '100%',
    height: 54,
    marginBottom: 2,
    backgroundColor: 'white'
  },
  topBoxLeft: {
    width: 300,
    height: 54,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  userImage: {
    marginTop: 5,
    marginLeft: 3,
    width: 35,
    height: 35,
    borderRadius:50,
  },
  userName: {
    textAlign: 'center',
    paddingTop: 19,
    paddingLeft: 13
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
    flexDirection: 'row',
    marginTop: 10,
    position: 'relative',
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
