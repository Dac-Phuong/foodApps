import * as React from 'react';
import { Button,Image, SafeAreaView,Text,ScrollView, View,TouchableOpacity} from 'react-native';
import styles from'./Style'
import ProductCart from './ProductCart';

function Account({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>
      <View style={styles.AccountMain}>
        <Image source={require('../../images/user_1.png')} />
        <View style={styles.AccountInfoUser}>
          <View style={styles.AccountInfo} >
            <Text style={styles.UserName}>Afsar Hossen</Text>
            <TouchableOpacity style={{paddingLeft:8}}>
              <Image  source={require('../../images/pen.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.GmailUser}>Imshuvo97@gmail.com</Text>
        </View>
      </View>
      <ScrollView>
      <View style={styles.MainUser}>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
            <Image  source={require('../../images/icon_1.png')} />
            <Text style={styles.TextInfo}>Orders</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Image source={require('../../images/Next_1.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
            <Image  source={require('../../images/icon_2.png')} />
            <Text style={styles.TextInfo}>My Details</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Image source={require('../../images/Next_1.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
            <Image  source={require('../../images/icon_3.png')} />
            <Text style={styles.TextInfo}>Delivery</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Image source={require('../../images/Next_1.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
            <Image  source={require('../../images/icon_4.png')} />
            <Text style={styles.TextInfo}>Paymant Methods</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Image source={require('../../images/Next_1.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
            <Image  source={require('../../images/icon_5.png')} />
            <Text style={styles.TextInfo}>Promo Cord</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Image source={require('../../images/Next_1.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
            <Image  source={require('../../images/icon_6.png')} />
            <Text style={styles.TextInfo}>Notifecations</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Image source={require('../../images/Next_1.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
            <Image  source={require('../../images/icon_7.png')} />
            <Text style={styles.TextInfo}>Help</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Image source={require('../../images/Next_1.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.InfoUser}>
          <View style={styles.ListInfo}>
            <Image  source={require('../../images/icon_8.png')} />
            <Text style={styles.TextInfo}>About</Text>
          </View>
          <View style={styles.User}>
            <TouchableOpacity style={styles.UserList}>
              <Image source={require('../../images/Next_1.png')} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.Botton}>
        <View style={styles.btnIcon}>
          <Image  source={require('../../images/out.png')} />
        </View>
        <View style={styles.BtnOut}>
          <Text style={styles.BtnText} >Log Out</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default Account;