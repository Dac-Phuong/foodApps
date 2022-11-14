import React from 'react';
import { Image, ImageBackground, Text, View, Platform } from 'react-native';
import Button from '../../../components/Button';
import images from '../../../theme/images';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import toQueryString from 'to-querystring';
import { api } from '../../../api';

export default function Auth0Screen({...props}) {
  const redirectUrl = AuthSession.makeRedirectUri({useProxy: Platform.OS == "android" ? true : false});
  console.log(redirectUrl);
  async function getUserInfo(token) {
    let email, name, lastName, mobile = '';
    let verified = false;
    const resp = await api('v1/user/getauth0info', 'GET', null);
    console.log(resp.data);
    if (resp.status == 200) {
      var result = resp.data;
      if (result.success) {
        email = result.data.email;
        name = result.data?.given_name;
        lastName = result.data?.family_name;

        if(result.data.user_metadata){
          if(result.data.user_metadata.firstName){
            name = result.data.user_metadata.firstName;
          }
          if(result.data.user_metadata.lastName){
            lastName = result.data.user_metadata.lastName;
          }
          if(result.data.user_metadata.mobile){
            mobile = result.data.user_metadata.mobile;
          }
        }
        
        verified = result.data.email_verfied ? result.data.email_verfied : false;        

        let formData = new FormData();

        formData.append('email', email);
        formData.append('firstName', name);
        formData.append('lastName', lastName);
        formData.append('mobile', mobile);
        formData.append('emailVerified', verified);

        registerUser(formData);
      }
    }
  }

  const getUser = async (token = false) => {

    if (token) {
      token = token;
    } else {
      token = await AsyncStorage.getItem('token');
    }

    const resp = await api('v1/user', 'GET', null);
    if (resp.status == 200) {
      var result = resp.data;
      if (result.success) {
        if (result.user == null) {
          getUserInfo(token);
        } else {
          console.log('result profile:', result.user);
          AsyncStorage.setItem('user', JSON.stringify(result.user));
          props.navigation.navigate("TabNavigator");
        }
      } else {
        if (result.error) {
          if (result.error == 'jwt expired') {
            let removeToken = AsyncStorage.removeItem('token');
            let removerefreshToken = AsyncStorage.removeItem('refreshToken');
            props.navigation.navigate("OnboardingNavigation");
          }
        }
      }
    }
  };

  async function registerUser(data) {
    console.log("register data: ", data);
    const resp = await api('v1/user', 'POST', data);
    if (resp.status == 200) {
      var result = resp.data;
      if (result.success) {
        // console.log('Registered User: ', result);
        AsyncStorage.setItem('user', JSON.stringify(result.user));
        props.navigation.navigate("UserProfileScreen");
      }
    }
  }

  const setRefreshToken = async code => {
    var options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: process.env.CLIENTID,
        client_secret: process.env.SECRET,
        code: code,
        redirect_uri: Platform.OS == "android" ? redirectUrl : redirectUrl + '/home',
      }),
    };

    const getAuth = fetch(process.env.AUTHDOMAIN + '/oauth/token', options)
      .then(res => res.json())
      .then(result => {
        if (result.access_token) {
          AsyncStorage.setItem('token', result.access_token);
          AsyncStorage.setItem('refreshToken', result.refresh_token);
          let expiry = moment()
            .add(result.expires_in, 'seconds')
            .format('YYYY-MM-DD HH:mm:ss');
          AsyncStorage.setItem('expiresIn', String(expiry));
        }
      })
      .catch(error => {
        console.log('Using Code to get Auth');
      });
  };

  const goToAuth0 = async hint => {
    console.log('redirect url', redirectUrl);
    let authUrl =
      `${process.env.AUTHDOMAIN}/authorize?` +
      toQueryString({
        client_id: process.env.CLIENTID,
        response_type: 'token code',
        scope:'openid profile email client_credentials offline_access read:current_user update:users update:current_user_identities create:current_user_metadata update:current_user_metadata delete:current_user_metadata create:current_user_device_credentials delete:current_user_device_credentials',
        redirect_uri: Platform.OS == "android" ? redirectUrl : redirectUrl + '/home',
        audience: process.env.AUDIENCE,
        prompt: 'login',
        screen_hint: hint,
      });

    const result = await AuthSession.startAsync({authUrl: authUrl});
    if (result.params) {
      const response = result.params;
      // console.log('result', result);
      if (!result.errorCode) {
        await AsyncStorage.setItem('token', result.params.access_token);
        setRefreshToken(result.params.code);
        console.log(response.access_token);
        getUser(response.access_token);
      }
    } else {
      console.log('Failed Login');
      console.log(result);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.loginBG}
        style={styles.loginBG}
      >
        <View style={styles.loginLogoText}>
          <Image source={images.oneTagLogo} style={styles.oneTagLogo} />
          <Text style={styles.loginText}>Next-gen Testing and Tagging. Sign up to get started.</Text>
        </View>
      </ImageBackground>
      <View style={styles.buttonColumn}>
        <Button 
          title={"Sign Up"}
          buttonStyle={[styles.blueButton, {marginBottom: 10}]}
          textStyle={styles.blueButtonText}
          onPress={() => goToAuth0("signUp")}
        />
        <Button 
          title={"Sign In"}
          buttonStyle={[styles.blueBorderButton, {marginBottom: 10}]}
          textStyle={styles.blueBorderButtonText}
          onPress={() => goToAuth0("login")}
        />
        <Button 
          title={"Back"}
          buttonStyle={[styles.blankButton, {marginBottom: 20}]}
          textStyle={styles.blankButtonText}
          onPress={() => props.navigation.goBack()}
        />
      </View>
    </View>
  )
}

