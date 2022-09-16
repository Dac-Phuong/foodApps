import * as React from 'react';
import { Button,Image, SafeAreaView,Text,ScrollView, View,TouchableOpacity} from 'react-native';
import styles from'./Style'
import ProductFavoruite from './ProductFavoruite';

function Favourite({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>
      <View style={styles.CartTop}>
        <Text style={styles.CartText}>Favorites</Text>                    
      </View>
      <View style={{flex:1,}}>
      <ScrollView style={{marginHorizontal:20, }}>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
        <ProductFavoruite/>
       </ScrollView>
      </View>
      <View style={styles.botton}>
        <TouchableOpacity style={styles.CkeckCart}>
          <Text style={styles.TexBtn}>Add All to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default Favourite;