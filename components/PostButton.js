import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button } from 'react-native';

const PostButton = ({ requestPost, enabled }) => {
	const name = enabled ? 'aaa' : 'bbb';
	return (
		<TouchableOpacity>
			<View style={ styles.btnArea }>
				<Button title="シェア" type="clear"
          onPress={ requestPost }>
        </Button>
			</View>
		</TouchableOpacity>
	)
}
export default PostButton;

const styles = StyleSheet.create({

})