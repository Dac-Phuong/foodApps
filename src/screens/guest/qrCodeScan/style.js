import {Dimensions, StyleSheet} from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent:"center", 
    alignItems: 'center',
    backgroundColor: "#FFF",
  },
  text: {
    width: "100%",
    height: Dimensions.get("screen").height,
    resizeMode: "cover",
    fontSize:12
    
  },
});
