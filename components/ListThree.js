import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

const ListThree = ({ imageUrl }) => {
	
	return (
		<View style={ styles.container }>
			<Image
				style={ styles.ItemImage }
				source={{ uri: imageUrl }}
				/>
		</View>
	)
}

export default ListThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#fff',
		flexDirection: "row"
	},
	ItemImage: {
		width: '33%',
		height: 120,
		flexDirection: "row"
	},
})