import { StyleSheet ,Dimensions} from 'react-native'
import { Colors ,} from 'react-native/Libraries/NewAppScreen';
const {width} = Dimensions.get("screen");
const cardWidth = width/2 - 25;
const styles = StyleSheet.create({
   
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    top:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
    },
    input:{

        position:'relative',
        backgroundColor:'#F2F3F2',
        width: '90%',
        height:45,
        paddingLeft:40,
        borderRadius:10,
        fontSize:14,
    },
    left:{

        position:'absolute',
        left:30,
    },
    close:{

        position:'absolute',
        right:70,
    },
    next:{

      paddingLeft:15 ,
    },
    wrap:{

        flex:7,
        width:'100%',
        paddingHorizontal:20,
    },
    colums:{

        flex:1,
        width:'100%',
        height:'100%',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItem:'flex-end',
        justifyContent:'space-between',
    },
    product:{

        width:cardWidth,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor:'#fff',
        marginBottom: 10,
        elevation:5,
    },
    colum:{

        paddingHorizontal:10
    },
    title:{

        fontSize:16,
        fontWeight:'bold',
        color:'#181725'
    },
    span:{

        fontSize:14,
        color:'#DEDEDE'
    },
    price:{

        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:"space-between",
    },
    button:{

        width:30,
        height:30,
        backgroundColor:'#53B175',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{

        width:15,
        height:15,
    },
    bottomNavigate:{

        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        borderColor:'#ccc',
        elevation:15,
        backgroundColor:'#fff',
        flexDirection:'row',
        width:'100%',
        shadowOpacity: 0.32,
    },
    Icon:{

        width:'20%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
       
    },
    textIcon:{

        fontSize:12,
        paddingTop:4,
        fontWeight:'600'
    },
    textCart:{

        fontSize:12,
        paddingTop:4,
        fontWeight:'600',
        color:'#53B175'
    }
})
export default styles;