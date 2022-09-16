import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
// ............MyCart............
CartTop:{
  justifyContent:'center',
  alignItems:'center',  
  borderBottomWidth :1,
  paddingVertical:20,
  borderColor:'#E2E2E2',
},
CartText:{
    fontSize:18,
    fontWeight:'600'
},

CartProduct:{
    height:140,
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderColor:'#E2E2E2',
},
ProductName:{
    fontSize:16,
    fontWeight:'600'
},
Price:{
    paddingVertical:10,
},
CartImage:{
    resizeMode: 'stretch',
    width: '25%',
    justifyContent:'center',
    alignItems:'center', 
},
Productnumber:{
    paddingVertical:15,
    flexDirection:'row',
},
Number:{
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:10,
    
},
productAdd:{
    width:40,
    height:40,
    borderWidth:1,
    borderRadius:15,
    alignItems:'center',
    borderColor:'#E2E2E2',
    justifyContent:'center'
},
ProductPrice:{
},
ProductText:{
    paddingVertical:5,
    color:"#B3B3B3",
},
productDelete:{
    height:'10%',
    paddingHorizontal:10,
    paddingVertical:10
},
PriceName:{
    paddingTop:64,
    alignItems:'center',
    justifyContent:'center'
},
botton:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
},
CkeckCart:{
    position:'relative',
    width:'90%',
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    backgroundColor:'#53B175',
    marginBottom:20,
},
TexBtn:{
    color:'#fff',
    fontSize:16,
    fontWeight:'600',
},
bottonPrice:{
    right:'7%',
    position:"absolute",
    padding:2,
    borderRadius:'6',
    backgroundColor:'#489E67',
},
// .............ProductFavorurite..............
ProductPriceName:{
    width: '40%',
    alignItems:'center',
    justifyContent:'center'
},
ProductFavourite:{
    width: '30%',
    flexDirection:'flex',
    alignItems:'center',
    justifyContent:'center',
},
ProductNext:{
    paddingHorizontal:15
},
CartProductRow:{
    height:120,
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderColor:'#E2E2E2',
},
// ...............Account.............
AccountMain:{
   
    height:110,
    flexDirection:'row',
    alignItems:'center',
    borderColor:"#E2E2E2",
    borderBottomWidth:1,
    paddingHorizontal:20,
},
AccountInfo:{
    flexDirection:'row',
},
AccountInfoUser:{
    paddingLeft:20,
},
UserName:{
    fontSize:16,
    fontWeight:'600',
    color:'#000',
},
GmailUser:{
    color:'#7C7C7C',
    paddingVertical:3,
},
MainUser:{
    paddingHorizontal:20,
    flex:1,
},
InfoUser:{
    height:53,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderColor:"#E2E2E2",
    borderBottomWidth:1,
},
ListInfo:{
    flexDirection:'row',
    alignItems:'center',
},
TextInfo:{
    fontSize:16,
    fontWeight:'600',
    paddingLeft:15,
},
Botton:{
    position:'relative',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
},
BtnOut:{
    position:'relative',
    width:'90%',
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    backgroundColor:'#F2F3F2',
    marginBottom:20,

},
BtnText:{
    fontSize:16,
    fontWeight:'600',
    color:'#53B175',
},
btnIcon:{
    position:'absolute',
    left:'10%',
    top:20,
    zIndex:1,
}

})





export default styles;