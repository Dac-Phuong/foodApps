import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,KeyboardAvoidingView, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigator from './navigation/Foodapp';


const Tab = createBottomTabNavigator();
export default function App() {
  return <MainNavigator></MainNavigator>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
