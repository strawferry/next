import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native'

import PropTypes from "prop-types";

import {px, width} from "./ScreenUtil";


export default class ColorButton extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  render () {
    const {style, text, textStyle, onPress} = this.props;
    return (
      <TouchableOpacity
        onPress={() => onPress && onPress()}
      >
        <View
          style={[{
            width: px(300), height: px(56), borderRadius: px(5), borderColor: '#C200EB',
            borderWidth: 1, alignItems: 'center', justifyContent: 'center',
          }, style]}>
          <Text style={[{color: '#C200EB', fontSize: px(28), fontWeight: 'bold'}, textStyle]}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
