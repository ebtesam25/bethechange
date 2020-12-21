import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Svg, Line, Path} from 'react-native-svg'
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default function Details({ route}) {
    const navigation = useNavigation();
    const { title,image, location, description, reached, goal } = route.params;
    return (
    <View style={styles.container}>
         <Image source={{ uri: image }} style={styles.photo} />
       
         <Text style={{position:'absolute', zIndex:5, top:30, left:10, elevation:2}}><Icon color="#B24C32" name="chevron-back-circle" size={50} type="ionicon"></Icon></Text>
       <ScrollView>
        <View style={styles.fishdeets}>  
        <Text style={styles.location}>
                {location}
            </Text>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.description}>
                {description}
     
            </Text>
          
       <Text style={styles.goal}>${reached} raised of ${goal} goal</Text>
       <Svg height="40" width="350">
  <Path d={`M10 10 H ${(reached/goal)*350}`} stroke="#B24C32" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
</Svg>  
<View style={{backgroundColor:'#227F74',width:'120%',marginLeft:'-10%', paddingLeft:'5%', paddingBottom:'25%'}}>
   <Text style={{position:'relative',fontSize:20,textAlign:'left', color:'#FFF', fontFamily:'FuturaH', marginTop:'5%',  paddingLeft:'5%', width:'100%', alignSelf:'center'}}>Donations</Text>
   <Text style={{position:'relative',fontSize:17, textAlign:'left', color:'#FFF', fontFamily:'FuturaL', marginTop:'2.5%', paddingLeft:'5%',  width:'100%',marginBottom:'5%', alignSelf:'center'}}>Last donation 48m ago</Text>
   <View style={{flexDirection:'row'}}>
   <Image source={require('../assets/donors.png')} style={{marginLeft:'5%', paddingBottom:'10%', marginBottom:'10%'}}></Image>
   <Text style={{color:'#FFF', fontFamily:'FuturaH', marginTop:'2.5%'}}>+380</Text>
   </View>

   </View>  
 
        </View>
  </ScrollView>

        <View style={{position:'absolute', bottom:0,  backgroundColor:'rgba(255,255,255,0.75)', height:90, width:'120%', marginLeft:'-10%'}}> 
   <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'5%', marginBottom:'10%', backgroundColor:'#B24C32', padding:'3%', width:'50%', borderRadius:10, alignSelf:'flex-end', marginRight:'10%', opacity:1}}   
    onPress={()=>{navigation.navigate('Donate',{title:title,image:image, location:location, description:description, reached:reached, goal:goal})}}>Donate</Text>

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
        marginTop:300,
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