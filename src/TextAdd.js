import React from 'react';
import {TouchableOpacity, Text, View, TextInput} from 'react-native'
import PropTypes from "prop-types";

import {px,width} from "./ScreenUtil";

export default class TextAdd extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		onChangeText: PropTypes.func.isRequired,
		keyboardType: PropTypes.string,
		value: PropTypes.string,
	};

	state = {
		value:  ''
	}


	render() {
		const {title, placeholder, onChangeText, keyboardType, } = this.props;
		return (
			<View style={{
				flexDirection: 'row', width: px(690), backgroundColor: '#fff', marginTop: px(30), justifyItems: 'center',
				borderRadius: px(10), padding: px(22), alignItems: 'center'
			}}>
				<Text style={{color: '#0F0012', fontSize: px(26), fontWeight: 'bold'}}>{title}</Text>
				<TextInput
					onChangeText={(text) => {
						this.setState({value: text}, () => onChangeText(text));
					}}
					value={this.state.value}
					keyboardType={keyboardType}
					placeholder={placeholder}
					placeholderTextColor={'#999'}
					numberOfLines={1}
					style={{flex: 1, justifyContent: 'flex-end', textAlign: "right"}}
				/>

			</View>
		)
	}
}
