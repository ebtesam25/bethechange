import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Svg, Line, Path} from 'react-native-svg'
import { Icon } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';


export default function Add({ route}) {
    const navigation = useNavigation();
    const [location,setLoc] = useState(null);
    const [title,setTitle] = useState(null);
    const [description,setDesc] = useState(null);
    const [goal,setGoal] = useState(null);

    const [image, setImage] = useState(null);

    const _getLocation = ()=>{
        fetch('http://api.positionstack.com/v1/reverse?access_key=6326c64cc797f30aadf8cf2494eff26f&query=40.7638435,-73.9729691&limit=2', {
              method: 'GET',
      })
          .then((response) => response.json())
          .then((responseJson) => {
      console.log(responseJson.data[0]);
      setLoc(responseJson.data[0].locality+", "+responseJson.data[0].region_code);
      console.log(location)
          })
          .catch((error) => {
              console.error(error);
          });
      }
      useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
   _getLocation()
    return (
    <View style={styles.container}>

         <Text style={{position:'absolute', zIndex:5, top:30, left:10, elevation:2}}><Icon color="#227F74" name="chevron-back" size={50} type="ionicon"></Icon></Text>
         <Text style={{position:'relative',fontSize:25,textAlign:'center', color:'#227F74', fontFamily:'FuturaH', marginTop:'12%',  paddingLeft:'5%', width:'100%', alignSelf:'center'}}>Add</Text>
         <Text><Icon name="add-circle" type="ionicon" size={30} color="#FFF" style={{paddingTop:'10%'}}></Icon></Text><Text onPress={pickImage}style={{position:'relative',fontSize:15,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'5%', marginBottom:'10%', backgroundColor:'#B24C32', padding:'3%', paddingTop:'2%', width:'50%', borderRadius:10, alignSelf:'center', opacity:1, textAlignVertical:'center'}} > Pick an Image</Text> 
      {image && <Image source={{ uri: image }} style={styles.photo} />}
       <ScrollView>
        <View style={styles.fishdeets}>  
        <Text style={styles.location}>
          Location: {location}
            </Text>
        <TextInput onChangeText={(value)=>{setTitle(value)}} style={styles.name} placeholder="Title"></TextInput>
        <TextInput onChangeText={(value)=>{setDesc(value)}}  style={styles.description} numberOfLines={5}  style={{ textAlignVertical:'top', color:'#000'}} placeholder="Description">
            </TextInput>
          
            <TextInput onChangeText={(value)=>{setGoal(value)}} style={styles.description} placeholder="Goal $0+"></TextInput>
 
        </View>
  </ScrollView>

        <View style={{position:'absolute', bottom:0,  backgroundColor:'rgba(255,255,255,0.75)', height:90, width:'120%', marginLeft:'-10%'}}> 
   {image &&<Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'5%', marginBottom:'10%', backgroundColor:'#B24C32', padding:'3%', width:'50%', borderRadius:10, alignSelf:'flex-end', marginRight:'10%', opacity:1}}   
    onPress={()=>{navigation.navigate('Success',{title:title,image:image, location:location, description:description, goal:goal})}}>Create</Text>}

</View>
   
    </View>
)}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF9EB',
        elevation:1,
        alignSelf:'center',
        justifyContent:'center',
        width:'100%',
        
    },
    name: {
        fontSize: 20,
        color:'#227F74',
        fontFamily:'FuturaH',
        marginTop: '1.5%',
        marginBottom:'5%',
        textAlignVertical:'center',

    },
     photo: {
        height: 295,
        width:500,
        alignSelf:'center',
        resizeMode:'contain',
        position:'absolute',
        top:-30,
        
        
    },
    fishdeets: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        
    },
    goal: {
        fontSize: 18,
        fontFamily:'FuturaH',
        color:'#227F74',
        marginTop:'5%',
        marginBottom:'5%'
    },
    location: {
        fontSize: 18,
        fontFamily:'FuturaL',
        color:'#227F74',
        marginTop:200,
    },
    description: {
        fontSize: 18,
        fontFamily:'FuturaL',
        color:'#227F74',
        marginTop:'1.5%',
    },
    more: {
        fontSize: 18,
        fontFamily:'FuturaH',
        color:'#227F74',
        marginTop:'5%',
    },
   deets:{
       borderRadius:30,
       fontFamily:'FuturaH',
       elevation:2,
       backgroundColor:'#379DA6',
       color:'#FFF',
       fontSize:15,
       padding:'5%',
       textAlign:'center',
       width:'50%',
       left:'22.5%',
       marginTop:'5%',
       marginBottom:'7.5%',
   }
});