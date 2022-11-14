import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import images from "../../theme/images";
import React, { useEffect, useState } from "react";
import styles from "./style";
import Input from "../../components/TextInPut";
import Button from "../../components/Button";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Account({ ...props }) {
  const [image, setImage] = useState(null);
  const [inputs,setInpust] = React.useState({
  fullname:'',
  phone : '',
  email : '',
  password:''});

  const [errors,setErrors] = React.useState({ });
  useEffect(async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("denied!");
      }
    }
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.uri);
    }
  };
  const validate =()=>{
    let vald = true
   Keyboard.dismiss();
   if(!inputs.email){
    handleErrors('please input email','email');
    vald = false
   }else if(inputs.email.match(/\S+@\S+\.S+/)){
    handleErrors('please input email','email')
   }
   if(!inputs.fullname){
    handleErrors('please input fullname','fullname')
   }
   if(!inputs.phone){
    handleErrors('please input phone','phone')
   }
   if(!inputs.password){
    handleErrors('please input phone','password')
   }else if(inputs.password.length < 3){
    handleErrors('min password length 3 ','password')
   }
  }
  const handleOnChange =(text,input)=>{
    setInpust(prevState=>({...prevState,[input]:text}));
  }
  const handleErrors =(errorMessange,input)=>{
    setErrors(prevState=>({...prevState,[input]: errorMessange}));
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.Content}>
            <Text style={styles.text}>Personal Information</Text>
          </View>
        </View>
        <View style={styles.Account}>
          <View style={styles.Images}>
            <View style={styles.btn}>
              <View style={styles.back}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <Text style={styles.Textbtn}>Back</Text>
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.image}>
                  {image && (
                    <Image source={{ uri: image }} style={styles.image} />
                  )}
                </View>
                <TouchableOpacity onPress={PickImage} style={styles.BtnAdd}>
                  <Ionicons
                    style={styles.icon}
                    name="add-outline"
                    size={60}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.Textbtn}>Hi,James</Text>
          </View>
          <Input
            onChangeText = {text=>handleOnChange(text,'fullname')}
            label="Full Name"
            placeholder="nguyendacphuong"
            error={errors.fullname}
            onForcus={()=>{
              handleErrors(null,'fullname')
            }}
          />
           <Input
            label="Your Mobile"
            placeholder="0334262754"
            error={errors.phone}
            onForcus={()=>{
              handleErrors(null,'phone')
            }}
            onChangeText = {text=>handleOnChange(text,'phone')}
          />
           <Input
            label="Email"
            placeholder="nguyendacphuong@gmail.com"
            error={errors.email}
            onForcus={()=>{
              handleErrors(null,'email')
            }}
            onChangeText = {text=>handleOnChange(text,'email')}
          />
          <Input
            label="Password"
            placeholder="******"
            error={errors.password}
            onForcus={()=>{
              handleErrors(null,'password')
            }}
            onChangeText = {text=>handleOnChange(text,'password')}
          />
          <Button
            onPress={validate}
            title={"Save"}
            buttonStyle={[styles.Button,{ marginTop:20}]}
            textStyle={styles.ButtonText}
          ></Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
