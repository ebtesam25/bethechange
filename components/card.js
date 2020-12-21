import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Svg, Line, Path} from 'react-native-svg'

export default function Card({ route,title,image, location, description, reached, goal}) {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
         <Image source={{ uri: image }} style={styles.photo} />
        <View style={styles.fishdeets}>  
        <Text style={styles.description}>
                {location}
            </Text>
        <Text style={styles.name}>{title}</Text>
       <Text style={styles.goal}>${reached} of ${goal} goal</Text>
       <Svg height="40" width="100">
  <Path d={`M10 10 H ${(reached/goal)*100}`} stroke="#B24C32" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
</Svg>  
         
        </View>
   
        
    </View>
)}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:'2%',
        borderRadius: 10,
        backgroundColor: '#FFF',
        elevation:1,
        alignSelf:'center',
        justifyContent:'center',
        width:100,
        
    },
    name: {
        fontSize: 20,
        color:'#227F74',
        fontFamily:'FuturaH',
        marginTop: '5%',
        marginBottom:'5%',
        textAlignVertical:'center',

    },
     photo: {
        height: 120,
        width: 190,
        justifyContent:'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        resizeMode:'contain',
        
        
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
    description: {
        fontSize: 18,
        fontFamily:'FuturaL',
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