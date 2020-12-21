import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};

export default class Splash extends React.Component  {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.header}></Image>
      <View style={{backgroundColor:'#227F74', marginTop:'10%'}}>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'left', color:'#FFF', fontFamily:'FuturaH', marginTop:'15%', backgroundColor:'#227F74', padding:'5%', width:'100%', alignSelf:'center'}}>Microdonations compounded to make a big impact.</Text>
      <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'5%', marginBottom:'10%', backgroundColor:'#B24C32', padding:'5%', width:'60%', borderRadius:10, alignSelf:'flex-end', marginRight:'10%', elevation:1}} onPress={()=>{this.props.navigation.navigate('Login');}}>Get Started</Text>
      </View>
    </View>
    );
    }
    else {
    return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#FFF9EB'
  },
  header:{
    height:'30%',
    width:'70%',
    marginTop:'20%',
    resizeMode:'contain',
    alignSelf:'center'
  },
  
});