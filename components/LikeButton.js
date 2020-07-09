import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ClipButton = ({ onPress, enabled }) => {
  const name = enabled ? 'heart' : 'heart-o';
  return (
    <TouchableOpacity onPress={ onPress } style={ styles.container }>
      <FontAwesome name={ name } size={ 30 } color="#FF1C45" style={ styles.icon4 }/>
    </TouchableOpacity>
  )
}

export default ClipButton;

const styles = StyleSheet.create({
  container: {
    padding: 5,
	},
	icon4: {
    marginLeft: 6,
    padding: 2
	}
})
