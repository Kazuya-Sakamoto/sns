import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

const ListThree = ({ imageUrl, onPress }) => {
	
	return (
		<View style={ styles.container }>
			<View style={ styles.imageArea }>
				<TouchableOpacity onPress={ onPress } style={ styles.ItemImage }>
					<Image
						style={ styles.ItemImage }
						source={{ uri: imageUrl }}
						onPress={ onPress }
					/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default ListThree;

const styles = StyleSheet.create({
	container: {
    flex: 1,
		backgroundColor: '#fff',
		flexDirection: "row",
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	imageArea: {
		width: '100%',
		height: 300,
		flexDirection: "row",
		justifyContent: 'center'
	},
	ItemImage: {
		width: '95%',
		height: '95%',
		justifyContent: 'center', 
		flexDirection: 'row',
	},
})