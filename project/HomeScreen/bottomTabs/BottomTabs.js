import * as React from 'react';
import { Button, Text,Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Search from './Search/Search';
import Favourite from './Favourite';
import Icon from 'react-native-vector-icons/FontAwesome';
import Account from './Account'
import MyCart from './MyCart';


const Tab = createBottomTabNavigator();

const screenOptions = ({router}) =>({
    headerShown: false,
    TabarIcon: ({focused,color,size}) =>{
        
        let screenName = router.name
        let iconName = "";

        if(screenName == 'Shop'){
            iconName = focused ? 'home':'chevron-right';
        }else if(screenName == 'Explore'){
            iconName = focused ? 'home':'home-outline';
        }

        return<Icon
        name={iconName}
        size={20}
        />
        
    }
    
})

function BottomTab(){


    return(            
        <Tab.Navigator screenOptions={{screenOptions , headerShown: false,}}>
            <Tab.Screen name='Shop' component={HomeScreen}/>
            <Tab.Screen name='Explore' component={Search}/>
            <Tab.Screen name='MyCart' component={MyCart}/>
            <Tab.Screen name='Favourite' component={Favourite}/>
            <Tab.Screen name='Account' component={Account}/>
        </Tab.Navigator>          
    )
}
export default BottomTab;
