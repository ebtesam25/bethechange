import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {Icon} from 'react-native-elements';
import CardList from "../components/cardList";
import PostList from '../components/postList';

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};

export default class Home extends React.Component  {
  state = {
    fontsLoaded: false,
    playing: false,
    loc:'Location not set',
    org: true,
    comm: true
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();


  }
  _setOrg(){
    this.setState({org:!this.state.org})
  }
  _setComm(){
    this.setState({comm:!this.state.comm})
  }


_getLocation(){
  fetch('http://api.positionstack.com/v1/reverse?access_key=6326c64cc797f30aadf8cf2494eff26f&query=40.7638435,-73.9729691&limit=2', {
        method: 'GET',
})
    .then((response) => response.json())
    .then((responseJson) => {
console.log(responseJson.data[0].label);
this.setState({'loc':responseJson.data[0].label})
    })
    .catch((error) => {
        console.error(error);
    });
}
  
  getData() {
    return  [
    {
      
    title:"Christmas Dinner Fund",
    image:"https://pbs.twimg.com/media/EaCl5AtVcAA7R20.jpg", 
    location:"Manhattan, NY",
    reached: 50,
    goal : 100,
  },
  {
    
    title:"Christmas Dinner Fund",
    image:"https://pbs.twimg.com/media/EaCl5AtVcAA7R20.jpg", 
    location:"Manhattan, NY",
    reached: 80,
    goal : 100,
  },
  {
    
    title:"Christmas Dinner Fund",
    image:"https://pbs.twimg.com/media/EaCl5AtVcAA7R20.jpg", 
    location:"Manhattan, NY",
    reached: 50,
    goal : 200,
  },
  {
    
    title:"Christmas Dinner Fund",
    image:"https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/02/23/1985096-2103691868.jpg?itok=Xyr_pnp7", 
    location:"Manhattan, NY",
    reached: 50,
    goal : 100,
  },
  ]
  }

  getCData() {
    return  [
    {
      
    title:"Help My Small Business Stay Afloat",
    image:"https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/02/23/1985096-2103691868.jpg?itok=Xyr_pnp7", 
    location:"Manhattan, NY",
    description:"My small business, like so many others, has been greatly affected by the COVID pandemic. I’m behind on my",
    description_long:"Like so many other Americans and families in our community, we’ve fallen on hard times. My wife was unfortunately let go from her longtime job months ago, and despite having substantial savings before the pandemic, we find ourselves extremely low on funds right before Christmas. We’re hoping the wonderful people of this community can help us put food on the table for our kids’ favorite holiday. Any help would be so, so appreaciate.",
    reached: 50,
    goal : 100,
  },
  {
    
    title:"Help My Small Business Stay Afloat",
    image:"https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/02/23/1985096-2103691868.jpg?itok=Xyr_pnp7", 
    location:"Manhattan, NY",
    description:"My small business, like so many others, has been greatly affected by the COVID pandemic. I’m behind on my",
    reached: 80,
    goal : 100,
  },
  {
    
    title:"Help My Small Business Stay Afloat",
    image:"https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2018/02/15/1103016-1601631012.jpg?itok=8LtxGwLy", 
    location:"Manhattan, NY",
    description:"My small business, like so many others, has been greatly affected by the COVID pandemic. I’m behind on my",
    reached: 50,
    goal : 200,
  },
  {
    
    title:"Help My Small Business Stay Afloat",
    image:"https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/02/23/1985096-2103691868.jpg?itok=Xyr_pnp7", 
    description:"My small business, like so many others, has been greatly affected by the COVID pandemic. I’m behind on my",
    location:"Manhattan, NY",
    reached: 50,
    goal : 100,
  },
  ]
  }

  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={{width:'80%', height:'5%', resizeMode:'contain', alignSelf:'center', marginTop:'10%'}}></Image>
      <Text style={{marginTop:'2%', alignSelf:'flex-end', textAlign:'right', marginRight:'5%'}}> <Icon name="user" type="evilicon" size={40} color="#227F74" style={{alignSelf:'flex-end'}} onPress={()=>{this.props.navigation.navigate('Settings')}}></Icon></Text>
      <Text style={{position:'relative',fontSize:30,marginTop:'-5%',textAlign:'left', marginLeft:'7.5%', color:'#227F74', fontFamily:'FuturaH', width:'100%'}}>Nearby Causes</Text>
      {this.state.loc == 'Location not set' &&  <View style={styles.playing}>
      
      <View>
            <Text style={{position:'relative',fontSize:22,marginTop:'10%',textAlign:'center', color:'#364f6b', fontFamily:'FuturaH', marginLeft:'5%', marginRight:'5%'}}>Support your local community. Explore charities and fundraisers near you.</Text>
           
            <Text onPress={()=>{this._getLocation()}} style={{position:'relative',fontSize:15,marginTop:'5%',textAlign:'justify', color:'#FFF', alignSelf:'center', fontFamily:'FuturaH', backgroundColor:'#227F74',padding:'5%', width:'70%',borderRadius:30}}><Icon name="location-arrow" type="font-awesome" color="#FFF" size={15}></Icon> Get Current Location</Text>
            </View>
      </View>}
      
      {this.state.loc != 'Location not set' && <Text style={{position:'relative',fontSize:20,marginTop:'10%',textAlign:'left', color:'#227F74', fontFamily:'FuturaH', marginLeft:'5%', marginRight:'5%'}}><Icon name="location-arrow" type="font-awesome" color="#364f6b" size={22}></Icon> {this.state.loc}</Text>}
     {this.state.loc != 'Location not set' && 
     <View style={{flexDirection:'row'}}>

     {this.state.org && <Text onPress={()=>this._setOrg()} style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'10%', marginBottom:'10%', backgroundColor:'#B24C32', padding:'5%', width:'37%', borderRadius:10, alignSelf:'flex-start', marginLeft:'5%', elevation:1}} >Organizations</Text>}
     {this.state.comm && <Text onPress={()=>this._setComm()}  style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'5%', marginBottom:'10%', marginLeft:'5%', backgroundColor:'#B24C32', padding:'5%', width:'37%', borderRadius:10, alignSelf:'flex-end', marginRight:'5%', elevation:1}}>Community</Text>}

     {!this.state.org && <Text onPress={()=>this._setOrg()}  style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'10%', marginBottom:'10%', backgroundColor:'#B24C32', padding:'5%', width:'37%', borderRadius:10, alignSelf:'flex-start', marginLeft:'5%', elevation:1, opacity:0.5}}>Organizations</Text>}
     {!this.state.comm &&<Text onPress={()=>this._setComm()}  style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'5%', marginBottom:'10%', marginLeft:'5%', backgroundColor:'#B24C32', padding:'5%', width:'37%', borderRadius:10, alignSelf:'flex-end', marginRight:'5%', elevation:1 , opacity:0.5}} >Community</Text>}
     </View>}
      {this.state.loc != 'Location not set' &&
    
      <ScrollView style={styles.scrollcontainer}>
        
      {this.state.org && this.state.comm &&
      <CardList itemList={this.getData()}/>}
        {this.state.org && !this.state.comm &&
      <PostList itemList={this.getData()}/>}
        {!this.state.org && this.state.comm &&
      <PostList itemList={this.getCData()}/>}
      </ScrollView>

    }
      
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

  left:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    left:'5%',
    position:'absolute',
  },
  right:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    right:'5%',
    position:'absolute'
  },
  middle:{
    height:'60%',
    width:'60%',
    marginTop:'5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
  },
  album:{
    height:'40%',
    width:'50%',
    marginTop:'7.5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
    borderRadius:10,
  },
 
  playing:{
      width:'70%',
      height:'30%',
      elevation:1,
      backgroundColor:'#FDFDFD',
      alignSelf:'center',
      marginTop:'5%',
      borderRadius:20
  }
  
});