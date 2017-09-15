import React from 'react';
import { StackNavigator , DrawerNavigator,DrawerItems} from 'react-navigation';
import {Text,Button,Image,TouchableOpacity,Dimensions} from 'react-native';
import Home from './screens/Home';
import User from './screens/User';
import Detail from './screens/Detail';
import Menu from './screens/Menu';
const {width} = Dimensions.get('window');
export const HomeStack = StackNavigator({
	Screen_Home:{
		screen: Home,
		navigationOptions:({navigation})=>({
			title: 'Trang Chủ',
			headerTintColor: 'blue',
			headerStyle:{
				paddingLeft: 10,
				backgroundColor: 'white'
			},
			headerTitleStyle :{ 
				fontWeight:'300',
				fontSize:20,
				marginTop:5,
				alignSelf:'center',
			},
			headerLeft:
			<TouchableOpacity  onPress={()=>navigation.navigate('DrawerOpen')}>
				<Image style={{backgroundColor: '#3342b5',height: 25,width: 25}} 
            		source={require('./../images/icons/ic_menu.png')}
            		/>
    			</TouchableOpacity>,
		}),
	},
	Screen_Detail:{
		screen: Detail,
		navigationOptions: {
			title: 'Trang Thông Tin',
			headerStyle:{
			},
			headerTitleStyle :{ 
				fontWeight:'300',
				fontSize:20,
				marginTop:5,
				alignSelf:'center'
			},
		},
	},
});
export const Left_Menu = DrawerNavigator({
		Sidebar_Menu:{
			screen: HomeStack,
		},
},
	{
		drawerWidth: (width*8)/10,
		drawerPosition: 'left',
		contentComponent: props => <Menu {...props} />
	}
);