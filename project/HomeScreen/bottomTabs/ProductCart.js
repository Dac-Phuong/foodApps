import * as React from 'react';
import { Button,Image, SafeAreaView,Text,ScrollView, View,TouchableOpacity} from 'react-native';
import styles from'./Style'

function ProductCart({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <View style={styles.CartProduct}>
          <View style={styles.CartImage}>
            <Image source={require('../../images/product_2.png')} />
          </View>
          <View style={styles.Price}>
            <Text style={styles.ProductName}>Bell Pepper Red</Text>
            <Text style={styles.ProductText}>1kg , Price</Text>
            <View style={styles.Productnumber}>
              <TouchableOpacity style={styles.productAdd}>
                <Image source={require('../../images/delete.png')} />
              </TouchableOpacity>
              <View style={styles.Number}>
                <Text style={{fontWeight:'bold'}} >1</Text>
              </View>
              <TouchableOpacity style={styles.productAdd}>
                <Image source={require('../../images/adds.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ProductPrice}>
            <TouchableOpacity style={styles.productDelete}>
              <Image source={require('../../images/Clear.png')} />
            </TouchableOpacity>
            <View style={styles.PriceName}>
              <Text style={{fontWeight:'bold'}}>$1.99</Text>
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
}
export default ProductCart;