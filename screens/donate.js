import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Svg, Line, Path} from 'react-native-svg'
import { Icon } from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';


export default function Donate({ route}) {
    const navigation = useNavigation();
    const { title,image, location, description, reached, goal } = route.params;
    const [once, setOnce] = useState(false)
    const [recurring, setRecurring] = useState(false)
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([ {label:'Weekly',value:'weekly'}, {label:'Monthly',value:'monthly'}, {label:'Annually',value:'annually'}  ]);
   let controller;
    return (
    <View style={styles.container}>
          <Text style={{position:'absolute', zIndex:5, top:30, left:10, elevation:2}}><Icon color="#195F56" name="chevron-back" size={40} type="ionicon"></Icon></Text>
         <Text style={styles.title}>Donate</Text>
         <Text style={styles.name}>{title}</Text>
         <Image source={{ uri: image }} style={styles.photo} />
         <Text style={styles.name}>Set up microdonations</Text>
         <Text style={styles.location}>
                How much to donate (total):
            </Text>
            <TextInput style={{marginHorizontal:'20%', width:'80%', alignSelf:'center', fontFamily:'FuturaH', fontSize:20, height:50, borderRadius:5, borderWidth:1, borderColor:'#195F56', paddingLeft:20}} placeholder="$0+"></TextInput>
         <View style={{flexDirection:'row', marginLeft:'10%'}}>
            
            <CheckBox
      disabled={false}
      value={once}
      onValueChange={(newValue) => setOnce(newValue)}
    />
         <Text style={{fontFamily:'FuturaL', fontSize:17, marginTop:'1.5%'}}>One-time donation</Text>
          </View> 

          <View style={{flexDirection:'row', marginLeft:'10%'}}>
            
            <CheckBox
      disabled={false}
      value={recurring}
      onValueChange={(newValue) => setRecurring(newValue)}
    />
    
         <Text style={{fontFamily:'FuturaL', fontSize:17, marginTop:'1.5%', marginRight:'10%'}}>Recurring donation - We’ll round up each purchase you make on your card to the nearest dollar, donating the change towards this cause until it reaches the total amount you set.</Text>
          </View> 
          
        {recurring &&  <DropDownPicker
          containerStyle={{height: 40}}
          style={{width:'60%', alignSelf:'center', backgroundColor:'#FFF9EB'}}
    items={items}
    controller={instance => controller = instance}
    onChangeList={(items, callback) => {
        new Promise((resolve, reject) => resolve(setItems(items)))
            .then(() => callback())
            .catch(() => {});
    }}
 
    defaultValue={value}
    onChangeItem={item => {setValue(item.value); console.log(item.value)}}
/>}


       
       

        <View style={{position:'absolute', bottom:0,  backgroundColor:'rgba(255,255,255,0.75)', height:90, width:'120%', marginLeft:'-10%'}}> 
   <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'5%', marginBottom:'10%', backgroundColor:'#B24C32', padding:'3%', width:'50%', borderRadius:10, alignSelf:'flex-end', marginRight:'10%', opacity:1}}  onPress={()=>{navigation.navigate('Thanks',{title:title,image:image, location:location, description:description, reached:reached, goal:goal})}} >Donate</Text>

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
        marginTop:'2.5%',
        marginLeft:'10%'
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