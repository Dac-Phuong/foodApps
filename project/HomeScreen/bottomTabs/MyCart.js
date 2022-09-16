import * as React from 'react';
import { Button,Image, SafeAreaView,Text,ScrollView, View,TouchableOpacity,StatusBar} from 'react-native';
import styles from'./Style'
import ProductCart from './ProductCart';

function MyCart({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.CartTop}>
        <Text style={styles.CartText}>My Cart</Text>                   
      </View>
      <View style={{flex:1,}}>
      <ScrollView style={{marginHorizontal:20, }}>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
       </ScrollView>
      </View>
      <View style={styles.botton}>
        <TouchableOpacity style={styles.CkeckCart}>
          <Text style={styles.TexBtn}>Go to Checkout</Text>
          <View style={styles.bottonPrice}>
            <Text style={{color:'#fff',}}>$12.69
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default MyCart;