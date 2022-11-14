import React from 'react';
import {Text, View } from 'react-native';
import {styles} from './style';

export default function UserProfileScreen({...props}) {
  return (
    <View style={styles.container}>
     <Text>This is the user profile screen</Text>
    </View>
  )
}

