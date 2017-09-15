import React, { Component } from 'react';
import {
  StyleSheet,
  View,Text,Image,TouchableOpacity
} from 'react-native';
export default class Menu extends Component {
  render() {
    return (
      <View style={styles.body}>
      	<View style={styles.logo}>
            <Image style={styles.img}
            source={require('./../../images/logo.jpg')}
            />
        </View>
        <View style={styles.div1}>
            <View style={styles.items}>
                <Image style={styles.img}
                  source={require('./../../images/icons/search_2.png')}/>
                <Text style={{fontSize: 20,textAlign: 'center', color: '#f2b334' }}>
                      Search
                  </Text>
            </View>
            <View style={styles.items1}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Screen_Detail')}}>
                  <Image style={styles.img}
                    source={require('./../../images/icons/playground_2.png')}
                  />
                  <Text style={{fontSize: 20,textAlign: 'center', color: '#f2b334' }}>
                      Detail
                  </Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.div2}></View>
        <View style={styles.div3}></View>
        <View style={styles.div4}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch', 
  },
  logo:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    borderBottomWidth: 2,
    borderColor: '#ffffff'
  },
  div1:{
        flex: 1,
        backgroundColor: '#3342b5',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch', 
  },
  div2:{
        flex: 1,
        backgroundColor: 'lightblue',
  },
  div3:{
        flex: 1,
        backgroundColor: 'cyan',
  },
  div4:{
        flex: 1,
        backgroundColor: 'red',
  },
  f_column:{
    flex: 1,
  },
  img:{
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  items:{
    flex: 1,
    justifyContent: 'center',
    borderRightWidth: 2,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#ffffff'
  },
  items1:{
    flex: 1,
    justifyContent: 'center',
    borderRightWidth: 2,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#ffffff' 
  },
});
