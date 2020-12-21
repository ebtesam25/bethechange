import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Svg, Line, Path} from 'react-native-svg'
import { Icon } from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';


export default function Settings({ route}) {
    const navigation = useNavigation();

    const [once, setOnce] = useState(false)
    const [recurring, setRecurring] = useState(false)
    const [value, setValue] = useState(null);
    const [limit, setLimit] = useState(200);
    const [items, setItems] = useState([ {label:'Weekly',value:'weekly'}, {label:'Monthly',value:'monthly'}, {label:'Annually',value:'annually'}  ]);
   let controller;
    return (
    <View style={styles.container}>
          <Text style={{position:'absolute', zIndex:5, top:30, left:10, elevation:2}}><Icon color="#195F56" name="chevron-back" size={40} type="ionicon"></Icon></Text>
         <Text style={styles.title}>Donation Settings</Text>

       {!recurring && <View>  
           <Text style={styles.name}>Donation Limit</Text>
         <Text style={styles.location}>
                Your <Text style={{fontWeight:'bold',textDecorationStyle:'solid', textDecorationLine:'underline'}}>annual</Text> donation limit is
            </Text>
           <Text style={{marginHorizontal:'20%', width:'80%', alignSelf:'center', color:'#195F56', fontFamily:'FuturaH', fontSize:50, height:50, textAlign:'center', paddingLeft:20}}>${limit}</Text>
           <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'5%', marginBottom:'10%', backgroundColor:'#195F56', padding:'5%', width:'60%', borderRadius:10, alignSelf:'center', marginRight:'10%', elevation:1}} onPress={()=>setRecurring(true)}>Edit</Text>
           </View>}

{recurring && 
<View>
           <Text style={styles.name}>Time Frame:{"\n"}<Text style={{fontFamily:'FuturaL', fontSize:18}}>Choose the time frame you want to limit your maximum donation amount to. Once you’ve donated your maximum limit within the timeframe you set, we’ll reset your donation clock.</Text></Text>
    
           <DropDownPicker
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
/>
<Text style={styles.donation}>Donation Amount Limit:{"\n"}<Text style={{fontFamily:'FuturaL', fontSize:18}}>Choose the maximum amount you wish to donate within the time frame you set above.</Text></Text>
<TextInput onChangeText={(value)=>{setLimit(value)}} style={{marginHorizontal:'20%', width:'60%',alignSelf:'flex-start', marginTop:'5%', fontFamily:'FuturaH', fontSize:20, height:50, borderRadius:5, backgroundColor:'#FFF', elevation:1, paddingLeft:20}} placeholder="$0+"></TextInput>
<Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'25%', marginBottom:'10%', backgroundColor:'#195F56', padding:'5%', width:'60%', borderRadius:10, alignSelf:'center',  elevation:1}} onPress={()=>setRecurring(false)}>Confirm</Text>


</View>}       
       

        <View style={{position:'absolute', bottom:0, flexDirection:'row', backgroundColor:'rgba(255,255,255,0.75)', height:60, width:'100%'}}> 

        <Image source={require('../assets/citi.png')} style={{height:50, width:50, resizeMode:'contain', marginLeft:'20%', borderRadius:2}}></Image>
        <View style={{marginTop:'2.5%', marginLeft:'2.5%'}}>
            <Text style={{fontWeight:'bold'}}>Citibank Personal Checking</Text>
        <Text>•••• 5583</Text>
        </View>
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
        marginRight:'10%',
        textAlignVertical:'center',

    },
    donation: {
        fontSize: 20,
        color:'#227F74',
        fontFamily:'FuturaH',
        marginTop: '35%',
        marginLeft:'10%',
        marginRight:'10%',
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