import React from "react";
import {View, Text,StyleSheet,TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

const Orders =({navigation})=>{

   
        return(
            <View style={{flex:1}}>
                <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                <View style={{backgroundColor:'white', width:'100%', height:'9%'}}>
                    <View style={{flex :2 ,backgroundColor:'white', flexDirection:'row',margin:15,}}>
                        <View >
                            <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                                <Image style={{width:20,height:20}} source={require('../Assets/Vector.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',marginLeft:60}}>
                             <Text style={{color:'black',fontWeight:'bold'}}>Order 5 Aug, 2020, 3:20 PM</Text>
                        </View>
                    </View>
                </View>
                <View style ={{height:'81%'}}>
                    <View >
                    <ScrollView>
                        <View style={{margin:10}}>
                            <ImageBackground style={{width:'100%',height:140}} source={require('../Assets/welcome.png')}>
                                <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}><Text style={{color:'white', fontSize:20, fontWeight:'bold'}}>Thanks for your order!</Text></View>
                            </ImageBackground>
                            <View style={{marginTop:15}}><Text style={{color:'black'}}> Receipt No. 345271</Text></View>
                            <View style={{marginTop:20}}><Text style={{fontWeight:'bold', color:'black'}}> Order Summery</Text></View>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
                                <View style={{marginTop:15}}><Text style={{color:'black'}}> Receipt No. 345271</Text></View>
                                <View style={{marginTop:15}}><Text style={{color:'black'}}> 2</Text></View>  
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:4}}> 
                                <View style={{marginTop:15}}><Text style={{color:'black'}}>Order Placed</Text></View>
                                <View style={{marginTop:15}}><Text style={{color:'black',fontWeight:'bold'}}> 5 Aug, 2020, 2:00 PM</Text></View>  
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:4}}> 
                                <View style={{marginTop:15}}><Text style={{color:'black'}}>Order Placed</Text></View>
                                <View style={{marginTop:15}}><Text style={{color:'black',fontWeight:'bold'}}> 5 Aug, 2020, 3:00 PM</Text></View>  
                            </View>
                            <View style={{marginTop:20}}><Text style={{fontWeight:'bold', color:'black'}}> Billing info</Text></View>
                            <View style={{marginTop:15}}><Text style={{ color:'black'}}> 1226 University Road, 45</Text></View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:4}}> 
                                <View style={{marginTop:15}}><Text style={{color:'black'}}> Subtotal</Text></View>
                                <View style={{marginTop:15}}><Text style={{fontWeight:'bold',color:'black'}}>$10.00</Text></View>  
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:4}}> 
                                <View style={{marginTop:15}}><Text style={{color:'black'}}> Tax</Text></View>
                                <View style={{marginTop:15}}><Text style={{fontWeight:'bold',color:'black'}}> $0.00</Text></View>  
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:4}}> 
                                <View style={{marginTop:15}}><Text style={{color:'black'}}> Delivery</Text></View>
                                <View style={{marginTop:15}}><Text style={{fontWeight:'bold',color:'black'}}> $1.00</Text></View>  
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:4}}> 
                                <View style={{marginTop:15}}><Text style={{color:'black'}}> Tax</Text></View>
                                <View style={{marginTop:15}}><Text style={{fontWeight:'bold',color:'black'}}> -$2.00</Text></View>  
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:4}}> 
                                <View style={{marginTop:15}}><Text style={{fontWeight:'bold',color:'black' }}> Total</Text></View>
                                <View style={{marginTop:15}}><Text style={{fontWeight:'bold',color:'black', fontSize:20}}> $9.00</Text></View>  
                            </View>
                            <View style={{marginTop:15,marginLeft:4}}><Text style={{fontWeight:'bold', color:'black'}}>Payment Method</Text></View>
                            <View style={{flexDirection:'row',marginTop:10}}> 
                                <Image source={require('../Assets/visa.png')} style={{width:30,height:20,marginLeft:5}}></Image>
                                <View ><Text style={{color:'black', fontSize:15}}> ...4587</Text></View>  
                            </View>
                        </View>
                    </ScrollView>
                    </View>
                </View>
                <View style={{backgroundColor:'white', width:'100%', height:'10%', }}>
                    <View style={{flexDirection:'row', margin:12, justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={()=>navigation.navigate('List')}>
                            <View style={{backgroundColor:"white",borderColor:'gray', borderWidth:1,width:140,height:35, justifyContent:'center',alignItems:'center',borderRadius:20}}>
                                <Text style={{color:'black'}}>BACK TO SHOP </Text> 
                            </View>
                        </TouchableOpacity>
                        <View style={{backgroundColor:"white",borderColor:'green', borderWidth:1,width:140,height:35, justifyContent:'center',alignItems:'center',borderRadius:20}}>
                            <Text style={{color:'green'}}>TRACK ORDERS </Text> 
                        </View>
                    </View>
                    
                </View>
            </View>
            </View>
        )
    
}
export default Orders