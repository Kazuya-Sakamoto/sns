import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button } from 'react-native';

const PostButton = ({ onPress, enabled }) => {
	const name = enabled ? 'aaa' : 'bbb';
	return (
		<TouchableOpacity>
			<View style={ styles.btnArea }>
				<Button title="保存する" type="clear" color="#FFF" name={ name }
					onPress={ onPress }>
				</Button>
			</View>
		</TouchableOpacity>
	)
}
export default PostButton;

const styles = StyleSheet.create({
	btnArea: {
		width: '60%',
		height: '20%',
		backgroundColor: '#FF22FF',
		borderRadius: 20,
		justifyContent: 'center',
		marginTop: 10
	},
})