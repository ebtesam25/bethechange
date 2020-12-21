import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Svg, Line, Path} from 'react-native-svg'

export default function Post({ route,title,image, location, description, description_long, reached, goal}) {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
         <Image source={{ uri: image }} style={styles.photo} />
        <View style={styles.fishdeets}>  
        <Text style={styles.location}>
                {location}
            </Text>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.description}>
                {description}...  <Text style={styles.more} onPress={()=>{navigation.navigate('Details',{title:title,image:image, location:location, description:description_long, reached:reached, goal:goal})}}>
                +MORE
            </Text>
            </Text>
          
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
        borderRadius: 20,
        backgroundColor: '#FFF',
        elevation:1,
        alignSelf:'center',
        justifyContent:'center',
        width:350,
        
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
        height: 200,
        width: 350,
        alignSelf:'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        resizeMode:'contain',
        position:'absolute',
        top:0,
        
        
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
        marginTop:210,
    },
    description: {
        fontSize: 18,
        fontFamily:'FuturaL',
        color:'#227F74',
        marginTop:'5%',
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