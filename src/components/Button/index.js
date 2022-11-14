import React from 'react';
import {Share, Text, TouchableOpacity} from 'react-native';

export default function Button({title, buttonStyle, textStyle, onPress}) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
