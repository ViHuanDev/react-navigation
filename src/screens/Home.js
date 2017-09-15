import React, { Component } from 'react';

import {
	StyleSheet,
	View,Button,
	Text,TouchableOpacity,Header,Icon
} from 'react-native';
export default class Home extends Component {
	// constructor(props) {
 //    super(props); 
	// }
	// static navigationOptions = ({ navigation, screenProps }) => ({
 //    	headerLeft: <Button transparent title='Menu' onPress={()=>screenProps.navigate('DrawerOpen')}>
 //    	</Button>,
 //  		});
  		// static navigationOptions = {
    // 			drawerLabel: 'Home',
    // 			headerLeft: <Button transparent title='Menu' onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
    // 			</Button>,
  		// 	};

	render() {
		return (
			<View style={{justifyContent: 'center',alignItems: 'center', flex:1,backgroundColor: 'lightblue' }}> 
				<Text>
					HomePage
				</Text>
				<TouchableOpacity style={{backgroundColor: 'green'}}
					onPress={()=>{this.props.navigation.navigate('Screen_Detail')}}
				>
					<Text>
						Go to Detail 
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}
				>
					<Text>
						Go to Menu 
					</Text>
				</TouchableOpacity>
			</View>
			);
	}
}

const styles = StyleSheet.create({

});
