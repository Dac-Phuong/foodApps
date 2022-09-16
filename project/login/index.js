import { View, Text,KeyboardAvoidingView ,TouchableOpacity,TextInput,Image,} from 'react-native'
import React ,{ useState} from 'react'

import styles from '../login/style'

const Login = ({navigation}) => {
  
  const [getPasswordVisible,setPasswordVisible ] = useState(false)  

  return (
    <KeyboardAvoidingView style={styles.main} 
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    keyboardVerticalOffset ={10}
    >
      <View style={styles.top}>
      <Image style={styles.image} source={require('../images/Group.png')} />
      </View>
      <View style={styles.center}>
        <Text style={styles.text}>Login</Text>
        <Text style={styles.heading}>Enter your emails and password</Text>
        <View style={styles.login}>
          <Text style={styles.title}>Email</Text>
          <TextInput placeholder="admin@123" style={styles.input}></TextInput>
        </View>
        <View style={styles.login}>
          <Text style={styles.title}>Password</Text>
          <TextInput placeholder="12345" autoCapitalize='none' style={styles.input} 
          secureTextEntry={getPasswordVisible ? false : true}> 
          </TextInput>
          <TouchableOpacity
            onPress={() =>{
            setPasswordVisible(!getPasswordVisible)
           }}>
          {
            getPasswordVisible?
            <Image style={styles.eye} source={require('../images/Eye.png')} />
            :
            <Image style={styles.eye} source={require('../images/eyes.png')} />
          }
          </TouchableOpacity>
          <Text style={styles.fogot}>Fogot password ?</Text>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.submit}  onPress={() => {navigation.navigate('HomeScreen')}}>
              <Text style={styles.singin}> Log In</Text>
            </TouchableOpacity>
            <Text style={styles.have}>Don’t have an account? <Text style={styles.singup}
            onPress={() => {navigation.navigate('Register')}} >Signup</Text></Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
export default Login