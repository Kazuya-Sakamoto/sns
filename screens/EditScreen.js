import React, { useState, useEffect } from 'react';
import { StyleSheet,Text, View, TextInput, Button } from 'react-native';
import axios from 'axios';
// import axios from 'axios';

export default EditScreen = () => {
	// const { profileEdit } = route.params; //* 画面遷移の実装
	const [value, onChangeText] = React.useState('入力してください');
	const URL = 'https://firestore.googleapis.com/v1/projects/game-3a87b/databases/(default)/documents/users'
	// * edit
	const editRequest = function() {
		const data = {
			fields: {
				user_int: {
					stringValue: value
				}
			}
		}
		axios.put(URL, data)
		.then(response => {
			console.log(response)
		})
		.catch(error=> {
			console.log(error)
		})
	}

	return (
		<View>
				<View style={ styles.EditArea }>
					<TextInput
					style={ styles.userIntEdit }
					onChangeText={text => onChangeText(text)}
					value={value}
					/>
					<View style={ styles.btnArea }>
						<Button title="保存する" type="clear" color="#FFF"
							onPress={() => editRequest()}>
						</Button>
					</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	EditArea: {
		width: '100%',
		height: 200,
    alignItems: 'center',
		// justifyContent: 'center',
		backgroundColor: '#fff'
	},
	userIntEdit: {
		width: '80%',
		height: 40,
		borderColor: '#EFEFEF',
		borderWidth: 1,
		marginTop: 10,
	},
	btnArea: {
		width: '60%',
		height: '20%',
		backgroundColor: '#FF22FF',
		borderRadius: 20,
		justifyContent: 'center',
		marginTop: 10
	},
})