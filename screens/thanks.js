import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Svg, Line, Path} from 'react-native-svg'
import { Icon } from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';


export default function Thanks({ route}) {
    const navigation = useNavigation();
    const { title,image } = route.params;

    return (
    <View style={styles.container}>
          <Text style={{position:'absolute', zIndex:5, top:40, right:20, elevation:2}} onPress={()=>navigation.navigate('Home')}><Icon color="#195F56" name="close" size={30} type="ionicon"></Icon></Text>
         <Text style={styles.title}>Donate</Text>
         <Text style={styles.thanks}>Thank you for your support!</Text>
         <Text style={styles.description}>Big changes start with small changes. Microdonations from people like you make a huge difference - we apprecaite your support.</Text>
        
        <View style={{backgroundColor:'#195F56', paddingVertical:'10%', marginTop:'10%'}}>
         <Text style={styles.name}><Text style={{fontFamily:'FuturaL'}}> You supported</Text>{"\n"}{title}</Text>
         <Image source={{ uri: image }} style={styles.photo} />
         </View>      
       

      
   
    </View>
)}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF9EB',
        elevation:1,
        alignSelf:'center',
        width:'100%',
        
    },
    title: {
        fontSize: 30,
        color:'#227F74',
        fontFamily:'FuturaH',
        marginTop: '10%',
        marginBottom:'5%',
        textAlignVertical:'center',
        textAlign:'center',

    },
    name: {
        fontSize: 20,
        color:'#FFF',
        fontFamily:'FuturaH',
        marginTop: '1.5%',
        marginLeft:'10%',
        textAlignVertical:'center',

    },
    thanks: {
        fontSize: 50,
        color:'#227F74',
        fontFamily:'FuturaH',
        marginTop: '1.5%',
        marginLeft:'10%',
        textAlignVertical:'center',

    },
     photo: {
        height: 225,
        width:350,
        justifyContent:'center',
        resizeMode:'contain',
        alignSelf:'center',
        borderRadius:10,
        marginTop:'2.5%',
        
        
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
        marginTop:'2.5%',
        marginLeft:'10%'
    },
    description: {
        fontSize: 18,
        fontFamily:'FuturaL',
        color:'#227F74',
        marginTop:'2.5%',
        marginLeft:'10%',
        marginRight:'10%'
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