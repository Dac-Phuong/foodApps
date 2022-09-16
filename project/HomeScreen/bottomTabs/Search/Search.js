import {
  View,
  Text,
  KeyboardAvoidingView ,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import React ,{ useState,} from 'react'
import Product from '../../../products/product'
import styles from './style'
const Search = () => {

  return (
    <KeyboardAvoidingView style={{flex:1}} 
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.top}>
          <TextInput autoFocus placeholder='Search...' style={styles.input}></TextInput>
          <TouchableOpacity style={styles.left}>
            <Image source={require('../../../images/search.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.close}>
            <Image source={require('../../../images/close.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.next}>
            <Image source={require('../../../images/next.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrap}>
          <ScrollView>
            <View style={styles.colums}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />            
              <Product />            
            </View>     
          </ScrollView>
        </View>
      
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Search
