import { Button, Text, View } from 'react-native';
import {styles} from './style';

export default function QRCodeScreen({...props}) {
  return (
    <View style={styles.container}>
      <Text style={{color: "#000"}}>QR Code Scanner code goes here</Text>
      <Button 
        onPress={() => props.navigation.navigate("OnboardingNavigation")} 
        title="Go to Login"
      />
       <Button 
        onPress={() => props.navigation.navigate("Account")} 
        title="Go to Account"
      />
    </View>
  );
}
